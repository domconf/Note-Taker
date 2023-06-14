//Declare required app variables
const express = require('express');
const api_route = require('./routes/api-route')
const html_route = require('./routes/html-route')
const app = express();
const PORT = process.env.PORT || 3001;

// Static middleware for running express, required for sending note data to be stored on the server
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(api_route);
app.use(html_route);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
