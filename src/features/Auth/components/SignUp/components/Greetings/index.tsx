import React from 'react';
import { Button } from '../../../../../../ui/Button';
import {
  Text,
  Title,
  MarginTop,
} from './styles';

interface Props {
  switchMode: () => void;
}

export const Greetings = ({ switchMode }: Props) => (
  <React.Fragment>
    <Title isActive={false}>
      Привет!
    </Title>
    <Text>
      Давай познакомимся
    </Text>
    <MarginTop>
      <Button
        size="large"
        text="Войти"
        type="transparent"
        onClick={switchMode}
      />
    </MarginTop>
  </React.Fragment>
);
