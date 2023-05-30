import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment, OutlinedInput } from '@mui/material';

export default function FormField(props) {
  const handleChange=(e)=>{
    let name = e.target.name
    let value = e.target.value
    props.setuser({...props.user, [name]: value})
  }
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
      autoComplete="off"
    >
      <TextField
        id={props.id}
        name={props.id}
        type={props.type}
        value={props.user[props.id]}
        className='textfield fonts purple-color'
        label={props.label}
        onChange={handleChange}
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
