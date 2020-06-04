const app = require('express')();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/mock', (req, res) => {
    setTimeout(() => {
        res.sendFile(path.join(__dirname, 'mockresponse.json'));
    }, 2000);
});

app.listen(8080);