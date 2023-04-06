import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem(mealItemData) {
  const navigation = useNavigation();
  const { id } = mealItemData;

  const mealItemHandler = () => {
    navigation.navigate("MealOverview", { mealId: id });
  };

  return (
    <View style={styles.mealItemContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.btnPressed : null)}
        onPress={mealItemHandler}
      >
      <MealDetails parent={'MealItem'} mealItemData={mealItemData} />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItemContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 8,
  },
  btnPressed: {
    opacity: 0.5,
  },
});
