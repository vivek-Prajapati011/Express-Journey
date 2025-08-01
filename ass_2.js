import express from "express"
const app = express();
const port = 3000;

// 🔥 Step 1: Register global middleware to parse JSON body
app.use(express.json());

// 🔥 Step 2: POST route to accept JSON data
app.post('/data', (req, res) => {
  console.log('Received data:', req.body);

  // Respond with a confirmation and echo the data
  res.json({
    message: 'Data received successfully!',
    received: req.body
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
