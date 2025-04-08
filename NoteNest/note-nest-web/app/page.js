'use client';
import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');

  const addNote = () => {
    if (noteInput.trim() === '') return;
    setNotes([...notes, noteInput]);
    setNoteInput('');
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        NoteNest
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="New Note"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          onKeyPress={(e) => { if (e.key === 'Enter') addNote(); }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={addNote}
          sx={{ mt: 2 }}
          fullWidth
        >
          Add Note
        </Button>
      </Paper>
      <List>
        {notes.map((note, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => deleteNote(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={note} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
