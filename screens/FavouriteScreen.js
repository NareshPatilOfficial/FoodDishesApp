import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

function Favourite(){
    const favouriteMealIds = useSelector(state => state.Favourite.favouriteMealIds)
    const displayedMeal = MEALS.filter(meal => favouriteMealIds.includes(meal.id));
    return(
        <View style={styles.rootContainer}>
            {
            displayedMeal.length > 0
                ? <MealList data={displayedMeal} />
                : <Text style={styles.noMealMsg}>No Favourite Meals Yet!</Text>
            }
        </View>
    )
}

export default Favourite;

const styles = StyleSheet.create({
    rootContainer:{
       flex:1,
       justifyContent:'center'
    },
    noMealMsg:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold'
    }
})