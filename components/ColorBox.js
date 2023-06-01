import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ColorBox({ colourName, hexCode }) {
  const buttonColour = {
    backgroundColor: hexCode,
  };

  // Decides whether the text should be black or white depending on the background colour
  const textColour = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.button, buttonColour]}>
      <Text style={[styles.buttonText, textColour]}>{colourName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    color: 'pink',
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
