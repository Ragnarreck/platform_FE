import React from 'react';
import { observer } from 'mobx-react';
import { FaLock as LockIcon } from 'react-icons/fa';
import { FiMail as EmailIcon } from 'react-icons/fi';
import { Input } from '../../../../../../ui/Input';
import { Button } from '../../../../../../ui/Button';
import { AuthStore } from '../../../../store';
import {
  Title,
  FormError
} from './styles';

interface Props {
  store: typeof AuthStore;
}

@observer
export class SignInForm extends React.Component<Props> {
  render() {
    const { store } = this.props;
    return (
      <React.Fragment>
        <Title isActive={store.isExistingUser}>
          Войти на платформу
        </Title>
        <Input
          topMargin
          placeholder="Email"
          startAdornment={<EmailIcon size={20} />}
          value={store.email}
          validationRules={store.validationRules.email}
          onChange={store.changeTextField('email')}
        />
        <Input
          topMargin
          type="password"
          placeholder="Пароль"
          startAdornment={<LockIcon size={20} />}
          value={store.password}
          onChange={store.changeTextField('password')}
        />
        {store.formError && (
          <FormError>
            {store.formError}
          </FormError>
        )}
        <Button
          topMargin
          size="large"
          text="Войти"
          type="primary"
          onClick={store.signIn}
          disabled={!store.isLoginFormValid}
        />
      </React.Fragment>
    );
  }
}
