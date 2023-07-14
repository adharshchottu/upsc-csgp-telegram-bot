const TelegramBot = require('node-telegram-bot-api');
const key = require('./key.json')

// Set up the Telegram bot API token
const botToken = key.api_key;

// Create an instance of the Telegram Bot
const bot = new TelegramBot(botToken);

module.exports = async (req, res) => {
  try {
    const id = (await bot.getMe()).id;
    res.status(200).json({ id: id });
  } catch (error) {
    console.error('An error occurred:', error.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
};