import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store'; 
import Colors from './src/constants/Colors';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import CrustScreen from './src/screens/CrustScreen';
import IngredientsScreen from './src/screens/IngredientsScreen';
import CheckOutScreen from './src/screens/CheckOutScreen';

const Stack = createStackNavigator();

class App extends Component{

  navigation(){
    return(
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerStyle: styles.header}}>
          <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Let\'s Start'}}/>
          <Stack.Screen name='Crust' component={CrustScreen} options={{title: 'Step 2'}}/>
          <Stack.Screen name='Ingredients' component={IngredientsScreen} options={{title: 'Step 3'}}/>
          <Stack.Screen name='CheckOut' component={CheckOutScreen} options={{title: 'Order Summary'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )  
  }

  render(){
    return(
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<SplashScreen/>}>
          {this.navigation()}
        </PersistGate>
      </Provider>
    )
  }
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.green,
    shadowColor: Colors.green,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.5,
    elevation: 11
  }
})

export default App;
