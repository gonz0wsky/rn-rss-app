import React, {FC, memo} from 'react';
import {Container, Date, Description, Image, Info, Main, Title} from './styles';
import {Props} from './types';

const Header: FC<Props> = ({
  date,
  description,
  id,
  image,
  onPress,
  style,
  title,
}) => {
  const handlePress = () => onPress?.(id);
  return (
    <Container style={style}>
      <Main onPress={handlePress}>
        <Image source={{uri: image}} />
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Date>{date}</Date>
        </Info>
      </Main>
    </Container>
  );
};

export default memo(Header);
