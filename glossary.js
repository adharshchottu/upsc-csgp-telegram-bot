const TelegramBot = require('node-telegram-bot-api');
const key = require('./key.json')
const glossaryData = require('./data/glossary')

// Set up the Telegram bot API token
const botToken = key.api_key;

// Set up the Telegram bot API token
const bot = new TelegramBot(botToken);

// Set the chat ID of the group you want to modify
const chatId = key.test_chat;

// Function to send a poll for the current question
async function sendTermAndDefinition() {

    const currentItem = glossaryData[Math.floor(Math.random() * glossaryData.length)];
    const { term, definition } = currentItem;

    function escapeHTML(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // Send the question as a message
    try {
        // Prepare the poll question by combining the question options and question direction
        const termAndDefinition = `<u><b>${escapeHTML(term)}</b></u>\n\n${escapeHTML(definition)}`;
        await bot.sendMessage(chatId, termAndDefinition, { parse_mode: "HTML" });
        console.log('Term and definition sent as a message.');
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

module.exports = async (req, res) => {
    try {
        await sendTermAndDefinition();
        res.status(200).send('Term and definition sent successfully.');
    } catch (error) {
        console.error('An error occurred:', error.message);
        res.status(500).send('Failed to send Term and definition.');
    }
};