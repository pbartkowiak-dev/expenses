import React from "react";
import { Box, styled, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { store } from "../store";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  margin: "10px 0 30px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "0px",
  },
}));

const EuroValueForm = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "right",
  [theme.breakpoints.down("md")]: {
    justifyContent: "left",
  },
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
          <EuroValueForm>
            <Typography>1 EUR = </Typography>
            <TextField
              inputProps={{ inputMode: "numeric" }}
              value={store.euroVal}
              error={!!store.euroValueError}
              onBlur={() => store.validateEuroVal()}
              onChange={(event) => (store.euroVal = event.target.value)}
              size="small"
              sx={{ marginLeft: "5px", marginRight: "5px", width: "100px" }}
            />{" "}
            <Typography>PLN</Typography>
          </EuroValueForm>
          <Error variant="caption">{store.euroValueError}</Error>
        </Box>
      </StyledBox>
    </header>
  );
}

export default observer(Header);
