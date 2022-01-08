import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {}

export function Header({}: Props): JSX.Element {
  return (
    <header>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h1" align="left">
          List of expenses
        </Typography>
        <Typography>1 EUR = 4,382 PLN</Typography>
      </Box>
    </header>
  );
}

export default Header;
