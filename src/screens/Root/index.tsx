import reactQueryClient from 'api/client';
import React, {FC} from 'react';
import {QueryClientProvider} from 'react-query';
import List from 'screens/List';

const Root: FC = () => (
  <QueryClientProvider client={reactQueryClient}>
    <List />
  </QueryClientProvider>
);

export default Root;
