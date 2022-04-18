import {View, Text} from 'react-native';
import Button from './CustomButton';
import {
  useState,
  useEffect,
} from 'react';
import ProgressBar from './ProgressBar';
import TimerDisplay from './TimerDisplay';

const defaultValues = {
  timeLeft: 60,
  isStart: false,
  reset: false,
};

const Timer = () => {
  const [timerState, setTimerState] =
    useState(defaultValues);
  const [
    timeIncrease,
    setTimeIncrease,
  ] = useState(0);

  const totalTimeLeft =
    timerState.timeLeft + timeIncrease;

  function delay(time) {
    return new Promise((resolve) =>
      setTimeout(resolve, time)
    );
  }

  const decreaseByOneSecond = () => {
    delay(1000).then(() => {
      if (
        timerState.isStart &&
        totalTimeLeft > 0
      ) {
        setTimerState((prevState) => {
          if (
            !prevState.isStart ||
            prevState.timeLeft +
              timeIncrease ===
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
    setTimeIncrease(0);
  };

  useEffect(() => {
    if (timerState.reset)
      return reset();
    if (
      timerState.isStart &&
      timerState.timeLeft +
        timeIncrease ===
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
      <TimerDisplay
        seconds={totalTimeLeft}
      />
      <ProgressBar
        timePassed={
          defaultValues.timeLeft -
          timerState.timeLeft
        }
        totalTime={
          defaultValues.timeLeft +
          timeIncrease
        }
      />
      <Button
        label="Increase Timer by 5 Seconds"
        onPress={() =>
          setTimeIncrease(
            timeIncrease + 5
          )
        }
      />
      <Button
        label="Reset Timer"
        onPress={() =>
          setTimerState((prev) => ({
            ...prev,
            reset: true,
          }))
        }
      />
      {totalTimeLeft === 0 && (
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

export default Timer;
