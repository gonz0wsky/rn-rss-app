import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const rootStackScreenOptions: NativeStackNavigationOptions =
  Object.freeze({
    headerShown: false,
  });

export const generalStackScreenOptions: NativeStackNavigationOptions =
  Object.freeze({
    ...rootStackScreenOptions,
    animation: 'slide_from_right',
  });
