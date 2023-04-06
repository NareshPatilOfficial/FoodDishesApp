import { View, Text } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function MealOverview({ route }) {
    const mealId = route.params.mealId;
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: mealId
        })
    }, [mealId])

    return (
        <View>
            <Text>
                MealOverview
            </Text>
        </View>
    )
}

export default MealOverview;