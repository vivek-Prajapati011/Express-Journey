import express from "express"
const app = express()
const port = 3000
function checkAdmin(req, res, next) {
  if (req.query.admin === 'true') {
    next(); // Allow access
  } else {
    res.status(403).send('Access Denied  Admins only');
  }
}

app.get('/dashboard', checkAdmin, (req, res) => {
  res.send('Welcome to the Admin Dashboard!');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})