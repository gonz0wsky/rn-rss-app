import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  title: string;
};
