import { Pressable, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

function ButtonIcon({ name, size, color, onPress }) {
    return (
        <Pressable
            style={(({ pressed }) => pressed && styles.btnPressed)}
            onPress={onPress}
        >
            <Ionicons name={name} size={size} color={color} />
        </Pressable>
    )
}

export default ButtonIcon;

const styles = StyleSheet.create({
    btnPressed: {
        opacity: 0.50
    }
})