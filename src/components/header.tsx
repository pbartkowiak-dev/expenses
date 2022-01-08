import React from "react";
import { Box, styled, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { store } from "../store";

const StyledBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  margin: "10px 0 30px",
}));

const StyledTypography = styled(Typography)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "right",
}));

const Error = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  textAlign: "right",
  height: "20px",
  display: "block",
  marginTop: "5px",
  minWidth: "230px",
}));

export function Header(): JSX.Element {
  return (
    <header>
      <StyledBox>
        <Typography variant="h2" component="h1" align="left">
          List of expenses
        </Typography>
        <Box>
          <StyledTypography>
            1 EUR ={" "}
            <TextField
              inputProps={{ inputMode: "numeric" }}
              value={store.euroVal}
              error={!!store.euroValueError}
              onChange={(event) => (store.euroVal = event.target.value)}
              size="small"
              sx={{ marginLeft: "5px", marginRight: "5px", width: "100px" }}
            />{" "}
            PLN
          </StyledTypography>
          <Error variant="caption">{store.euroValueError}</Error>
        </Box>
      </StyledBox>
    </header>
  );
}

export default observer(Header);
