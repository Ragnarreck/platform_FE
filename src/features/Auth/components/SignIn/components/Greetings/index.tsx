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
      Рад видеть тебя снова!
    </Title>
    <Text>
      Чтобы работать с платформой войди в систему
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
