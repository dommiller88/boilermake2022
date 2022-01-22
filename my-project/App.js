import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Home from './screens/Home.js';

export default function App() {
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
