import { StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealOverview({ route }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <MealDetails
                parent={'MealOverview'}
                mealItemData={selectedMeal}
                titleStyle={styles.title}
                instTextStyle={styles.instText}
            />
        </ScrollView>
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