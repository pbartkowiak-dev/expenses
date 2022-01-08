import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import Header from "./components/header";
import Form from "./components/form";
import Table from "./components/table";
import Sum from "./components/sum";

function App() {
  return (
    <Container className="App">
      <Header />
      <Form />
      <Table />
      <Sum />
    </Container>
  );
}

export default App;
