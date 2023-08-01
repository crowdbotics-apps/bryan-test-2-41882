import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
const scores = [{
  course: 'Math',
  date: '2022-01-01',
  score: 95
}, {
  course: 'Science',
  date: '2022-01-02',
  score: 85
}, {
  course: 'English',
  date: '2022-01-03',
  score: 90
}, {
  course: 'History',
  date: '2022-01-04',
  score: 75
}];

const ScoreScreen = () => {
  return <SafeAreaView style={styles.container}>
      {scores.map((score, index) => <View key={index} style={styles.scoreContainer}>
          <View style={styles.courseContainer}>
            <Text style={styles.courseText}>{score.course}</Text>
            <Text style={styles.dateText}>{score.date}</Text>
          </View>
          <Text style={styles.scoreText}>{score.score}</Text>
        </View>)}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  courseContainer: {
    flexDirection: 'column'
  },
  courseText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  dateText: {
    fontSize: 14,
    color: '#888'
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000'
  }
});
export default ScoreScreen;