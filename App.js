import { StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealItems from "./screens/MealItems";
import MealOverview from "./screens/MealOverview";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ManageCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#000080" },
            contentStyle: { backgroundColor: "#7B68EE" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white"
          }}
        >
          <Stack.Screen
            name="ManageCategories"
            component={CategoriesScreen}
            options={{ title: 'Manage Categories' }}
          />
          <Stack.Screen
            name="MealItem"
            component={MealItems}
            options={{ title: 'Meal Items' }}
          />
          <Stack.Screen
            name="MealOverview"
            component={MealOverview}
            options={{ title: 'Meal Detail' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
