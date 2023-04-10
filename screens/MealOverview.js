import { StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useLayoutEffect } from "react";
import ButtonIcon from "../components/ButtonIcon";
import { useDispatch, useSelector } from "react-redux";
import { addInFavourite, removeFromFavourite } from "../components/FavouriteSlice";

function MealOverview({ route, navigation }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const favouriteMealIds = useSelector(state => state.Favourite.favouriteMealIds);
    const dispatch = useDispatch();

    const buttonIconHandler = () => {
        favouriteMealIds.includes(mealId) 
            ? dispatch(removeFromFavourite(mealId))
            : dispatch(addInFavourite(mealId))
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () =>
                <ButtonIcon
                    color={'white'}
                    size={20}
                    name={favouriteMealIds.includes(mealId) ? 'star' : 'star-outline'}
                    onPress={buttonIconHandler}
                />
        })
    }, [navigation, favouriteMealIds, mealId])

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