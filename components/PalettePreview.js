import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function ColorSchemePreview({ onPress, name, colours }) {
  const previewColours = colours.slice(0, 5);

  return (
    <View>
      <View style={styles.previewContainer}>
        <FlatList
          data={previewColours}
          keyExtractor={(item) => item.hexCode}
          renderItem={({ item }) => (
            <View
              style={[styles.previewColour, { backgroundColor: item.hexCode }]}
            />
          )}
          numColumns={5}
          ListHeaderComponent={
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.subHeading}>{name}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'left',
  },
  previewContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  previewColour: {
    height: 32,
    width: 32,
    marginRight: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
});
