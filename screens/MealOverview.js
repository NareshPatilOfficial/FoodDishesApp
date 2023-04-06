import { StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useLayoutEffect } from "react";
import ButtonIcon from "../components/ButtonIcon";

function MealOverview({ route, navigation }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight:() => <ButtonIcon color={'white'} size={20} name={'star'} />
        })
    }, [navigation])

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