import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, RefreshControl } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import { FlatList } from 'react-native-gesture-handler';

const URL = 'https://color-palette-api.kadikraman.vercel.app/palettes';

export default function Home({ navigation }) {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getPalettes = useCallback(async () => {
    const response = await fetch(URL);
    if (response.ok) {
      const paletteResponse = await response.json();
      setPalettes(paletteResponse);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await getPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 250);
  }, [getPalettes]);

  useEffect(() => {
    getPalettes();
  }, [getPalettes]);

  return (
    <View style={styles.container}>
      <FlatList
        data={palettes}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PalettePreview
            onPress={() =>
              navigation.navigate('ColourPalette', {
                name: item.paletteName,
                colours: item.colors,
              })
            }
            name={item.paletteName}
            colours={item.colors}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    gap: 20,
    paddingTop: 24,
  },

  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'left',
  },
});

/*
NOT NEEDED WHEN WE HAVE THE API
const SOLARISED = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOUR_PALETTES = [
  {
    name: 'Solarised',
    colours: SOLARISED,
  },
  {
    name: 'Rainbow',
    colours: RAINBOW,
  },
  {
    name: 'Frontend Masters',
    colours: FRONTEND_MASTERS,
  },
];
*/
