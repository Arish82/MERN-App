import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';


function Home(props) {
  const [name, setname] = useState("");
  console.log(name);
  const handleHome= async ()=>{
    try{
      const res=await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data=await res.json();
      console.log(data);
      if(data){
        setname(data.name);
        props.setlogin(true)
      }
    } catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    handleHome();
  }, [])
  console.log(name);
  return (
    <div style={{display: "flex"}}>
      <div style={{"width": "50%", height: "90vh"}} ></div>
      <div style={{"width": "50%", height: "90vh",backgroundColor: "white"}} ></div>
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}} >
      <Typography sx={{textAlign: "center", fontSize: "2em" , "fontFamily": "Quicksand, sans-serif"}} className='purple-font' variant="" display="block" gutterBottom>
        welcome
      </Typography>
      {
        !name &&
        <Typography style={{fontWeight: 600 , "fontFamily": "Quicksand, sans-serif"}} variant="h3" gutterBottom>
        We are <span className='purple-font'>
          MERN 
        </span> Developers
      </Typography>}
      {
        name &&
        <Typography style={{fontWeight: 600 , "fontFamily": "Quicksand, sans-serif"}} variant="h3" gutterBottom>
          {name}
        </Typography>
      }
        {/* <Typography sx={{textAlign: "center", fontSize: "2em" , "fontFamily": "Quicksand, sans-serif"}} className='purple-font' variant="" display="block" gutterBottom>
          Happy to see you again
        </Typography> */}
      </div>
    </div>
  )
}
export default Home;