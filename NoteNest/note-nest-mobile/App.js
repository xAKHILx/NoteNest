import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import WebNotes from './components/WebNotes'; // make sure the path is correct

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <WebNotes />
    </SafeAreaView>
  );
}
