require("dotenv").config();

const {PORT, MONGODB_URI} = process.env;

const express = require("express")

const app = express()

app.get("/", (req,res)=>{
    res.send(" this works ")
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));