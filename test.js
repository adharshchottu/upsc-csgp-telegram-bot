const TelegramBot = require('node-telegram-bot-api');
const key = require('./key.json');

// Set up the Telegram bot API token
const botToken = key.api_key;

// Set up the Telegram bot API token
const bot = new TelegramBot(botToken);

// Set the chat ID of the group you want to modify
const chatId = key.target_chat_id;

// Call the 'setChatTitle' method to change the group title
module.exports = async (req, res) => {
  try {
    await bot.sendMessage(chatId, "vercel test");
    console.log('Vercel sent a message to Telegram');
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('An error occurred:', error.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
};
