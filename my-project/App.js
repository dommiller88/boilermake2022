import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import { Home, Map, NotFound } from './screens';

export default function App() {
  return (
    <NativeBaseProvider>
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

/*
<View style={styles.container}>
        <StatusBar style="auto" />
        <NativeRouter>
            <View>
                <Route exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
            </View>
        </NativeRouter>
      <Home />
    </View>

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
