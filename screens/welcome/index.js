import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} onPress={() => {
      navigation.navigate("ScreenAI3");
    }}>
        <View style={styles.header}>
          <Text style={[styles.headerText, _styles.zovFAkQa]}>{"Welcome to Golf Score"}</Text>
        </View>

        

        
        
      <View style={_styles.kTyPLqOw}></View></ScrollView>
      <View style={_styles.NZIgEWzZ}></View>
    </SafeAreaView>;
};

export default WelcomeScreen;

const _styles = StyleSheet.create({
  NZIgEWzZ: {
    width: 356,
    height: 65
  },
  zovFAkQa: {
    fontSize: 25,
    fontFamily: "Merriweather"
  },
  kTyPLqOw: {
    width: 115,
    height: 51,
    position: "absolute",
    left: 120.5,
    top: 260
  }
});