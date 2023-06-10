const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json())

const UserControllers = require('./src/controllers/UserControllers');

//////////////////////////
//     User Routes      //
//////////////////////////

app.get('/user', async (req, res) => {

    const DATA = await UserControllers.GetUser();

    res.json(DATA);

})

app.listen(PORT, console.log(`Server start by router ${PORT}`));
