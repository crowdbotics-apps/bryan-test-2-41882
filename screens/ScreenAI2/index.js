import React, { useState } from "react";
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet } from "react-native";

const GolfScoreScreen = () => {
  const [score, setScore] = useState("");
  const [date, setDate] = useState("");
  const [course, setCourse] = useState("");

  const handleScoreChange = text => {
    if (/^\d+$/.test(text)) {
      setScore(text);
    }
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Enter Score</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Score</Text>
        <TextInput style={styles.input} value={score} onChangeText={handleScoreChange} keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date</Text>
        <TextInput style={styles.input} value={date} onChangeText={setDate} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Course</Text>
        <TextInput style={styles.input} value={course} onChangeText={setCourse} />
      </View>
      <Button title="Submit" onPress={() => console.log("Submitted")} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#E6F2E6"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#336633"
  },
  inputContainer: {
    marginBottom: 16
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#336633"
  },
  input: {
    height: 40,
    width: "50%",
    borderColor: "#336633",
    borderWidth: 1,
    paddingHorizontal: 8,
    color: "#336633"
  }
});
export default GolfScoreScreen;