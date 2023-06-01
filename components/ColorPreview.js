import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ColorPreview({ hexCode }) {
  const buttonColour = {
    backgroundColor: hexCode,
  };

  return <View style={[styles.button, buttonColour]} />;
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
