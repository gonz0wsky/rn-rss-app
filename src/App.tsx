import reactQueryClient from 'api/client';
import React from 'react';
import {LogBox, Platform, StyleSheet, UIManager} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClientProvider} from 'react-query';
import AppNavigator from 'navigator';
import {ThemeProvider} from 'styled-components/native';
import theme from 'theme';
import {NavigationContainer} from '@react-navigation/native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

LogBox.ignoreLogs([
  "Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => (
  <QueryClientProvider client={reactQueryClient}>
    <GestureHandlerRootView style={styles.gestureHandler}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  </QueryClientProvider>
);

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
});

export default App;
