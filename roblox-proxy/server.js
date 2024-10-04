const express = require('express');
const axios = require('axios');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.get('/avatar/:userId', async (req, res) => {
    const userId = req.params.userId;
    const thumbnailUrl = `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=420x420&format=Png&isCircular=false&thumbnailType=HeadShot`;

    try {
        const response = await axios.get(thumbnailUrl);
        if (response.data && response.data.data && response.data.data.length > 0) {
            const imageUrl = response.data.data[0].imageUrl;
            res.redirect(imageUrl);
        } else {
            console.error(`No avatar found for user ID: ${userId}`);
            res.status(404).send('Avatar not found');
        }
    } catch (error) {
        console.error(`Error fetching avatar: ${error.message}`);
        res.status(500).send('Error fetching avatar');
    }
});

app.listen(3000, () => {
    console.log('Proxy server running on port 3000');
});
