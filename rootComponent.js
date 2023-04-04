import { View, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "./components/data/dummy-data";
import CategoryCompoent from "./components/ui/CategoryComponent";

function RootCompoenent(){
    return (
        <View style={style.rootContainer}>
            <Text>My Root component</Text>
            {
                CATEGORIES.map(category => <CategoryCompoent title={category.title} color={category.color} />)
            }
        </View>
    )
}

export default RootCompoenent;

const style = StyleSheet.create({
    rootContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})