import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  date?: string;
  description?: string;
  id: string;
  image?: string;
  onPress?: (id: string) => void;
  style?: StyleProp<ViewStyle>;
  title?: string;
};
