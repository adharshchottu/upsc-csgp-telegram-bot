const TelegramBot = require('node-telegram-bot-api');
const key = require('../key.json');
const governancePYQData = require('./data/governance')

// Set up the Telegram bot API token
const botToken = key.api_key;

// Set up the Telegram bot API token
const bot = new TelegramBot(botToken);

// Set the chat ID of the group you want to modify
const chatId = key.target_chat_id;

// select governance question to send
const questionIndex = Math.floor(Math.random() * governancePYQData.length);

const selectedQuestion = governancePYQData[questionIndex];

const governanceQuestion = `__Governance Question of the Day__

 ${selectedQuestion.question}

*Year:* ${selectedQuestion.year}
*Concept:* ${selectedQuestion.concept}
*Marks:* ${selectedQuestion.marks}`
let newText = governanceQuestion.replace(/_*[\~`>#+=|{}.!-]/g, (match) => {
    return "\\" + match; // add a \ before each match
});


// Call the 'setChatTitle' method to change the group title
module.exports = async (req, res) => {
    try {
        await bot.sendMessage(chatId, newText, { parse_mode: 'markdownv2' });
        console.log('Vercel sent a governance question to Telegram');
        res.status(200).send('Vercel sent a governance question to Telegram');
    } catch (error) {
        console.error('An error occurred:', error.message);
        res.status(500).send('Failed to send governance question.');
    }
};
