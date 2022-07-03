import {useNavigation} from '@react-navigation/native';
import {useFeedList} from 'api/hooks';
import {useCallback, useMemo, useRef, useState} from 'react';
import {Props} from './types';

const useConnect = () => {
  const {navigate} = useNavigation<Props['navigation']>();
  const {list} = useFeedList();

  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const dataList = useMemo(
    () =>
      searchText
        ? list.filter(({title}) =>
            title.toLowerCase().includes(searchText.toLowerCase()),
          )
        : list,
    [list, searchText],
  );

  const handlePressCard = useCallback(
    (id: string) => {
      navigate('Detail', {id});
    },
    [navigate],
  );

  const handlePresSearch = () => {
    setSearchVisible(prev => !prev);
  };

  const searchTimeout = useRef<NodeJS.Timeout>();
  const handleSearch = (text: string) => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    searchTimeout.current = setTimeout(() => {
      setSearchText(text);
    }, 500);
  };

  console.log('SEarch text: ', searchText);

  return {
    dataList,
    handlePressCard,
    handlePresSearch,
    searchVisible,
    handleSearch,
  };
};

export default useConnect;
