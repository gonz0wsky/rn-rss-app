import {QueryClient} from 'react-query';
import queryCache from './cache';

const reactQueryClient = new QueryClient({
  queryCache,
});

export default reactQueryClient;
