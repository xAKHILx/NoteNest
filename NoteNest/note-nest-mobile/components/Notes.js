import { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { TextInput, Button, Card, Text } from "react-native-paper";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../firebase";

export default function Notes() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, `users/${user.uid}/notes`),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notesArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(notesArr);
    });

    return () => unsubscribe();
  }, [user]);

  const addNote = async () => {
    if (!note.trim()) return;
    await addDoc(collection(db, `users/${user.uid}/notes`), {
      text: note,
      createdAt: new Date(),
    });
    setNote("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Write a note..."
        value={note}
        onChangeText={setNote}
        style={styles.input}
      />
      <Button mode="contained" onPress={addNote} style={{ marginBottom: 16 }}>
        Add Note
      </Button>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>{item.text}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    marginBottom: 12,
  },
  card: {
    marginBottom: 10,
  },
});
