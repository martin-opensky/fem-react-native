import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function ColorSchemePreview({ navigation, name, colours }) {
  const previewColours = colours.slice(0, 5);

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ColourPalette', {
            name,
            colours,
          })
        }
      >
        <Text style={styles.subHeading}>{name}</Text>
      </TouchableOpacity>
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
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'left',
  },
  previewContainer: {
    flexDirection: 'row',
  },
  previewColour: {
    height: 30,
    width: 30,
    marginRight: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});
