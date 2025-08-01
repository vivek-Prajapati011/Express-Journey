import express from "express";
const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log(`${req.method} ${req.path}`);
  next(); // Don't forget to call next()
}

app.use(logger);
app.get('/', (req, res) => {
  res.send('Hello from the logger route!');
});

app.listen(port,() => {
     console.log(`Server is running on http://localhost:${port}`);
})