import {useFeedList} from 'api/hooks';

const useConnect = () => {
  const {list} = useFeedList();

  return {list};
};

export default useConnect;
