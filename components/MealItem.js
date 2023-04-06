import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem(mealItemData) {
  const navigation = useNavigation();
  const { id, title, imageUrl, duration, complexity, affordability } = mealItemData;

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
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.instruction}>
          <Text style={styles.instText}>{duration}m</Text>
          <Text style={styles.instText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.instText}>{affordability.toUpperCase()}</Text>
        </View>
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
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  instText: {
    marginHorizontal: 5,
  },
  instruction: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "center",
  },
  btnPressed: {
    opacity: 0.5,
  },
});
