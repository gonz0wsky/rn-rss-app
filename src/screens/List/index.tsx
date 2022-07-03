import {Header} from 'components';
import React, {FC, useCallback} from 'react';
import {formatDate} from 'utils';
import useConnect from './connect';
import {
  Container,
  FeedItem,
  FeedList,
  SafeArea,
  Separator,
  TextInput,
} from './styles';

export const List: FC = () => {
  const {
    dataList,
    handlePressCard,
    handlePresSearch,
    handleSearch,
    searchVisible,
  } = useConnect();

  const renderItem = useCallback(
    ({item}) => (
      <FeedItem
        id={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
        onPress={handlePressCard}
        date={formatDate(item.date)}
      />
    ),
    [handlePressCard],
  );

  return (
    <Container>
      <SafeArea>
        <Header
          title="List"
          rightTitle="Search"
          onPressRightButton={handlePresSearch}
        />
        {searchVisible && <TextInput onChangeText={handleSearch} />}
        <FeedList
          data={dataList}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
        />
      </SafeArea>
    </Container>
  );
};
