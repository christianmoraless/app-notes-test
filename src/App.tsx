import React, { useEffect, useState } from "react";
import "./styles/index.css";
import { Header, AddNote, Container, Table } from "./components";

import { data } from "./data";
import { Note } from "./interfaces";

function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const saveNotes = window.localStorage.getItem("notesData");
    if (saveNotes) {
      return JSON.parse(saveNotes);
    } else {
      return [];
    }
  });
  const [editData, setEditData] = useState<Note>();

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  const updateNote = (note: Note) => {
    const newNote = notes.map((el) => {
      return el.id === note.id ? note : el;
    });
    setNotes(newNote);
    setEditData(null!);
  };

  const deleteNote = (id: number) => {
    const isDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (isDelete) {
      const newNotes = notes.filter((el) => el.id !== id);
      setNotes(newNotes);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("notesData", JSON.stringify(notes));
  }, [notes]);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <AddNote
          addNote={addNote}
          editData={editData!}
          updateNote={updateNote}
        />
        <Table note={notes} setEditData={setEditData} deleteNote={deleteNote} />
      </Container>
    </React.Fragment>
  );
}

export default App;
