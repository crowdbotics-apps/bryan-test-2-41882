import { ImageBackground } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        
        <View style={[styles.group, _styles.XTglPLpv]}>
          <Image style={[_styles2.rcjvndBa, _styles.XTglPLpv]} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          
          <TouchableOpacity style={[styles.button, _styles.XTglPLpv]} onPress={() => {
          navigation.navigate("ScreenAI2");
        }}>
            
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, _styles.XTglPLpv]} onPress={() => {
          navigation.navigate("ScreenAI3");
        }}>
            
          </TouchableOpacity>
        </View>
        
      <Pressable onPress={() => {
        navigation.navigate("ScreenAI2");
      }}><View style={_styles.GdJwQLrW}><Text style={_styles.OoIcwtna}>{"Enter Score"}</Text></View></Pressable><ImageBackground source={require("./golf-15.png")} resizeMode="cover"></ImageBackground></ScrollView>
    <View style={_styles.NZIgEWzZ}></View></SafeAreaView>;
};

export default WelcomeScreen;

const _styles = StyleSheet.create({
  GdJwQLrW: {
    width: 115,
    height: 45,
    borderRadius: 4,
    backgroundColor: "#788fea",
    borderColor: "#788fea",
    position: "absolute",
    top: -45,
    left: -57.5,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  OoIcwtna: {
    width: 77,
    height: 22,
    lineHeight: 17,
    fontSize: 14,
    borderRadius: 0,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
    top: 12,
    left: 19
  },
  NZIgEWzZ: {
    width: 356,
    height: 65
  },
  XTglPLpv: {
    backgroundColor: "#362626"
  }
});

const _styles2 = StyleSheet.create({
  rcjvndBa: {
    position: "absolute",
    top: 0
  }
});