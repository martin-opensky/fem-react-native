import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

export default function ColourPalette({ route }) {
  const { name, colours } = route.params;

  return (
    <FlatList
      style={styles.container}
      data={colours}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox colourName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.heading}>{name}</Text>}
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
