const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/products', (req, res) => {
  res.json([
    { name: "Product Alpha", owner: "Jane Doe", launch: "2024-05-01" },
    { name: "Product Beta", owner: "John Smith", launch: "2024-08-15" }
  ]);
});

app.get('/api/sales', (req, res) => {
  res.json([
    { name: "Jan", sales: 2400 },
    { name: "Feb", sales: 1398 },
    { name: "Mar", sales: 9800 },
    { name: "Apr", sales: 3908 },
    { name: "May", sales: 4800 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
