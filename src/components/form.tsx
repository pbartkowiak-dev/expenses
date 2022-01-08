import React from "react";
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { store } from "../store";

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
  marginBottom: "10px",
  height: "65px",
}));

const StyledTypography = styled(Typography)(() => ({
  minWidth: "190px",
  textAlign: "left",
  paddingBottom: "15px",
  display: "flex",
  alignItems: "center",
}));

function Form(): JSX.Element {
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
          sx={{ marginLeft: 5, width: "350px" }}
          error={!!store.newExpenseTitleError}
          helperText={store.newExpenseTitleError}
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
            sx={{ marginLeft: 5, width: "350px" }}
            error={!!store.newExpenseAmountError}
            helperText={store.newExpenseAmountError}
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
