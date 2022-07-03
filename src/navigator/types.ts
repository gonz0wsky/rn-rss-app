import type {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreensParams {}
  }
}

export type ScreensParams = {List: undefined; Detail: {id: string}};

export type MainStackScreenProps<Screen extends keyof ScreensParams> =
  NativeStackScreenProps<ScreensParams, Screen>;

export type Props = {};
