const TelegramBot = require('node-telegram-bot-api');
const key = require('./key.json')
const quizData = require('./economics')

// Set up the Telegram bot API token
const botToken = key.api_key;

// Set up the Telegram bot API token
const bot = new TelegramBot(botToken);

// Set the chat ID of the group you want to modify
const chatId = key.target_chat_id;

// Function to send a poll for the current question
async function sendQuizPoll() {
    function getCurrentDateIST() {
        const currentTime = new Date();
        const offset = currentTime.getTimezoneOffset();
        const ISTOffset = 330; // IST is UTC+5:30
        const currentTimeIST = new Date(currentTime.getTime() + (ISTOffset + offset) * 60000);
        return currentTimeIST;
    }

    function getDaysLeft() {
        const todayIST = getCurrentDateIST();
        const targetDate = new Date('2025-05-28');
        const timeDifference = targetDate.getTime() - todayIST.getTime();
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return daysLeft;
    }

    let daysLeft = getDaysLeft();
    const day = (325 % daysLeft) * 4;
    const currentHour = new Date().getHours();
    const currentQuarter = Math.floor(currentHour / 5);
    const questionIndex = day + currentQuarter >= 549 ? (day + currentQuarter - 549 + 1) : day + currentQuarter;

    const currentQuestion = quizData[questionIndex];
    const { question, questionOptions, questionDirection, answer, options } = currentQuestion;

    // Send the question as a message
    try {
        // Check if question options and question direction are available
        if (questionOptions && questionDirection) {
            // Prepare the poll question by combining the question options and question direction
            const pollQuestion = `${question}\n${questionOptions.map((option, index) => `${index + 1}. ${option}`).join('\n')}`;
            await bot.sendMessage(chatId, pollQuestion);
            console.log('Question sent as a message.');

            // Create the poll using the 'sendPoll' method
            await bot.sendPoll(chatId, questionDirection, options, { type: 'quiz', correct_option_id: answer });
            console.log('Quiz poll sent successfully!');
        } else {
            // Create the poll using the 'sendPoll' method with just the question and options
            await bot.sendPoll(chatId, question, options, { type: 'quiz', correct_option_id: answer });
            console.log('Quiz poll sent successfully!');
        }
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

module.exports = async (req, res) => {
    try {
        await sendQuizPoll();
        res.status(200).send('Quiz poll sent successfully.');
    } catch (error) {
        console.error('An error occurred:', error.message);
        res.status(500).send('Failed to send quiz poll.');
    }
};