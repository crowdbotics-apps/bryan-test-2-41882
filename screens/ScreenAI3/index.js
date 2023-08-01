import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
const golfCourses = [{
  name: "Pebble Beach",
  location: "California",
  par: 72
}, {
  name: "Augusta National",
  location: "Georgia",
  par: 72
}, {
  name: "St. Andrews",
  location: "Scotland",
  par: 72
}, {
  name: "Cypress Point",
  location: "California",
  par: 72
}];

const GolfCourseScreen = () => {
  return <SafeAreaView style={styles.container}>
      {golfCourses.map((course, index) => <View key={index} style={styles.courseContainer}>
          <View style={styles.courseInfo}>
            <Text style={styles.courseName}>{course.name}</Text>
            <Text style={styles.courseLocation}>{course.location}</Text>
          </View>
          <Text style={styles.coursePar}>{course.par}</Text>
        </View>)}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16
  },
  courseContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  courseInfo: {
    flex: 1
  },
  courseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000"
  },
  courseLocation: {
    fontSize: 14,
    color: "#888"
  },
  coursePar: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000"
  }
});
export default GolfCourseScreen;