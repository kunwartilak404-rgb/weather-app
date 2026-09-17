const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/weather", async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({
            message: "City is required"
        });
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
        );

        const data = await response.json();

        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});