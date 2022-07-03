import React, {FC, memo} from 'react';
import {Container, LeftButton, RightButton, Title} from './styles';
import {Props} from './types';

const Header: FC<Props> = ({
  title,
  leftTitle,
  onPressLeftButton,
  onPressRightButton,
  rightTitle,
  style,
}) => (
  <Container style={style}>
    <Title>{title}</Title>
    {!!leftTitle && (
      <LeftButton title={leftTitle} onPress={onPressLeftButton} />
    )}
    {!!rightTitle && (
      <RightButton title={rightTitle} onPress={onPressRightButton} />
    )}
  </Container>
);
export default memo(Header);
