import React, {FC} from 'react';
import useConnect from './connect';
import {Container, Text} from './styles';

export const List: FC = () => {
  const {} = useConnect();

  return (
    <Container>
      <Text>Hi!</Text>
    </Container>
  );
};