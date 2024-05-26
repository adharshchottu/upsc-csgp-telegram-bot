const TelegramBot = require('node-telegram-bot-api');
const key = require('./key.json');
const quotes = require('./quotes')

// Set up the Telegram bot API token
const botToken = key.api_key;

// Set up the Telegram bot API token
const bot = new TelegramBot(botToken);

// Set the chat ID of the group you want to modify
const chatId = key.target_chat_id;

// select quote to send
function getCurrentDateIST() {
    const currentTime = new Date();
    const offset = currentTime.getTimezoneOffset();
    const ISTOffset = 330; // IST is UTC+5:30
    const currentTimeIST = new Date(currentTime.getTime() + (ISTOffset + offset) * 60000);
    return currentTimeIST;
}

function getDaysLeft() {
    const todayIST = getCurrentDateIST();
    const targetDate = new Date('2025-05-23');
    const timeDifference = targetDate.getTime() - todayIST.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft;
}

let daysLeft = getDaysLeft();
const day = (367 % daysLeft) * 4;
const currentHour = new Date().getHours();
const currentQuarter = Math.floor(currentHour / 5);
const quoteIndex = day + currentQuarter >= 268 ? (day + currentQuarter - 268 + 1) : day + currentQuarter;

const quoteToSend = `
"${quotes[quoteIndex].quote}"
~ *${quotes[quoteIndex].quoter}*`

let newText = quoteToSend.replace(/_*[\~`>#+=|{}.!-]/g, (match) => {
    return "\\" + match; // add a \ before each match
});


module.exports = async (req, res) => {
    try {
        await bot.sendMessage(chatId, newText, { parse_mode: 'markdownv2' });
        console.log('Vercel sent a quote to Telegram');
        res.status(200).send('Vercel sent a quote to Telegram');
    } catch (error) {
        console.error('An error occurred:', error.message);
        res.status(500).send('Failed to send quote.');
    }
};