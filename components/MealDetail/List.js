import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
  return (
    data.map((dataPoint) => (
      <View style={styles.listItem} key={dataPoint}>
        <Text style={styles.itemText}>{dataPoint}</Text>
      </View>
    ))
  );
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#e2b497',
    marginHorizontal: 12,
    marginVertical: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  itemText: {
    textAlign: 'center',
    color: '#351401',
  }
});
