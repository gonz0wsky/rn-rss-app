import FastImage from 'react-native-fast-image';
import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 8px;
`;

export const Main = styled(RectButton)`
  flex-direction: row;
  height: 100px;
`;

export const Info = styled.View`
  flex: 1;
  margin: 12px 6px 12px;
`;

export const Title = styled.Text.attrs({numberOfLines: 1})`
  font-size: 16px;
  color: ${({theme}) => theme.colors.black};
`;

export const Description = styled.Text.attrs({numberOfLines: 2})`
  font-size: 12px;
  margin-top: 14px;
  color: ${({theme}) => theme.colors.black};
`;

export const Date = styled.Text.attrs({numberOfLines: 2})`
  font-size: 10px;
  margin-top: 6px;
  color: ${({theme}) => theme.colors.black};
`;

export const Image = styled(FastImage)`
  height: 100%;
  width: 100px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
