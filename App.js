import { StatusBar, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealItems from './screens/MealItems';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ManageCategories'>
        <Stack.Screen name='ManageCategories' component={CategoriesScreen} />
        <Stack.Screen name='MealItem' component={MealItems} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
