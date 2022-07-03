import {Card} from 'components';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const FeedList = styled(FlatList).attrs({
  scrollEventThrottle: 16,
  indicatorStyle: 'white',
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
})``;

export const FeedItem = styled(Card)``;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.black};
`;

export const Separator = styled.View`
  height: 8px;
`;

export const TextInput = styled.TextInput`
  background-color: ${({theme}) => theme.colors.white};
  margin: 16px;
  height: 24px;
`;
