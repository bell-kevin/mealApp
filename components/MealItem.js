import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MealDetails from './MealDetails';
import Meal from '../models/meal';

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => pressed ? styles.buttonPressed : null}
        android_ripple={{ color: '#ccc' }}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    margin: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
