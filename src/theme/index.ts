import {useContext} from 'react';
import {Dimensions, Platform} from 'react-native';
import {ThemeContext} from 'styled-components/native';

export const colors = {
  black: '#222831',
  gray: '#393E46',
  softGray: '#EEEEEE',
  white: '#FFFFFF',
  yellow: '#FFD369',
};

const {width, height} = Dimensions.get('window');

export const device = {
  height,
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios',
  width,
};

const theme = {
  colors,
  device,
};

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext);
