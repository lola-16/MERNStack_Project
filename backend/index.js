console.log(__dirname);
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const product =require("./routes/product"); 
const user =require("./routes/user"); 

// Database connection (make sure to add your MongoDB URI here)
mongoose.connect('mongodb+srv://Donicci:MERN@cluster0.zctmmxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>{ 
        console.log('connected to DB')
        app.listen(5000, () => console.log('Server running on port 5000'))})
    
    .catch(err => console.error(err));



    // loginMW
app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})
//routes
app.use(express.json());
//used to insure that the parameters come from body or query or params is json 
app.use(product);
app.use(user);

//notfound
app.use((req,res,next)=>{
    res.status(404).json({message:"Not Found"})
})

//error
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});

