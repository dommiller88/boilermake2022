import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box, extendTheme } from 'native-base';
import { NativeRouter, Route, Routes} from "react-router-native";
import { Home, Map, NotFound } from './screens/';

export default function App() {
  return (
    <NativeBaseProvider>
        <StatusBar />
        <NativeRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/map" element={<Map />} />
                <Route path="*" component={<NotFound />} />
            </Routes>
        </NativeRouter>
    </NativeBaseProvider>
    
  );
}
