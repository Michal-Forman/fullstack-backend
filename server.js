const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors({
    origin: 'https://michal-forman.github.io',
}));

app.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2", "user3"]});
});

app.listen(5050, () => console.log("Server running on port 5050"));