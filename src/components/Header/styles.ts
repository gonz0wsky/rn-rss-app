import styled from 'styled-components/native';
import ButtonBase from './Button';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.gray};
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Title = styled.Text`
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  color: ${({theme}) => theme.colors.yellow};
`;

export const LeftButton = styled(ButtonBase)``;

export const RightButton = styled(ButtonBase)`
  margin-left: auto;
`;
