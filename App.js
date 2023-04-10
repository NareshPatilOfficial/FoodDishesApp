import { StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealItems from "./screens/MealItems";
import MealOverview from "./screens/MealOverview";
import Favourite from "./screens/FavouriteScreen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Provider } from "react-redux";
import store from "./store/store";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ManageCategories"
        component={CategoriesScreen}
        options={{ 
          title: 'Manage Categories',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? '#483D8B' : '#ccc'}
             />
          )
         }}
      />
      <Drawer.Screen
        name="Favourite"
        component={Favourite}
        options={{ 
          title: 'Favourite',
          drawerIcon: ({focused,size}) => (
            <Ionicons
              name="md-star"
              size={size}
              color={focused ? '#483D8B' : '#ccc'}
            />
          )
         }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
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
            name="ManageCategoriesRoot"
            component={DrawerNavigation}
            options={{ title: 'Manage Categories', headerShown: false }}
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
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
