import React from 'react'
import Typography from '@mui/material/Typography';


export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <div style={{"width": "50%", height: "90vh"}} ></div>
      <div style={{"width": "50%", height: "90vh",backgroundColor: "white"}} ></div>
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}} >
      <Typography sx={{textAlign: "center", fontSize: "2em" , "fontFamily": "Quicksand, sans-serif"}} className='purple-font' variant="" display="block" gutterBottom>
        welcome
      </Typography>
      <Typography style={{fontWeight: 600 , "fontFamily": "Quicksand, sans-serif"}} variant="h3" gutterBottom>
        We are <span className='purple-font'>
          MERN 
        </span> Developers
      </Typography>
      </div>
    </div>
  )
}
