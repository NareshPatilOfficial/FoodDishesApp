import { StatusBar, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreens';

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
