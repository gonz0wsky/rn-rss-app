import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  align-self: flex-start;
  background-color: ${({theme}) => theme.colors.softGray};
  padding: 8px 12px;
`;

export const Title = styled.Text``;
