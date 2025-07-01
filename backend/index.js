const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const apiKey = process.env.NEWSDATA_API_KEY || "pub_551cf39da67c4a098867b9001bc2d0aa";

// News API endpoint
app.get("/news", async (req, res) => {
    const category = req.query.category;
    const country = req.query.country;
    const language = req.query.language || 'en';

    const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=${country}&language=${language}&category=${category}`;
    console.log(`Fetching news from: ${apiUrl}`);

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Return 404 if no articles found
        if (!data.results || data.results.length === 0) {
            return res.status(404).json({ message: "No news articles found." });
        }

        console.log('News Data:', data.results.length);
        res.json(data);
    } catch (error) {
        // Log and return error details
        console.error('Error fetching news:', error.response ? error.response.data : error.message);
        res.status(500).json({
            error: "Failed to fetch news.",
            details: error.response ? error.response.data : error.message
        });
    }
});

const PORT = 3096;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));