import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContainer } from './src/components/app-container';
import { MainScreen } from './src/pages/main';

export default function App() {
  return (
    <AppContainer>
      <MainScreen />
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
