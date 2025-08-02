import express from "express"
const app = express()
const port =3000

function middleware1(req, res, next) {
  console.log('Middleware 1');
  next();
}

function middleware2(req, res, next) {
  console.log('Middleware 2');
  next();
}

function middleware3(req, res, next) {
  console.log('Middleware 3');
  next();
}

app.get("/profile", middleware1, middleware2, middleware3, (req,res) => {
    res.send("this is your profile")
})
app.listen(port,()=> {
    console.log(`Server is running on http://localhost:${port}`)
})