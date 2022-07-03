import styled from 'styled-components/native';
import ButtonBase from './Button';
import {ContainerProps} from './types';

export const Container = styled.View<ContainerProps>`
  background-color: ${({theme}) => theme.colors.gray};
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-top: ${({safeTop}) => safeTop}px;
`;

export const Title = styled.Text`
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 8px;
  color: ${({theme}) => theme.colors.yellow};
`;

export const LeftButton = styled(ButtonBase)``;

export const RightButton = styled(ButtonBase)`
  margin-left: auto;
`;
