import React from 'react';
import { inject, observer } from 'mobx-react';
import { Greetings } from './components/Greetings';
import { SignInForm } from './components/SignInForm';
import { AuthStore } from '../../store';
import { Container } from './styles';

interface Props {
  AuthStore?: typeof AuthStore;
}

@inject('AuthStore')
@observer
export class SignIn extends React.Component<Props> {
  render() {
    const { AuthStore } = this.props;
    if (!AuthStore) return null;
    return (
      <Container isActive={AuthStore.isExistingUser}>
        {
          !AuthStore.isExistingUser
            ? <Greetings switchMode={AuthStore.switchMode} />
            : <SignInForm store={AuthStore} />
        }
      </Container>
    );
  }
}
