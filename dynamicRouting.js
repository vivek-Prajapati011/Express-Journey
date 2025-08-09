import express from "express"

const app = express()
const port = 3000
app.get("/greet/:name", (req,res) => {
    res.send("Welcome vivek")
    console.log(req.params)
})

app.listen(port, () => {
   console.log("server is started")
})