import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.softGray};
  padding: 8px 12px;
  align-self: flex-start;
`;

export const Title = styled.Text``;
