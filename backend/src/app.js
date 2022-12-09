const express = require('express');
const fs = require('fs');
const counterRouter = require('./../routes/counter');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use('/counter',counterRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
