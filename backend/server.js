require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
//const cors = require("cors");

const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
// app.use(cors({
//    origin: ["http://localhost:3000", "http://workout-buddy-app.onrender.com"]
// }));

// routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    
    //listen for requests
app.listen(process.env.PORT,()=>{
    console.log('connected to db & listeneing on port ',process.env.PORT)
})

}) 
 
.catch((error) => {
    console.log(error)
})

