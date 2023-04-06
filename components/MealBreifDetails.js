import { StyleSheet, Text, View } from "react-native";

function MealBreifDetails({mealItemData}) {
    const { ingredients, steps } = mealItemData;
    return(
        <View>
            <View>
                <Text style={styles.title}>INGREDIENTS</Text>
                {
                    ingredients.map((ingredient) => <Text style={styles.ingredient} key={ingredient}>{ingredient}</Text>)
                }
            </View>
            <View>
                <Text style={styles.title}>STEPS</Text>
                {
                    steps.map((step) => <Text key={step}>{step}</Text>)
                }
            </View>
        </View>
    )
}

export default MealBreifDetails;

const styles = StyleSheet.create({
    ingredientContainer:{

    },
    title:{
        borderBottomWidth:2,
        borderBottomColor:'white',
        textAlign:'center',
        paddingBottom:10,
        marginVertical:10,
        fontSize:20,
    },
    ingredient:{
        textAlign:'center'
    }
})