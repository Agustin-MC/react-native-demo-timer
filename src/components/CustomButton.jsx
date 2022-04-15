import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const CustomButton = ({
  onPress,
  label,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 5,
    borderWidth: 5,
    backgroundColor: '#6558F5',
  },
  text: {
    margin: 5,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 5,
    paddingHorizontal: 10,
    fontSize: 15,
  },
});

export default CustomButton;
