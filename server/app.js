const express=require("express");
const app=express();

const dotenv= require("dotenv")
dotenv.config({path: './config.env'})
const PORT=process.env.PORT;

require("./db/conn")

app.use(express.json())
app.use(require("./router/auth"))

// const middleware=(req,res,next)=>{
//     console.log("middleware");
//     setTimeout(() => {
//         next();
//     }, 1000);
// }

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
// app.get('/', (req,res)=>{
//     res.send("Hello world from server");
// })
// app.get('/aboutus', middleware, (req,res)=>{
//     res.send("Hello world from aboutus");
// })
// app.get('/contact', (req,res)=>{
//     res.send("Hello world from contact");
// })
// app.get('/login', (req,res)=>{
//     res.send("Hello world from Login");
// })
// app.get('/signup', (req,res)=>{
//     res.send("Hello world from Signup");
// })

