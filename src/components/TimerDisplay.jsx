import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const TimerDisplay = ({seconds}) => {
  return (
    <View style={styles.container}>
      <Element>
        {Math.floor(seconds / 3600) <
          10 && '0'}
        {Math.floor(seconds / 3600)}
      </Element>
      <Element>:</Element>
      <Element>
        {Math.floor(seconds / 60) <
          10 && '0'}
        {Math.floor(seconds / 60)}
      </Element>
      <Element>:</Element>
      <Element>
        {seconds % 60 < 10 && '0'}
        {seconds % 60}
      </Element>
    </View>
  );
};

const Element = ({children}) => (
  <View style={styles.element}>
    <Text style={styles.text}>
      {children}
    </Text>
  </View>
);

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
