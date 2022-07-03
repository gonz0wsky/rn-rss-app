export interface IFeedListResponse {
  category: string;
  data: IFeedItem[];
  success: boolean;
}

export interface IFeedItem {
  author: string;
  content: string;
  date: string;
  id: string;
  imageUrl: string;
  readMoreUrl?: string;
  time: string;
  title: string;
  url: string;
}
