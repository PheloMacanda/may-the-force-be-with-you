import 'react-native-gesture-handler';
import * as React from 'react';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../splash';

const options = {
  title: 'STARWARS - A New Hope 💙',
  headerStyle: {
    backgroundColor: '#000f',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerMode: 'screen',
};

const Stack = createStackNavigator();

const RootNavigation = () => {
  const scheme = useColorScheme(); // see app.json

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator screenOptions={options}>
          <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default RootNavigation;
