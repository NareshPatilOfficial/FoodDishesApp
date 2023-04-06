import { StyleSheet, View, Text } from "react-native";

function List({data}){
    return data.map(
        (datapint) => 
        <View style={styles.rootContainer} key={datapint}>
            <Text style={styles.text}>{datapint}</Text>
        </View>
        )

};

export default List;

const styles = StyleSheet.create({
    rootContainer:{
        backgroundColor:'#00FFFF',
        borderRadius:50,
        paddingVertical:8,
        marginVertical:5,
        paddingHorizontal:5
    },
    text:{
        textAlign:'center'
    }
})