import React from "react";
import { styled, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { store } from "../store";

const StyledTypography = styled(Typography)(() => ({
  marginBottom: "10px",
}));

function Sum(): JSX.Element {
  const { sum, sumEuro } = store;

  return (
    <>
      {sum > 0 && (
        <StyledTypography align="left">
          Sum: {sum.toFixed(2)} PLN ({sumEuro.toFixed(2)} EUR)
        </StyledTypography>
      )}
    </>
  );
}

export default observer(Sum);
