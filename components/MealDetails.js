import { StyleSheet, Text, View, Image } from "react-native";
import MealBreifDetails from "./MealBreifDetails";

function MealDetails({mealItemData, titleStyle, instTextStyle, parent}) {
    const { title, imageUrl, duration, complexity, affordability } = mealItemData;
    return (
        <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <View style={styles.instruction}>
                <Text style={[styles.instText, instTextStyle]}>{duration}m</Text>
                <Text style={[styles.instText, instTextStyle]}>{complexity.toUpperCase()}</Text>
                <Text style={[styles.instText, instTextStyle]}>{affordability.toUpperCase()}</Text>
            </View>
            {
                parent === 'MealOverview' &&
                <MealBreifDetails mealItemData={mealItemData}/>
            }
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
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
});