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
  const normalizedFeed = useMemo(
    () => feed?.map(normalizeFeedItem) ?? [],
    [feed],
  );
  const list = useMemo(
    () =>
      normalizedFeed.sort(
        (a, b) => new Date(b?.date).getTime() - new Date(a?.date).getTime(),
      ),
    [normalizedFeed],
  );

  return {list, error, isLoading};
};
