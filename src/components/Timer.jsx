import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from './CustomButton';
import {
  useState,
  useEffect,
} from 'react';

const defaultValues = {
  timeLeft: 3,
  isStart: false,
  reset: false,
};

const Timer = () => {
  const [timerState, setTimerState] =
    useState(defaultValues);
  const [increase, setIncrease] =
    useState(0);

  function delay(time) {
    return new Promise((resolve) =>
      setTimeout(resolve, time)
    );
  }

  const decreaseByOneSecond = () => {
    delay(1000).then(() => {
      if (
        timerState.isStart &&
        timerState.timeLeft + increase >
          0
      ) {
        setTimerState((prevState) => {
          if (
            !prevState.isStart ||
            prevState.timeLeft +
              increase ===
              0
          )
            return prevState;
          return {
            ...prevState,
            timeLeft:
              prevState.timeLeft - 1,
          };
        });
      }
    });
  };

  const startTimer = () => {
    if (timerState.isStart) return;
    setTimerState((prevState) => ({
      ...prevState,
      isStart: true,
    }));
  };

  const reset = () => {
    setTimerState(defaultValues);
    setIncrease(0);
  };

  useEffect(() => {
    if (timerState.reset)
      return reset();
    if (
      timerState.isStart &&
      timerState.timeLeft + increase ===
        0
    )
      setTimerState((prev) => ({
        ...prev,
        isStart: false,
      }));
    if (timerState.isStart) {
      decreaseByOneSecond();
    }
  }, [timerState]);

  return (
    <View>
      <Button
        label={'Start Timer'}
        onPress={startTimer}
      />
      <Text>
        {timerState.timeLeft + increase}
      </Text>
      <View
        style={[
          styles.box,
          {width: 50},
        ]}
      />
      <Button
        label={
          'Increase Timer by 5 Seconds'
        }
        onPress={() =>
          setIncrease(increase + 5)
        }
      />
      <Button
        label={'Reset Timer'}
        onPress={() =>
          setTimerState((prev) => ({
            ...prev,
            reset: true,
          }))
        }
      />
      {timerState.timeLeft +
        increase ===
        0 && (
        <View>
          <Text>
            Timer has completed
            successfully!!!
          </Text>
          <Text>
            You can start another timer.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'green',
  },
});

export default Timer;
