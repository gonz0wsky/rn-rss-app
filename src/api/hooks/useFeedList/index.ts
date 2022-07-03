import {getRequest} from 'api/request';
import {normalizeFeedItem} from 'models';
import {useMemo} from 'react';
import {useQuery} from 'react-query';
import {IFeedListResponse} from './interfaces';

export const useFeedList = (enabled = true) => {
  const queryFn = () =>
    getRequest<IFeedListResponse>({path: 'news?category=technology'});

  const {data, error, isFetching} = useQuery({
    queryKey: 'feedList',
    queryFn,
    enabled,
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

  return {list, error, isFetching};
};
