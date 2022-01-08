import React from "react";
import { Box, Button, styled } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Expense, store } from "../store";
import { observer } from "mobx-react";

const columns: any[] = [
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
    type: "actions",
    minWidth: 150,
    sortable: false,
    hideable: false,
    getActions: ({ id }: Expense) => {
      return [
        <Button
          variant="outlined"
          color="error"
          onClick={() => store.deleteExpense(id)}
        >
          Delete
        </Button>,
      ];
    },
  },
];

const StyledBox = styled(Box)(() => ({
  marginBottom: "20px",
  width: "100%",
  height: 600,
}));

function Table(): JSX.Element {
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
