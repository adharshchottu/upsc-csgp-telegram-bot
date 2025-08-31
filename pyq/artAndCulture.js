const TelegramBot = require('node-telegram-bot-api');
const key = require('../key.json');
const artAndCulturePYQData = require('./data/artAndCulture')

// Set up the Telegram bot API token
const botToken = key.api_key;

// Set up the Telegram bot API token
const bot = new TelegramBot(botToken);

// Set the chat ID of the group you want to modify
const chatId = key.target_chat_id;

// select art and culture question to send
const questionIndex = Math.floor(Math.random() * artAndCulturePYQData.length);

const selectedQuestion = artAndCulturePYQData[questionIndex];

const artAndCultureQuestion = `__Art & Culture Question of the Day__

 ${selectedQuestion.question}

*Year:* ${selectedQuestion.year}
*Concept:* ${selectedQuestion.concept}
*Marks:* ${selectedQuestion.marks}`
let newText = artAndCultureQuestion.replace(/_*[\~`>#+=|{}.!-]/g, (match) => {
    return "\\" + match; // add a \ before each match
});


// Call the 'setChatTitle' method to change the group title
module.exports = async (req, res) => {
    try {
        await bot.sendMessage(chatId, newText, { parse_mode: 'markdownv2' });
        console.log('Vercel sent an art & culture question to Telegram');
        res.status(200).send('Vercel sent an art & culture question to Telegram');
    } catch (error) {
        console.error('An error occurred:', error.message);
        res.status(500).send('Failed to send art & culture question.');
    }
};
