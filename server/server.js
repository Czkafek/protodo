const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 8080;


// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/login', (req, res) => {
    try {
        // Walidacja -> sprawdza w bazie, czy jest użytkownik o takim loginie -> jak jest to sprawdza czy hasła się zgadzają -> jak się zgadzają to tworzy refresh token i tworzy ciasteczko z nim oraz access token i wysyła go w odpowiedzi
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
})