import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  leftTitle?: string;
  onPressLeftButton?: () => void;
  onPressRightButton?: () => void;
  rightTitle?: string;
  style?: StyleProp<ViewStyle>;
  title: string;
};

export type ContainerProps = {
  safeTop: number;
};
