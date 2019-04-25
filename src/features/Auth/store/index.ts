import fp from 'lodash/fp';
import { every, get } from 'lodash';
import { action, observable, computed } from 'mobx';
import { request } from '../../../config/request';

type Field = 'isExistingUser' | 'username' | 'password' | 'email';

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Store {
  @observable isExistingUser = false;
  @observable username = '';
  @observable email = '';
  @observable password = '';
  @observable formError = null;

  @computed
  get isLoginFormValid() {
    return !!(every(this.validationRules.email.map(item => item.rule)) && this.password);
  }


  @computed
  get isValid() {
    return fp.pipe(
      fp.values,
      fp.flatten,
      fp.map(item => item.rule),
      every
    )(this.validationRules);
  }

  @computed
  get validationRules() {
    return {
      email: [
        {
          id: 'email_format_rule',
          rule: emailRegex.test(this.email.toLowerCase()),
          description: 'Email должен быть в формате email@argo.com'
        },
      ],
      password: [
        { id: 'password_length_rule', rule: this.password.length >= 8, description: 'Минимум 8 символов' },
        { id: 'password_minimum_digit_count_rule', rule: /\d{3}/.test(this.password), description: 'Минимум 3 цифры' },
      ]
    };
  }

  @action
  setError = (err: object) => {
    const errMessage = get(err, 'response.data.err');
    if (errMessage) this.formError = errMessage;
  };

  @action
  clearStore = () => {
    this.email = '';
    this.username = '';
    this.password = '';
  };

  @action changeField = (field: Field) => (value: any) => this[field] = value;
  @action changeTextField = (field: Field) => (event: any) => this[field] = event.target.value;
  @action switchMode = () => {
    this.clearStore();
    this.changeField('isExistingUser')(!this.isExistingUser);
  };

  @action
  signIn = async () => {
    try {
      const result = await request.post('/signin', {
        email: this.email,
        password: this.password
      });
      this.formError = null;
    } catch (err) {
      this.setError(err);
    }
  };

  @action
  signUp = async() => {
    try {
      await request.post('/signup', {
        name: this.username,
        email: this.email,
        password: this.password
      })
    } catch (err) {
      this.setError(err);
    }
  };
}

export const AuthStore = new Store();
