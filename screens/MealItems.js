import { Text } from "react-native";
import { View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { StyleSheet } from "react-native";

function MealItems({route}) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    });

    return(
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals}
                renderItem={({item}) => <MealItem {...item}/>}
            />
        </View>
    )
}

export default MealItems;

const styles = StyleSheet.create({
    container:{
        margin:12
    }
})