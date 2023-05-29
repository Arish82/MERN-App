import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "./index.css"
import { CardContent } from '@mui/material';
import FormField from "../../components/FormField"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';


export default function Register() {
  return (
    <div className='register-container' >
      <Paper
        elevation={8}
        className='form-container'
        sx={{
          p: 1,
          pt: 2,
          pb: 2,
          margin: 'auto',
          marginTop: "0.5em",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <CardContent style={{width: "65%"}} >
          <Typography sx={{textAlign: "center"}} className='heading' gutterBottom variant="h4" component="div">
            Register
          </Typography>  
          <form className='form'>
            <FormField label="Your Name" icon="Name" />
            <FormField label="Your Email" icon="Email" />
            <FormField label="Mobile Number" icon="Contact" />
            <FormField label="Your Profession" icon="Profession" />
            <FormField label="Password" icon="Password" />
            <FormField label="Confirm Password" icon="CPassword" />
            
            <Button type="submit" style={{width: "100%", marginLeft: "0.5em",  fontSize: "1.3em"}} variant="contained" endIcon={<SendIcon />}>
              Register
            </Button>
            <Typography style={{marginTop: "0.3em", textAlign: "center"}} variant="button" display="block" gutterBottom>
              <Link to="/login">Already have an account</Link>
            </Typography>
          </form>
        </CardContent>
      </Paper>
    </div>
  );
}
