import { View, Text, StyleSheet } from "react-native";

function RootCompoenent(){
    return (
        <View style={style.rootContainer}>
            <Text>My Root component</Text>
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