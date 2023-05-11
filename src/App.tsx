import React, { useState } from "react";
import "./styles/index.css";
import { Header, AddNote, Container, Table } from "./components";

import { data } from "./data";
import { Note } from "./interfaces";

function App() {
  const [notes, setNotes] = useState<Note[]>(data);
  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <AddNote addNote={addNote} />
        <Table note={notes} />
      </Container>
    </React.Fragment>
  );
}

export default App;
