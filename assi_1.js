import express from "express"

const app = express()
const port = 3000
app.get("/", (req,res) => {
    res.send("Welcome to My API")
})
app.get("/about", (req, res)=>{ 
   res.send("This is an About Page")
})
app.get("/contact", (req,res) =>{
    res.json({ name: 'Vivek', email: 'youremail@example.com' })
})
app.get("/html", (req,res) => {
   res.send("<h1>Hi, I am Vivek</h1>")
})
app.listen(port, () => {
   console.log("server is started")
})