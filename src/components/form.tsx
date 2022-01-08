import React from "react";
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { store } from "../store";

const FullWidthBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    marginBottom: "20px",
  },
}));

const InputBox = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: "10px",
  height: "65px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    marginBottom: "70px",
    width: "100%",
  },
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

    const titleInpt = document.getElementById("title");
    if (titleInpt) {
      (titleInpt as HTMLInputElement).focus();
    }

    store.clearForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <InputBox>
        <StyledTypography>Title of transaction</StyledTypography>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          size="small"
          sx={{
            marginLeft: { sm: 0, md: "15px" },
            width: { sm: "100%", md: "350px" },
          }}
          error={!!store.newExpenseTitleError}
          helperText={store.newExpenseTitleError}
          value={store.newExpenseTitle}
          onBlur={() => store.validateTitle()}
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
            sx={{
              marginLeft: { sm: 0, md: "15px" },
              width: { sm: "100%", md: "350px" },
            }}
            error={!!store.newExpenseAmountError}
            helperText={store.newExpenseAmountError}
            value={store.newExpenseAmount}
            onBlur={() => store.validateAmount()}
            onChange={(event) => (store.newExpenseAmount = event.target.value)}
          />
        </InputBox>
        <Button
          variant="contained"
          disableElevation
          type="submit"
          sx={{ minWidth: "150px" }}
        >
          Add
        </Button>
      </FullWidthBox>
    </form>
  );
}

export default observer(Form);
