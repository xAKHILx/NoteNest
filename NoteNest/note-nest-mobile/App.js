import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import Navbar from './components/Navbar';
import GoogleSignIn from './components/GoogleSignIn';
import Notes from './components/Notes';
import { auth } from './firebase';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => setUser(u));
    return unsubscribe;
  }, []);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Navbar />
        <View style={styles.content}>
          {user ? <Notes /> : <GoogleSignIn />}
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});
