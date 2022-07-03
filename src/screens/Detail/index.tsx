import {Header} from 'components';
import React, {FC} from 'react';
import useConnect from './connect';
import {Container, Image, Description, Title, Scroll} from './styles';

export const Detail: FC = () => {
  const {item, handlePressOpenBrowser, goBack} = useConnect();

  return (
    <Container>
      <Header
        leftTitle="Back"
        onPressLeftButton={goBack}
        onPressRightButton={handlePressOpenBrowser}
        rightTitle="Open in browser"
        title="Detail"
      />
      <Scroll>
        <Image source={{uri: item?.image}} />
        <Title>{item?.title}</Title>
        <Description>{item?.description}</Description>
      </Scroll>
    </Container>
  );
};
