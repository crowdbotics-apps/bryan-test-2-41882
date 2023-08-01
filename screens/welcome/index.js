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
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.text}>
            Let's build something amazing together!
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("ScreenAI2");
        }}>
            <Text style={styles.buttonText}>Enter Score</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("ScreenAI3");
        }}>
            <Text style={styles.buttonText}>View Scores</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
      <Pressable onPress={() => {
        navigation.navigate("ScreenAI2");
      }}><View style={_styles.GdJwQLrW}><Text style={_styles.OoIcwtna}>{"Enter Score"}</Text></View></Pressable></ScrollView>
    </SafeAreaView>;
};

export default WelcomeScreen;

const _styles = StyleSheet.create({
  GdJwQLrW: {
    width: 115,
    height: 45,
    borderRadius: 4,
    backgroundColor: "#788fea",
    borderColor: "#788fea"
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
  }
});