import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { store, Expense } from "../store";
import { observer } from "mobx-react";
import { observable } from "mobx";

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
        rows={[...store.expenses]}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </StyledBox>
  );
}

export default observer(Table);
