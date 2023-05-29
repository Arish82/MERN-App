import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment, OutlinedInput } from '@mui/material';

export default function FormField(props) {
  return (
    <Box
      // component="form"
      style={{
        width: "100%"
      }}
      sx={{
        '& .MuiTextField-root': { m: 0.9, color: "pink"},
      }}
      noValidate
      // autoComplete="on"
    >
      <TextField
        id=""
        className='textfield fonts purple-color'
        label={props.label}
        sx={{
          fontFamily: "cursive",
          borderColor: "pink"
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {props.icon}
            </InputAdornment>
          ),
        }}
        // defaultValue="Hello World"
        // helperText="Incorrect entry."
        // variant=""
      />
    </Box>
  );
}
