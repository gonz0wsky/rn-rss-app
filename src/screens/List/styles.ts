import {Card} from 'components';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.black};
  flex: 1;
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const FeedList = styled(FlatList).attrs({
  indicatorStyle: 'white',
  scrollEventThrottle: 16,
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
})``;

export const FeedItem = styled(Card)``;

export const LoadingText = styled.Text`
  color: ${({theme}) => theme.colors.white};
`;

export const Separator = styled.View`
  height: 8px;
`;

export const TextInput = styled.TextInput`
  background-color: ${({theme}) => theme.colors.white};
  margin: 16px;
`;
