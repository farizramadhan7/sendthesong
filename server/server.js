// server.js (Node.js with Express)
const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

const clientId = '257d706bf30545b59fd06913413dba3e';
const clientSecret = '032cf020561842e2b57e28e0333565ef';

app.get('/getSpotifyToken', async (req, res) => {
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  
  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    res.json({ access_token: response.data.access_token });
  } catch (error) {
    console.error('Error fetching Spotify token:', error);
    res.status(500).send('Failed to get Spotify token');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
