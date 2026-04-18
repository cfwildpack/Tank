const express = require('express');
const app = express();
const port = 9000;

app.get('/tank', (req, res) => {
    res.json({
        model: "TX-90",
        speed: "60 km/h",
        status: "Operational"
    });
});

app.listen(port, () => {
    console.log(`Tank API server running at http://localhost:${port}`);
});
