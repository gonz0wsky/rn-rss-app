import React from 'react';
import type {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {generalStackScreenOptions, rootStackScreenOptions} from './constants';
import {Detail, List} from 'screens';

const {Navigator, Group, Screen} = createNativeStackNavigator();

const AppNavigator: FC = () => (
  <Navigator screenOptions={rootStackScreenOptions}>
    <Group screenOptions={generalStackScreenOptions}>
      <Screen name="List" component={List} />
      <Screen name="Detail" component={Detail} />
    </Group>
  </Navigator>
);

export default AppNavigator;
