import React from "react";
import "./styles/index.css";
import { Header, AddNote, Container, Table } from "./components";
import { data } from "./data";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <AddNote />
        <Table data={data} />
      </Container>
    </React.Fragment>
  );
}

export default App;
