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
    if (req.query.admin === 'true') {
    res.send("this is admin page")
  } else {
    res.status(403).send('Access Denied  Admins only');
  }
    
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)

})