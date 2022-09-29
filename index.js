const express = require('express');
const emailRoutes = require('./src/routes/emailRoutes');
const dbConnection = require('./src/db');

const app = express();


//APPLCATION LEVEL MIDDLEWARES
app.use(express.json());


//ROUTES
app.use('/email', emailRoutes);






const PORT = 8300;
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));


