import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "./index.css"
import { CardContent } from '@mui/material';
import FormField from "../../components/FormField"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

// const icons=[<PersonIcon />, <EmailIcon />, <WorkIcon />, <CallIcon />, <LockIcon />, <LockOpenIcon />]
const icons={
  "Name"  :<PersonIcon />,
  "Email"  :<EmailIcon />,
  "Contact"  :<WorkIcon />,
  "Profession"  :<CallIcon />,
  "Password"  :<LockIcon />,
  "CPassword"  :<LockOpenIcon />
  }
export default function Register() {
  return (
    <div className='register-container' >
      <Paper
        elevation={8}
        className='form-container'
        sx={{
          p: 1,
          margin: 'auto',
          marginTop: "0.5em",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <CardContent style={{width: "72%"}} >
          <Typography sx={{textAlign: "center"}} className='heading fonts purple-color' gutterBottom variant="h4" component="div">
            Register
          </Typography>  
          <form className='form'>
            <FormField icon={icons["Email"]}  label="Your Email" />
            <FormField icon={icons["Name"]}  label="Your Name" />
            <FormField icon={icons["Contact"]}  label="Mobile Number" />
            <FormField icon={icons["Profession"]}  label="Your Profession" />
            <FormField icon={icons["Password"]}  label="Password" />
            <FormField icon={icons["CPassword"]}  label="Confirm Password" />
            
            <Button className='button-gradient' type="submit" style={{width: "100%", marginLeft: "0.5em",  fontSize: "1.2em"}} variant="" endIcon={<SendIcon />}>
              Register
            </Button>
            <Typography className='dark-color fonts' style={{marginTop: "0.3em", textAlign: "center", fontWeight: "700"}} variant="" display="block" gutterBottom>
              <Link to="/login">Already have an account</Link>
            </Typography>
          </form>
        </CardContent>
      </Paper>
    </div>
  );
}








