import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import CourseInput from './screens/CourseInput';
import Map from './screens/Map';
import NotFound from './screens/NotFound';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'white'
  },
};

export default function App() {
  return (
    <NativeBaseProvider>
        <StatusBar />
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ cardStyle: { backgroundColor: '#ffffff' } }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Course Input" component={CourseInput} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Not Found" component={NotFound} />
          </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
    
  );
}