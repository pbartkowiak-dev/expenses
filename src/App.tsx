import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import Header from "./components/header";
import Form from "./components/form";
import Table from "./components/table";

function App() {
  return (
    <Container className="App">
      <Header />
      <Form />
      <Table />
    </Container>
  );
}

export default App;
