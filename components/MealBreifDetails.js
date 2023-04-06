import { StyleSheet, Text, View } from "react-native";
import List from "./List";
import Title from "./Title";

function MealBreifDetails({mealItemData}) {
    const { ingredients, steps } = mealItemData;
    return(
        <View style={styles.rootContainer}>
            <Title>INGREDIENTS</Title>
            <List data={ingredients} />
            <Title>STEPS</Title>
            <List data={steps} />
        </View>
    )
}

export default MealBreifDetails;

const styles = StyleSheet.create({
    rootContainer:{
        marginHorizontal:50,
        marginBottom:30
    }
})