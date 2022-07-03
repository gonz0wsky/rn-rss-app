import styled from 'styled-components/native';
import ButtonBase from './Button';
import {ContainerProps} from './types';

export const Container = styled.View<ContainerProps>`
  align-items: center;
  background-color: ${({theme}) => theme.colors.gray};
  flex-direction: row;
  padding-top: ${({safeTop}) => safeTop}px;
  width: 100%;
`;

export const Title = styled.Text`
  bottom: 0;
  color: ${({theme}) => theme.colors.yellow};
  left: 0;
  margin-bottom: 8px;
  position: absolute;
  right: 0;
  text-align: center;
`;

export const LeftButton = styled(ButtonBase)``;

export const RightButton = styled(ButtonBase)`
  margin-left: auto;
`;
