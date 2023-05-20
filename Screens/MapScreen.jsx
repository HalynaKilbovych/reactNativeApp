import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MapScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>MAP SCREEN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  }
});