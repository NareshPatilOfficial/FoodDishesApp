import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function CategoriesScreen({navigation}) {

    return (
        <FlatList 
            data={CATEGORIES}
            renderItem={({item}) => <CategoryGridTitle item={item} navigation={navigation}/>}
            keyExtractor={category => category.id}
            numColumns={2}
        />
    )
}

export default CategoriesScreen;