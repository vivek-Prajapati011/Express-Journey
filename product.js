import express from 'express';

const router = express.Router();

// Sample data
const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Phone' },
];

// GET /products
router.get('/', (req, res) => {
  res.json(products);
});

// GET /products/:id
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product) res.json(product);
  else res.status(404).send('Product not found');
});

export default router;
