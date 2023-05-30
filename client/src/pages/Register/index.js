import React, {useState} from 'react';
import "./index.css"
import { CardContent } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { PersonIcon, EmailIcon, WorkIcon, CallIcon, LockIcon, LockOpenIcon, FormField, Button, SendIcon, Paper, Typography } from "./Links"

const icons={
  "Name"  :<PersonIcon />,
  "Email"  :<EmailIcon />,
  "work"  :<WorkIcon />,
  "phone"  :<CallIcon />,
  "Password"  :<LockIcon />,
  "confirmPassword"  :<LockOpenIcon />
  }
export default function Register() {
  const [user,setuser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    confirmPassword: "",
  })
  const navigation= useNavigate();

  const handlesubmit = async (e)=>{
    e.preventDefault();

    const {name, email, phone, work, password, confirmPassword} = user;
    const res= await fetch("/register", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify( {
        name : name,
        email : email,
        phone : phone,
        work : work,
        password : password,
        confirmPassword : confirmPassword,
      } )
    });

    const data=await res.json();
    console.log(data, res.status);
    if(!data || res.status===(422)){
      window.alert("Invalid Registration");
    }
    else{
      window.alert("Registration Sucessful")
      navigation("/login")
    }
  }
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
          <form method='POST' onSubmit={handlesubmit} className='form'>
            <FormField type="text" id="name" icon={icons["Name"]}  label="Your Name" user={user} setuser={setuser} />
            <FormField type="email" id="email" icon={icons["Email"]}  label="Your Email" user={user} setuser={setuser} />
            <FormField type="phone" id="phone" icon={icons["phone"]}  label="Mobile Number" user={user} setuser={setuser} />
            <FormField type="text" id="work" icon={icons["work"]}  label="Your Profession" user={user} setuser={setuser} />
            <FormField type="password" id="password" icon={icons["Password"]}  label="Password" user={user} setuser={setuser} />
            <FormField type="password" id="confirmPassword" icon={icons["confirmPassword"]}  label="Confirm Password" user={user} setuser={setuser} />
            
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

// id="name"
// id="email"
// id="contact"
// id="profession"
// id="password"
// id="cpassword"










































