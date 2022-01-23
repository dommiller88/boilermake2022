import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import CourseInput from './screens/CourseInput';
import Map from './screens/Map';
import NotFound from './screens/NotFound';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CourseInput" component={CourseInput} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="NotFound" component={NotFound} />
          </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
    
  );
}