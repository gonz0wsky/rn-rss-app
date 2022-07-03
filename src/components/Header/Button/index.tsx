import React, {FC, memo} from 'react';
import {Container, Title} from './styles';
import {Props} from './types';

const Button: FC<Props> = ({style, title, onPress}) => (
  <Container style={style} onPress={onPress}>
    <Title>{title}</Title>
  </Container>
);

export default memo(Button);
