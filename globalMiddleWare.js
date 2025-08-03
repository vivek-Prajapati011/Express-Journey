import express from "express"
const app = express()

const port = 3000

app.use( (res, req, next) => {
    next()
})

app.get("/",(req, res) => {
    res.send("this is home page")
})

app.get("/admin", (req, res) => {
    res.send("this is admin page")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)

})