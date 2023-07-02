import * as React from "react";
import {Text,View,StyleSheet,Image,TouchableOpacity} from "react-native";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import CreateRecipies from "./screens/createRecipies";
import ReadRecipes from "./screens/readRecipies";
import LoginScreen from "./screens/LoginScreen";
export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const SwitchNavigator = createSwitchNavigator({
  LoginScreen: {
    screen: LoginScreen
  },
})
const AppContainer = createAppContainer(SwitchNavigator)
