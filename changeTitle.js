const TelegramBot = require('node-telegram-bot-api');
const key = require('./key.json')

// Set up the Telegram bot API token
const botToken = key.api_key;

// Set up the Telegram bot API token
const bot = new TelegramBot(botToken);

// Set the chat ID of the group you want to modify
const chatId = key.target_chat_id;

// Set the new title for the group

let daysLeft = (() => {
  const currentDate = new Date();
  const targetDate = new Date(2024,4,26);
  const diffInMilliseconds = targetDate.getTime() - currentDate.getTime();
  const daysDifference = Math.floor(
    diffInMilliseconds / (1000 * 60 * 60 * 24)
  );
  if (daysDifference == 0) {
    return `Prelims!`;
  } else if (daysDifference == 1) {
    return `Tomorrow prelims`;
  } else {
    return `${daysDifference} days to prelims 🎯`;
  }
})();

// Call the 'setChatTitle' method to change the group title
module.exports = async (req, res) => {
  try {
    const titleChanged = await bot.setChatTitle(chatId, daysLeft)
    if (titleChanged) {
      console.log('Group title changed successfully!');
      res.status(200).json({ message: 'Group title changed successfully' });
    }
    else {
      throw new Error('Failed to change group title');
    }
  }
  catch (error) {
    console.error('An error occurred:', error.message);
    res.status(500).json({ error: 'Failed to change group title' });
  }
}