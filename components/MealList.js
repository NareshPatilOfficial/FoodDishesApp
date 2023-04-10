import { FlatList } from "react-native"
import MealItem from "./MealItem"

function MealList({data}){
    return (
        <FlatList 
            data={data}
            renderItem={({item}) => <MealItem {...item}/>}
        />
    )
}

export default MealList;