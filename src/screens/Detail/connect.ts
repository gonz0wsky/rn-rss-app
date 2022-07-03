import {useNavigation, useRoute} from '@react-navigation/native';
import {useFeedList} from 'api/hooks';
import {useCallback, useMemo} from 'react';
import {Linking} from 'react-native';
import {Props} from './types';

const useConnect = () => {
  const {goBack} = useNavigation<Props['navigation']>();
  const {params} = useRoute<Props['route']>();
  const {list} = useFeedList(false);

  const item = useMemo(
    () => list.find(({id}) => id === params?.id),
    [list, params?.id],
  );

  const handlePressOpenBrowser = useCallback(() => {
    if (item?.url) {
      Linking.openURL(item.url);
    }
  }, [item?.url]);

  return {item, goBack, handlePressOpenBrowser};
};

export default useConnect;
