import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.black};
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})``;

export const Image = styled(FastImage)`
  height: 200px;
  margin-top: 20px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: 24px;
  margin-top: 20px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.white};
  margin-top: 16px;
`;
