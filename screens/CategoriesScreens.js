import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function CategoriesScreen() {
    return (
        <FlatList 
            data={CATEGORIES}
            renderItem={({item}) => <CategoryGridTitle title={item.title} color={item.color}/>}
            keyExtractor={category => category.id}
            numColumns={2}
        />
    )
}

export default CategoriesScreen;