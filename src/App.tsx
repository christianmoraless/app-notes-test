import React, { useEffect, useState } from "react";
import { Header, AddNote, Container, Table } from "./components";
import { Note } from "./interfaces";
import "./styles/index.css";

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
    const newNotes = notes.map((el) => (el.id === note.id ? note : el));
    setNotes(newNotes);
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

  const sortById = () => {
    const sort = notes.sort((a, b) => a.id! - b.id!);
    setNotes(sort);
  };

  const sortByTitle = () => {
    const sort = notes.sort((a, b) => a.title.localeCompare(b.title));
    setNotes(sort);
  };

  const sortByContent = () => {
    const sort = notes.sort((a, b) => a.body.localeCompare(b.body));
    setNotes(sort);
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
          editData={editData}
          updateNote={updateNote}
        />
        <Table
          note={notes}
          setEditData={setEditData}
          deleteNote={deleteNote}
          sortById={sortById}
          sortByTitle={sortByTitle}
          sortByContent={sortByContent}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
