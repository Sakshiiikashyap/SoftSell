const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('SoftSell backend is running');
});

// Future API routes can be added here

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
