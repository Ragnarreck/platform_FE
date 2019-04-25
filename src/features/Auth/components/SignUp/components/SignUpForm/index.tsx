import React from 'react';
import { observer } from 'mobx-react';
import {
  FaLock as LockIcon,
  FaUserTie as UserIcon,
} from 'react-icons/fa';
import { FiMail as EmailIcon } from 'react-icons/fi';
import { Input } from '../../../../../../ui/Input';
import { Button } from '../../../../../../ui/Button';
import { AuthStore } from '../../../../store';
import { Title } from './styles';

interface Props {
  store: typeof AuthStore;
}

@observer
export class SignUpForm extends React.Component<Props> {
  render() {
    const { store } = this.props;
    return (
      <React.Fragment>
        <Title isActive>
          Создать аккаунт
        </Title>
        <Input
          topMargin
          placeholder="Твое имя"
          startAdornment={<UserIcon size={20} />}
          value={store.username}
          onChange={store.changeTextField('username')}
        />
        <Input
          topMargin
          placeholder="Email"
          startAdornment={<EmailIcon size={20} />}
          validationRules={store.validationRules.email}
          value={store.email}
          onChange={store.changeTextField('email')}
        />
        <Input
          topMargin
          type="password"
          placeholder="Пароль"
          startAdornment={<LockIcon size={20} color="green" />}
          value={store.password}
          validationRules={store.validationRules.password}
          onChange={store.changeTextField('password')}
        />

        <Button
          topMargin
          size="large"
          type="primary"
          text="Зарегистрироваться"
          onClick={() => null}
          disabled={!store.isValid}
        />
      </React.Fragment>
    );
  }
}
