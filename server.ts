import express from "express";
import path from "path";
import fs from "fs" 


const app = express()
const port = process.env.PORT || 3000;

var init = false;

app.get('/', (req, res)=>{
    console.log(path.join(__dirname, "./dist/index.html"))
    fs.readFile(path.join(__dirname, "./dist/index.html"), (err,data) => {
        
        res.send(data.toString() + '<script>console.log("hi")</script>')
        
        
        
    })
    
    
})

app.use("", express.static(path.join(__dirname, "./dist")))

app.use((req, res) => {
    
    
})


app.listen(port, () => {
    console.log(`App listening at localhost:${port}`);
    
})

