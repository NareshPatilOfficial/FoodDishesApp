import { StyleSheet, Text } from "react-native";

function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title:{
        borderBottomWidth:2,
        borderBottomColor:'#00FFFF',
        textAlign:'center',
        paddingBottom:10,
        marginVertical:10,
        fontSize:20,
        color:'#00FFFF',
        fontWeight:'500'
    }
})