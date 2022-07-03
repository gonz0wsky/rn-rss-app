import {IFeedItem} from 'api/hooks/useFeedList/interfaces';

export const normalizeFeedItem = (data: IFeedItem) => ({
  id: data.id,
  title: data.title,
  description: data.content,
  image: data.imageUrl,
  url: data.url,
});

export type FeedItem = ReturnType<typeof normalizeFeedItem>;
