import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTitle({title, color}){
    return (
        <View style={[styles.outerContainer, {backgroundColor:color}]}>
            <Pressable android_ripple={{color:'#ccc'}} style={styles.button}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
    outerContainer:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        overflow:'hidden'
    },
    button:{
        flex:1
    },
    innerContainer:{
        flex:1, 
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:18
    }
})