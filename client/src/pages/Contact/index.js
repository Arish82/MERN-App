import { Box, Container, Grid, Typography, containerClasses } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import ContactForm from '../../components/ContactForm';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Contact() {
  return (
    <>
      <Container sx={{ marginTop: "3em" }}>
        <Box>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
            <Grid item xs={2} sm={4} md={4}>
              <Item >
                <PhoneAndroidIcon />
                <Grid item xs>
                  <Typography gutterBottom variant="h5" component="div">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {8318090814}
                  </Typography>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Item >
                <EmailIcon />
                <Grid item xs>
                  <Typography gutterBottom variant="h5" component="div">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {8318090814}
                  </Typography>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Item >
                <HomeIcon />
                <Grid item xs>
                  <Typography gutterBottom variant="h5" component="div">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {8318090814}
                  </Typography>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <ContactForm/>
        

      </Container>
    </>
  )
}
