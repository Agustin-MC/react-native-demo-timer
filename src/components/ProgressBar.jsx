import React from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const ProgressBar = ({
  timePassed = 0,
  totalTime = 100,
}) => {
  const d = useWindowDimensions();
  const maxWidth = Math.floor(
    d.width * 0.75
  );

  const progressWidth =
    timePassed === 0
      ? 0
      : Math.floor(
          maxWidth *
            (timePassed / totalTime)
        );

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.outerBox,
          {
            width: maxWidth,
          },
        ]}
      />
      <View
        style={[
          styles.innerBox,
          {
            width: progressWidth,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 25,
  },
  outerBox: {
    backgroundColor: '#797979',
    borderWidth: 3,
    borderColor: '#000000',
    position: 'absolute',
    top: 0,
    height: 25,
  },
  innerBox: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#4169e1',
    height: 25,
    elevation: 1,
  },
});

export default ProgressBar;
