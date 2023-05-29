import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment, OutlinedInput } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function FormField(props) {
  return (
    <Box
      component="form"
      style={{
        width: "100%"
      }}
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-error-helper-text"
        className='textfield'
        label={props.label}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              { props.icon==="Name" &&  <PersonIcon/>}
              { props.icon==="Email" &&  <EmailIcon/>}
              { props.icon==="Contact" &&  <CallIcon/>}
              { props.icon==="Profession" &&  <WorkIcon/>}
              { props.icon==="Password" &&  <LockIcon/>}
              { props.icon==="CPassword" &&  <LockOpenIcon/>}
            </InputAdornment>
          ),
        }}
        // defaultValue="Hello World"
        // helperText="Incorrect entry."
        variant="outlined"
      />
    </Box>
  );
}
