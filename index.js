const TelegramBot = require('node-telegram-bot-api');
const key = require('./key.json')

// Set up the Telegram bot API token
const botToken = key.api_key;

// Create an instance of the Telegram Bot
const bot = new TelegramBot(botToken);

module.exports = async (req, res) => {
  try {
    const id = (await bot.getMe()).id;
    function getCurrentDateIST() {
      const currentTime = new Date();
      const offset = currentTime.getTimezoneOffset();
      const ISTOffset = 330; // IST is UTC+5:30
      const currentTimeIST = new Date(currentTime.getTime() + (ISTOffset + offset) * 60000);
      return currentTimeIST;
    }

    // Calculate days left between today and 26th May 2024
    function getDaysLeft() {
      const todayIST = getCurrentDateIST();
      const targetDate = new Date('2024-05-26');
      const timeDifference = targetDate.getTime() - todayIST.getTime();
      const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      return daysLeft;
    }

    const daysLeft = getDaysLeft();
    res.status(200).json({ id: id, daysLeft });
  } catch (error) {
    console.error('An error occurred:', error.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
};