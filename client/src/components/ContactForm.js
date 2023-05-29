import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { CardContent, Grid, TextField } from '@mui/material';
import FormField from "./FormField"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function ContactForm() {
  return (
    <div style={{
        marginTop: "1em"
    }} >
      <Paper
        elevation={3}
        className='form-container'
        sx={{
          p: 2,
          margin: 'auto',
          width: "80%",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <CardContent style={{width: "90%"}} >
          <Typography sx={{textAlign: ""}} className='heading fonts dark-color' gutterBottom variant="h4" component="div">
            Get in Touch
          </Typography>  
          <form>
            {/* <FormField label="Your Email" icon="Email" />
            <FormField label="Password" icon="Password" /> */}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2} sm={4} md={4}>
                <TextField type="text" sx={{width: "100%"}} id="name" label="Your Name" variant="outlined" />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                <TextField type="email" sx={{width: "100%"}} id="email" label="Your Email" variant="outlined" />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                <TextField type="phonenumber" sx={{width: "100%"}} id="number" label="Your Phone Number" variant="outlined" />
                </Grid>
            </Grid>
            <Grid container >
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    sx={{
                        width: "100%",
                        marginTop: "1em"
                    }}
                />
            </Grid>
            <Button className='button-gradient fonts' type="submit" style={{marginTop: "1em", 
            fontSize: "1em"
            // backgroundColor: "#6944ff"
            }} variant="" endIcon={<SendIcon />}>
              Send Message
            </Button>
          </form>
        </CardContent>
      </Paper>
    </div>
  );
}
