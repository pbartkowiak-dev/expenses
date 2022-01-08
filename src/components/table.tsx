import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "title", headerName: "Title", flex: 1, hideable: false },
  {
    field: "amountPln",
    headerName: "Amount (PLN)",
    minWidth: 150,
    hideable: false,
  },
  {
    field: "amountEur",
    headerName: "Amount (EUR)",
    minWidth: 150,
    hideable: false,
  },
  {
    field: "options",
    headerName: "Options",
    minWidth: 150,
    sortable: false,
    hideable: false,
  },
];

interface Row {
  id: number;
  title: string;
  amountPln: number;
  amountEur: number;
}

const rows: Row[] = [
  {
    id: 1,
    title: "New book about Rust",
    amountPln: 100,
    amountEur: 22.82,
  },
  {
    id: 2,
    title: "Snacks for a footbal match",
    amountPln: 20,
    amountEur: 1.84,
  },
];

interface Props {}

const StyledBox = styled(Box)(() => ({
  marginBottom: "20px",
  width: "100%",
  height: 600,
}));

function Table(props: Props): JSX.Element {
  return (
    <StyledBox>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </StyledBox>
  );
}

export default Table;
