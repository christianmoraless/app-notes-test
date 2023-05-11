import React, { useState } from "react";
import "./styles/index.css";
import { Header, AddNote, Container, Table } from "./components";

import { data } from "./data";
import { Note } from "./interfaces";

function App() {
  const [notes, setNotes] = useState<Note[]>(data);
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

  return (
    <React.Fragment>
      <Header />
      <Container>
        <AddNote
          addNote={addNote}
          editData={editData!}
          updateNote={updateNote}
        />
        <Table note={notes} setEditData={setEditData} />
      </Container>
    </React.Fragment>
  );
}

export default App;
