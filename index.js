const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.json({"res": "Hello, world!"});
})

app.listen(PORT, console.log(`Server start by router ${PORT}`));
