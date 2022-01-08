import React from "react";
import { Box, Button, styled, TextField, Typography } from "@mui/material";

interface Props {}

const StyledBox = styled(Box)(() => ({
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
  return (
    <StyledBox>
      <InputBox>
        <StyledTypography>Title of transaction</StyledTypography>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          size="small"
          sx={{ marginLeft: 5 }}
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
          />
        </InputBox>
        <Button variant="outlined">Add</Button>
      </FullWidthBox>
    </StyledBox>
  );
}

export default Form;
