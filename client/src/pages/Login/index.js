import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';
import FormField from "../../components/FormField"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='register-container' >
      <Paper
        elevation={8}
        className='form-container'
        sx={{
          p: 4,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <CardContent style={{width: "70%"}} >
          <Typography sx={{textAlign: "center"}} className='heading' gutterBottom variant="h4" component="div">
            Login Page
          </Typography>  
          <form className='form'>
            <FormField label="Your Email" icon="Email" />
            <FormField label="Password" icon="Password" />
            <Button type="submit" style={{width: "100%", marginLeft: "0.5em", marginTop: "0.5em", fontSize: "1.3em"}} variant="contained" endIcon={<SendIcon />}>
              Login
            </Button>
            <Typography style={{marginTop: "0.5em", textAlign: "center"}} variant="button" display="block" gutterBottom>
              <Link to="/register">Create an Account</Link>
            </Typography>
          </form>
        </CardContent>
      </Paper>
    </div>
  );
}
