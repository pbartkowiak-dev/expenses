import React from "react";
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { store } from "../store";

interface Props {}

const StyledForm = styled("form")(() => ({
  marginBottom: "20px",
}));

const FullWidthBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const InputBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
  marginBottom: "10px",
}));

const StyledTypography = styled(Typography)(() => ({
  minWidth: "190px",
  textAlign: "left",
}));

function Form(props: Props): JSX.Element {
  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    store.addExpense();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <InputBox>
        <StyledTypography>Title of transaction</StyledTypography>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          size="small"
          sx={{ marginLeft: 5 }}
          value={store.newExpenseTitle}
          onChange={(event) => (store.newExpenseTitle = event.target.value)}
        />
      </InputBox>
      <FullWidthBox>
        <InputBox>
          <StyledTypography>Amount (in PLN)</StyledTypography>
          <TextField
            id="amount"
            label="Amount"
            variant="outlined"
            size="small"
            sx={{ marginLeft: 5 }}
            value={store.newExpenseAmount}
            onChange={(event) => (store.newExpenseAmount = event.target.value)}
          />
        </InputBox>
        <Button variant="outlined" type="submit">
          Add
        </Button>
      </FullWidthBox>
    </StyledForm>
  );
}

export default observer(Form);
