import express from "express"

const app = express()
const port = 3000
app.get("/", (req,res) => {
    res.send("Welcome to My API")
})


app.listen(port, () => {
   console.log("server is started")
})