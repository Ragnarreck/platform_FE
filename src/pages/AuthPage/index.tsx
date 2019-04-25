import React from 'react';
import { Logo } from '../../ui/Logo';
import { SignIn } from '../../features/Auth/components/SignIn';
import { SignUp } from '../../features/Auth/components/SignUp';
import { Container } from './styles';

export const AuthPage = () => (
    <Container>
        <Logo />
        <SignIn/>
        <SignUp/>
    </Container>
);

