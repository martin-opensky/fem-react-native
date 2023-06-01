import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

export default function ColourPalette({ route }) {
  return (
    <FlatList
      style={styles.container}
      data={route.params.colours}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox colourName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={
        <Text style={styles.heading}>{route.params.name}</Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'top',
    paddingHorizontal: 24,
    gap: 20,
    paddingTop: 48,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
});
