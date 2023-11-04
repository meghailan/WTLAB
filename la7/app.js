const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/home', (req, res) => {
    res.send('<h1>Welcome ' + req.query['username'] + '</h1<br><h2>Mail ID 
: '+req.query['mailid']+'</h2 > ');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
