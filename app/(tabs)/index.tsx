import GalacticCounter from '@/components/GalacticCounter';
import { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button } from 'react-native';

export default function TabOneScreen() {
  const [search, setSearch] = useState<string>('');

  return (
    <View style={styles.container} accessible>
      <Image
        source={{ uri: 'https://galaxies.dev/img/logos/logo--blue.png' }}
        style={{ width: 200, height: 100 }}
        role="img"
        accessibilityLabel="logo"
        accessible
      />
      <Text style={styles.title}>Galaxies Feed</Text>
      <View style={styles.separator} testID="separator" />
      <View style={{ flexDirection: 'row', marginHorizontal: 40 }}>
        <TextInput
          placeholder="Search galaxies"
          style={{ padding: 10, backgroundColor: '#fff', flex: 1 }}
          value={search}
          onChangeText={text => setSearch(text)}
        />
      </View>
      {search !== '' && (
        <Text style={{ fontSize: 16, marginTop: 20 }}>
          Searched for: {search}
        </Text>
      )}
      <GalacticCounter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    backgroundColor: '#9d9d9d',
    width: '80%',
  },
});
