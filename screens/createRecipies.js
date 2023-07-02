import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button, Scroll, ToastAndroid, KeyboardAvoidingView, StatusBar, ImageBackground, TextInput, Platform } from "react-native"
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config"
export default class CreateRecipies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      creator: "",
      ingredients: "",
      recipe: ""
    }
  }
  submitRecipe = ()=>{
    db.collection("recipes").add({
      title: this.state.title,
      creator: this.state.creator,
      ingredients: this.state.ingredients,
      recipe: this.state.recipe
    })
    this.setState({
      title: '',
      creator: '',
      ingredients: '',
      recipe: ''
    })
    Alert.alert("Your recipe has been submitted")
  }
  render() {
    return (
      <View styles={styles.container}>
        <ImageBackground source={require("../assets/background.jpeg")} style={styles.backgroundImage} />
        <KeyboardAvoidingView>
          <TextInput placeholder="recipe name" onChangeText={(text) => {
            this.setState({ title: text, })
          }} value={this.state.title} style={styles.title}
          ></TextInput>
          <TextInput placeholder="author" onChangeText={(text) => {
            this.setState({ author: text, })
          }} value={this.state.author} style={styles.author}>
          </TextInput>
          <TextInput placeholder="ingredients" onChangeText={(text) => {
            this.setState({ ingredients: text, })
          }} value={this.state.ingredients} style={styles.ingredients}>
          </TextInput>
          <TextInput placeholder="recipe" onChangeText={(text) => {
            this.setState({ recipe: text, })
          }} vale={this.state.recipe} style={styles.recipe} ></TextInput>
        </KeyboardAvoidingView>
        <TouchableOpacity onPress = {this.submitRecipe}>
          <Image source = {require("../assets/OIP.jpeg")} style = {styls.submit}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android"?StatusBar.currentHeight: 0
  },
  title: {
    height: 40,
    borderWidth: 2,
    padding: 10,
    marginTop: 150
  },
  author: {
    height: 40,
    borderWidth: 2,
    padding: 10,
    marginTop: 200
  },
  ingredients: {
    height: 40,
    borderWidth:2,
    padding:10,
    marginTop: 250
  },
  recipe: {
    height:40,
    borderWidth: 2,
    padding: 10,
    marginTop: 300
  },
  submit: {
    width: 90,
    height: 50,
    marginLeft: 130
  }
})