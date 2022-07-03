import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})``;

export const Image = styled(FastImage)`
  width: 100%;
  height: 200px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-top: 20px;
  color: ${({theme}) => theme.colors.white};
`;

export const Description = styled.Text`
  margin-top: 16px;
  color: ${({theme}) => theme.colors.white};
`;
