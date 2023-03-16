import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#e2b497',
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#e2b497',
  },
});
