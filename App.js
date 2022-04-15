import {StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Timer from './src/components/Timer';
import DisplayData from './src/components/DisplayData';

export default function App() {
  return (
    <View style={styles.container}>
      <Timer />
      <DisplayData />
      <StatusBar style="auto" />
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
