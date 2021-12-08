/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { combineReducers, createStore } from 'redux';

import ListOfItems from'./screens/list';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from './store/store';

const styles = StyleSheet.create({
  root:{
     backgroundColor: '#F9E8D5',
     flex: 2,
      alignItems: 'center',
       justifyContent: 'center',
         marginVertical: 8,
  },
  container:{
          height: 50,
          width:250,
          borderColor: 'gray',
          borderWidth:2,
        marginVertical: 40,
  },

})




const store = configureStore();




function App() {
  return(

    <Provider store={store}>
   <ListOfItems/>
  </Provider>
   
  );

}




export default App;
