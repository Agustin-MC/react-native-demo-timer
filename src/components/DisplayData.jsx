import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import catfactNinja from '../api/catfactNinja';
import {
  useEffect,
  useState,
} from 'react';

const DisplayData = () => {
  const [fact, setFact] = useState('');
  const fetchData = async () => {
    try {
      const {
        data: {fact},
      } = await catfactNinja.get(
        '/fact'
      );
      setFact(fact);
    } catch (e) {
      setFact(
        'Sorry something went wrong.'
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{fact}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    padding: 5,
    margin: 10,
  },
});

export default DisplayData;
