import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} onPress={() => {
      navigation.navigate("ScreenAI2");
    }}>
        <View style={styles.header}>
          <Text style={[styles.headerText, _styles.zovFAkQa]}>{"Welcome to Golf Score"}</Text>
        </View>

        

        
        
      <View style={_styles.kTyPLqOw}><Text style={_styles.nepGErMS}>{"Enter Score"}</Text></View><View style={_styles.PKqZRmPX}><Text style={_styles.uIrHcYhr}>{"View Scores\n"}</Text></View></ScrollView>
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
    top: 260,
    backgroundColor: "#b1bde0",
    borderRadius: 4
  },
  nepGErMS: {
    width: 117,
    height: 20,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    left: -1,
    top: 15,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    fontWeight: "700"
  },
  PKqZRmPX: {
    width: 115,
    height: 45,
    position: "absolute",
    left: 123,
    top: 320,
    backgroundColor: "#b1bde0",
    borderRadius: 4
  },
  uIrHcYhr: {
    width: 115,
    height: 22,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    fontWeight: "700",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: 14
  }
});