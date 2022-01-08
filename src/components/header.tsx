import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { store } from "../store";

const StyledBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  margin: "10px 0 30px",
}));

export function Header(): JSX.Element {
  return (
    <header>
      <StyledBox>
        <Typography variant="h2" component="h1" align="left">
          List of expenses
        </Typography>
        <Typography>1 EUR = {store.euroVal} PLN</Typography>
      </StyledBox>
    </header>
  );
}

export default observer(Header);
