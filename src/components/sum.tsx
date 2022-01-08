import React from "react";
import { Box, styled, Typography } from "@mui/material";

const StyledTypography = styled(Typography)(() => ({
  marginBottom: "10px",
}));

interface Props {}

function Sum(props: Props): JSX.Element {
  return (
    <StyledTypography align="left">
      Sum: 122.55 PLN (27,96 EUR)
    </StyledTypography>
  );
}

export default Sum;
