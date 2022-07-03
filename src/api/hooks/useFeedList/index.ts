import {getRequest} from 'api/request';
import {normalizeFeedItem} from 'models';
import {useMemo} from 'react';
import {useQuery} from 'react-query';
import {IFeedListResponse} from './interfaces';

export const useFeedList = () => {
  const queryFn = () =>
    getRequest<IFeedListResponse>({path: 'news?category=technology'});

  const {data, isLoading, error} = useQuery({
    queryKey: 'feedList',
    queryFn,
  });

  const feed = data?.data?.data;
  const list = useMemo(() => feed?.map(normalizeFeedItem) ?? [], [feed]);

  return {list, error, isLoading};
};
