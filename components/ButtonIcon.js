import { Pressable, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

function ButtonIcon({name, size, color}){
    return <Pressable style={(({pressed}) => pressed && styles.btnPressed)}>
        <Ionicons name={name} size={size} color={color}/>
    </Pressable>
}

export default ButtonIcon;

const styles = StyleSheet.create({
    btnPressed:{
        opacity:0.50
    }
})