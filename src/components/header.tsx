import React from "react";
import { Box, styled, Typography } from "@mui/material";

interface Props {}

const StyledBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  margin: "10px 0 30px",
}));

export function Header({}: Props): JSX.Element {
  return (
    <header>
      <StyledBox>
        <Typography variant="h2" component="h1" align="left">
          List of expenses
        </Typography>
        <Typography>1 EUR = 4,382 PLN</Typography>
      </StyledBox>
    </header>
  );
}

export default Header;
