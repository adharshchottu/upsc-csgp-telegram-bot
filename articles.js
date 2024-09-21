const TelegramBot = require('node-telegram-bot-api');
const key = require('./key.json')
const quizHightlight = require('./data/articleHighlight')

// Set up the Telegram bot API token
const botToken = key.api_key;

// Set up the Telegram bot API token
const bot = new TelegramBot(botToken);

// Set the chat ID of the group you want to modify
const chatId = key.target_chat_id;

// Function to send a poll for the current question
async function sendQuizPoll() {

    // select which data to use - full article or highlighted article
    const dataSet = quizHightlight;
    // select which method - article number as question or answer
    const numberMethod = (Math.floor(Math.random() * 20) + 1) % 2 === 0 ? true : false;
    // generate four unique index for aricles from the data set
    function generateUniqueRandomIntegers(num) {
        let nums = [];
        while (nums.length < 4) {
            let rand = Math.floor(Math.random() * num);
            if (!nums.includes(rand)) {
                nums.push(rand);
            }
        }
        return nums;
    }
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    const articlesIndexArray = generateUniqueRandomIntegers(dataSet.length);
    const selectedArticlesObject = articlesIndexArray.map(d => dataSet[d]);
    const question = numberMethod ? `Article ${selectedArticlesObject[0].articleNo} states that` : selectedArticlesObject[0].article;
    const answer = !numberMethod ? `Article ${selectedArticlesObject[0].articleNo}` : selectedArticlesObject[0].article.replace(/\n\s*/g, '');
    const unshuffledOptions = numberMethod ? selectedArticlesObject.map(d => d.article) : selectedArticlesObject.map(d => d.articleNo).map(d => `Article ${d}`);
    const options = shuffleArray(unshuffledOptions).map(d => d.replace(/\n\s*/g, ''));
    const explanation = `Article ${selectedArticlesObject[0].articleNo} is in part ${selectedArticlesObject[0].part} of the Indian Constitution`
    const correct_option_id = options.findIndex((item) => {
        return item == answer;
    });

    function hasItemWithLengthGreaterThan95(arr) {
        // Check if any item in the array has a length greater than 95
        return arr.some(item => item.length > 95);
    }

    // Send the question as a message
    try {
        // Check if question is above 100 character send it as a text and add a follow up quiz
        if (question.length > 99) {
            let largeOptions = hasItemWithLengthGreaterThan95(options)
            if (largeOptions) {
                // Prepare the poll question by combining the question and options as text
                const pollQuestion = `${question}\n${options.map((option, index) => `${index + 1}. ${option}`).join('\n')}`;
                await bot.sendMessage(chatId, pollQuestion);
                console.log('Question sent as a message.');

                // Create the poll using the 'sendPoll' method
                await bot.sendPoll(chatId, "Select the correct match", ["1", "2", "3", "4"], { type: 'quiz', correct_option_id: correct_option_id, explanation: explanation });
                console.log('Quiz poll sent successfully!');
            } else {
                // Prepare the poll question as text
                await bot.sendMessage(chatId, question);
                console.log('Question sent as a message.');

                // Create the poll using the 'sendPoll' method
                await bot.sendPoll(chatId, "Select the correct match", options, { type: 'quiz', correct_option_id: correct_option_id, explanation: explanation });
                console.log('Quiz poll sent successfully!');
            }
        } else {
            let largeOptions = hasItemWithLengthGreaterThan95(options)
            if (largeOptions) {
                // Prepare the poll question by combining the question and options as text
                const pollQuestion = `${question}\n${options.map((option, index) => `${index + 1}. ${option}`).join('\n')}`;
                await bot.sendMessage(chatId, pollQuestion);
                console.log('Question sent as a message.');

                // Create the poll using the 'sendPoll' method
                await bot.sendPoll(chatId, "Select the correct match", ["1", "2", "3", "4"], { type: 'quiz', correct_option_id: correct_option_id, explanation: explanation });
                console.log('Quiz poll sent successfully!');
            } else {
                // Create the poll using the 'sendPoll' method with just the question and options
                await bot.sendPoll(chatId, question, options, { type: 'quiz', correct_option_id: correct_option_id, explanation: explanation });
                console.log('Quiz poll sent successfully!');
            }

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