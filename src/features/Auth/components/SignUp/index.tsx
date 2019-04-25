import React from 'react';
import { inject, observer } from 'mobx-react';
import { SignUpForm } from './components/SignUpForm';
import { Greetings } from './components/Greetings';
import { AuthStore } from '../../store';
import { Container } from './styles';

interface Props {
  AuthStore?: typeof AuthStore;
}

@inject('AuthStore')
@observer
export class SignUp extends React.Component<Props> {
  render() {
    const { AuthStore } = this.props;
    if (!AuthStore) return null;
    return (
      <Container isActive={!AuthStore.isExistingUser}>
        {
          AuthStore.isExistingUser
            ? <Greetings switchMode={AuthStore.switchMode} />
            : <SignUpForm store={AuthStore} />
        }
      </Container>
    );
  }
}
