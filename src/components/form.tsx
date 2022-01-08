import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

interface Props {}

function Form(props: Props): JSX.Element {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography>Title of transaction</Typography>
        <TextField id="title" label="Outlined" variant="outlined" />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex" }}>
          <Typography>Amount (in PLN)</Typography>
          <TextField id="amount" label="Outlined" variant="outlined" />
        </Box>
        <Button>Add</Button>
      </Box>
    </Box>
  );
}

export default Form;
