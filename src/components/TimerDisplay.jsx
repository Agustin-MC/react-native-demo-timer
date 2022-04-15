import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const TimerDisplay = ({seconds}) => {
  return (
    <View style={styles.container}>
      <View style={styles.element}>
        <Text style={styles.text}>
          {Math.floor(seconds / 3600) <
            10 && '0'}
          {Math.floor(seconds / 3600)}
        </Text>
      </View>
      <View style={styles.element}>
        <Text style={styles.text}>
          :
        </Text>
      </View>
      <View style={styles.element}>
        <Text style={styles.text}>
          {Math.floor(seconds / 60) <
            10 && '0'}
          {Math.floor(seconds / 60)}
        </Text>
      </View>
      <View style={styles.element}>
        <Text style={styles.text}>
          :
        </Text>
      </View>
      <View style={styles.element}>
        <Text style={styles.text}>
          {seconds % 60 < 10 && '0'}
          {seconds % 60}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
  },
  element: {
    padding: 2,
  },
  text: {
    fontSize: 25,
  },
});

export default TimerDisplay;
