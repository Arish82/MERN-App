import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';
import FormField from "../../components/FormField"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link, useNavigate } from 'react-router-dom';
import { EmailIcon, LockIcon } from '../Register/Links';

const icons={
  "Email"  :<EmailIcon />,
  "Password"  :<LockIcon />
}
export default function Login() {
  const [user, setuser] = useState({
    email: "",
    password: ""
  })
  const navigate=useNavigate();

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const {email, password}= user;
    const res=await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    })
    const data= await res.json();
    if(!data || res.status === 400){
      window.alert("Invalid Credentials");
    }
    else{
      window.alert("Login Succesful");
      navigate("/")
    }
  }
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
        <CardContent  style={{width: "78%"}} >
          <Typography sx={{textAlign: "center"}} className='heading fonts purple-color' gutterBottom variant="h4" component="div">
            Login Page
          </Typography>  
          <form method='POST' onSubmit={handleSubmit} className='form'>
            <FormField icon={icons["Email"]}  user={user} setuser={setuser} id="email" name="email" type="email" label="Your Email" />
            <FormField icon={icons["Password"]} user={user} setuser={setuser} id="password" name="password" type="password" label="Password"/>
            <Button className='button-gradient' type="submit" style={{width: "100%", marginLeft: "0.5em", marginTop: "0.5em", fontSize: "1.3em"}} variant="" endIcon={<SendIcon />}>
              Login
            </Button>
            <Typography className='dark-color fonts' style={{marginTop: "1em", textAlign: "center", fontWeight: "700"}} variant="" display="block" gutterBottom>
              <Link to="/register">Create an Account</Link>
            </Typography>
          </form>
        </CardContent>
      </Paper>
    </div>
  );
}

// id="email"
// id="password"