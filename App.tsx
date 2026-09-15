import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation/TabNavigation';
import { Provider } from 'react-redux';
import { store } from './src/store/index';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bc7dec',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
