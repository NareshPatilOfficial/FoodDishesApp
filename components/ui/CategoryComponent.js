import { StyleSheet, Text, View } from "react-native";

function CategoryCompoent({title, color}){
    return (
        <View style={[style.rootContainer, {backgroundColor:color}]}>
            <Text>{title}</Text>
        </View>
    )
}

export default CategoryCompoent;

const style = StyleSheet.create({
    rootContainer:{
        margin:4,
        padding:30
    }
})