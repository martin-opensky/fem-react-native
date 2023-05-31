import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>Here are some buttons:</Text>
        <View style={[styles.button, styles.cyan]}>
          <Text style={styles.buttonText}>Cyan</Text>
        </View>
        <View style={[styles.button, styles.blue]}>
          <Text style={styles.buttonText}>Blue</Text>
        </View>
        <View style={[styles.button, styles.magenta]}>
          <Text style={styles.buttonText}>Magenta</Text>
        </View>
        <View style={[styles.button, styles.orange]}>
          <Text style={styles.buttonText}>Orange</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 48,
    gap: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 20,
    borderRadius: 5,
    width: 320,
    alignItems: 'center',
    color: 'pink',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});
