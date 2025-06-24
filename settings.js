const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Session id",
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? '𝐋ᴀᴋᴀ-𝐌ᴅ=9hZDTZyD#APgX4RzogeKWf56hRCiZ7quJWSXfS-HVZBPb4ZDwLb8' : process.env.POSTGRESQL_URL
};
