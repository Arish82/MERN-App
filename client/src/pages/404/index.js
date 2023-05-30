import React from 'react'
import Typography from '@mui/material/Typography';


export default function NotFound() {
  return (
    <div style={{display: "flex"}}>
      <div style={{"width": "50%", height: "90vh"}} ></div>
      <div style={{"width": "50%", height: "90vh",backgroundColor: "white"}} ></div>
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}} >
      <h1 style={{position: "absolute", width: "100%", fontSize: "12em", zIndex: "-1", opacity: "0.25", textAlign: "center", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} >
        404
      </h1>
      <Typography style={{fontWeight: 600 , "fontFamily": "Quicksand, sans-serif"}} variant="h3" gutterBottom>
        404 <span className='purple-font'>
          SORRY, 
        </span> Page Not Found!
      </Typography>
      <Typography sx={{textAlign: "center", fontSize: "1.2em" , "fontFamily": "Quicksand, sans-serif"}} className='purple-font' variant="" display="block" gutterBottom>
        The page you are looking for does not exist or has been moved.
      </Typography>
      </div>
    </div>
  )
}
