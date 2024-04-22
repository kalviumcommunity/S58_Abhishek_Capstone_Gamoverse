const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    res.send('Server is alive!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
