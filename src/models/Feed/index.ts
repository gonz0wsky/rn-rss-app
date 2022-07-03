import {IFeedItem} from 'api/hooks/useFeedList/interfaces';
import {parseDate} from 'utils';

export const normalizeFeedItem = (data: IFeedItem) => ({
  id: data.id,
  title: data.title,
  description: data.content,
  image: data.imageUrl,
  url: data.url,
  date: parseDate(data.date, data.time),
});

export type FeedItem = ReturnType<typeof normalizeFeedItem>;
