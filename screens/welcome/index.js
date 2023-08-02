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
        <View style={styles.header}>
          <Text style={[styles.headerText, _styles.zovFAkQa]}>{"Welcome to Golf Score"}</Text>
        </View>

        <View style={[styles.group, _styles.XTglPLpv]}>
          <Image style={[_styles2.rcjvndBa, _styles.XTglPLpv]} source={require("./golf-15.png")} resizeMode="cover" />

          <TouchableOpacity style={[styles.button, _styles.XTglPLpv]} onPress={() => {
          navigation.navigate("ScreenAI2");
        }}></TouchableOpacity>
          <TouchableOpacity style={[styles.button, _styles.XTglPLpv]} onPress={() => {
          navigation.navigate("ScreenAI3");
        }}></TouchableOpacity>
        </View>

        <Pressable onPress={() => {
        navigation.navigate("ScreenAI2");
      }}>
          <View style={_styles.GdJwQLrW}>
            <Text style={_styles.OoIcwtna}>{"Enter Score"}</Text>
          </View>
        </Pressable>
        <ImageBackground source={require("./golf-15.png")} resizeMode="cover"></ImageBackground>
      <View style={_styles.VeHHOVgV}><Text style={_styles.HzavToGO}>{"View Scores"}</Text></View></ScrollView>
      <View style={_styles.NZIgEWzZ}><Pressable onPress={() => {
        navigation.navigate("aboutTheApp");
      }}><Text style={_styles.RFgNPwYe}>{"About"}</Text></Pressable></View>
    </SafeAreaView>;
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
    top: -215,
    left: -58,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  OoIcwtna: {
    width: 87,
    height: 22,
    lineHeight: 17,
    fontSize: 14,
    borderRadius: 0,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
    top: 13,
    left: 14
  },
  NZIgEWzZ: {
    width: 356,
    height: 65
  },
  XTglPLpv: {
    backgroundColor: "#362626"
  },
  zovFAkQa: {
    fontSize: 25,
    fontFamily: "Merriweather"
  },
  VeHHOVgV: {
    width: 115,
    height: 45,
    borderRadius: 4,
    backgroundColor: "#788FEA",
    borderColor: "#788FEA",
    position: "absolute",
    left: 121,
    top: 228
  },
  HzavToGO: {
    width: 100,
    height: 17,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    fontFamily: "inherit",
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 8,
    top: 13
  },
  RFgNPwYe: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 128,
    textAlign: "center"
  }
});

const _styles2 = StyleSheet.create({
  rcjvndBa: {
    position: "absolute",
    top: 0
  }
});