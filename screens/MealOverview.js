import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealOverview({ route }) {
    const mealId = route.params.mealId;
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: mealId
        })
    }, [mealId])
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View>
            <MealDetails
                parent={'MealOverview'}
                mealItemData={selectedMeal}
                titleStyle={styles.title}
                instTextStyle={styles.instText}
            />
        </View>
    )
}

export default MealOverview;

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 22
    },
    instText: {
        color: 'white'
    }
})