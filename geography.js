const originalData = require("./districts_data");
const stateDistricts = originalData.statesDistrictsMap;
const utDistricts = originalData.UTdistrictsMap;
const statesMap = originalData.statesMap;
const utsMap = originalData.utsMap;
const countriesMap = originalData.countriesMap;

const TelegramBot = require('node-telegram-bot-api');
const key = require('./key.json')

// Set up the Telegram bot API token
const botToken = key.api_key;

// Set up the Telegram bot API token
const bot = new TelegramBot(botToken);

// Set the chat ID of the group you want to modify
const chatId = key.target_chat_id;

// 1. select a district in a state
function stateDistrictsQuestion() {
    const randomStateEntryIndex = Math.floor(Math.random() * stateDistricts.size);
    const randomStateEntry = Array.from(stateDistricts.entries())[randomStateEntryIndex];

    const randomState = randomStateEntry[0];
    const stateArray = randomStateEntry[1];
    const randomStateDistrict = stateArray[Math.floor(Math.random() * stateArray.length)];

    const remainingValues = Array.from(stateDistricts)
        .filter(([state]) => state !== randomState)
        .flatMap(([, districts]) => districts);
    const notStateDistricts = remainingValues
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const question = `Select a district in ${randomState}`;
    const options = [randomStateDistrict, ...notStateDistricts].sort(() => Math.random() - 0.5)
    const answer = options.indexOf(randomStateDistrict);
    return { question, options, answer }
}

// 2. select a district in a UT
function utDistrictsQuestion() {
    const randomEntryIndex = Math.floor(Math.random() * utDistricts.size);
    const randomEntry = Array.from(utDistricts.entries())[randomEntryIndex];

    const randomState = randomEntry[0];
    const randomArray = randomEntry[1];
    const randomStateDistrict = randomArray[Math.floor(Math.random() * randomArray.length)];

    const remainingValues = Array.from(utDistricts)
        .filter(([state]) => state !== randomState)
        .flatMap(([, districts]) => districts);
    const notStateDistricts = remainingValues
        .sort(() => Math.random() - 0.25)
        .slice(0, 3);

    const question = `Select a district in ${randomState}`;
    const options = [randomStateDistrict, ...notStateDistricts].sort(() => Math.random() - 0.5)
    const answer = options.indexOf(randomStateDistrict);
    return { question, options, answer }
}

// 3. district in which state
function districtStateQuestion() {
    const entriesArray = Array.from(stateDistricts.entries());
    const randomEntry = entriesArray[Math.floor(Math.random() * entriesArray.length)];

    const randomKey = randomEntry[0];
    const randomValue = randomEntry[1][Math.floor(Math.random() * randomEntry[1].length)];

    const keysArray = Array.from(stateDistricts.keys());
    const randomKeys = keysArray
        .filter(key => key !== randomKey)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const question = `${randomValue} is in which state?`
    const options = [randomKey, ...randomKeys].sort(() => Math.random() - 0.25)
    const answer = options.indexOf(randomKey)
    return { question, options, answer }
}

// 4. district in which UT
function districtUTQuestion() {
    const entriesArray = Array.from(utDistricts.entries());
    const randomEntry = entriesArray[Math.floor(Math.random() * entriesArray.length)];

    const randomKey = randomEntry[0];
    const randomValue = randomEntry[1][Math.floor(Math.random() * randomEntry[1].length)];

    const keysArray = Array.from(utDistricts.keys());
    const randomKeys = keysArray
        .filter(key => key !== randomKey)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const question = `${randomValue} is in which Union Territory?`
    const options = [randomKey, ...randomKeys].sort(() => Math.random() - 0.25)
    const answer = options.indexOf(randomKey)
    return { question, options, answer }
}

// 5. select one does share border with
function doesShareBorderWith() {
    // generate a random number and select the state, ut or country data
    const randomDataIndex = Math.floor(Math.random() * 3)
    const data = randomDataIndex == 0 ? statesMap : (randomDataIndex == 1 ? utsMap : countriesMap);
    const randomKeyIndex = Math.floor(Math.random() * data.size);
    const randomKeyValuePair = Array.from(data.entries())[randomKeyIndex];

    const randomKey = randomKeyValuePair[0];
    const randomValues = randomKeyValuePair[1];
    const randomValue = randomValues[Math.floor(Math.random() * randomValues.length)];

    const remainingValues = Array.from(data)
        .filter(([state]) => state !== randomKey)
        .flatMap(([, districts]) => districts)
        .filter(value => !randomValues.includes(value));
    const doesNotShareBorder = remainingValues
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const question = `Select one which does share a border with ${randomKey}`;
    const options = [...doesNotShareBorder, randomValue].sort(() => Math.random() - 0.25);
    const answer = options.indexOf(randomValue)
    return { question, options, answer }
}

// 6. select one doesn't share border with
function doesNotShareBorderWith() {
    // generate a random number and select the state, ut or country data
    const randomDataIndex = Math.floor(Math.random() * 3)
    const data = randomDataIndex == 0 ? statesMap : (randomDataIndex == 1 ? utsMap : countriesMap);
    const randomKeyIndex = Math.floor(Math.random() * data.size);
    const randomKeyValuePair = Array.from(data.entries())[randomKeyIndex];

    const randomKey = randomKeyValuePair[0];
    const randomValues = randomKeyValuePair[1];

    const remainingValues = Array.from(data)
        .filter(([state]) => state !== randomKey)
        .flatMap(([, districts]) => districts)
        .filter(value => !randomValues.includes(value));
    const doesNotShareBorder = remainingValues
        .sort(() => Math.random() - 0.5)

    const question = `Select one which does not share a border with ${randomKey}`;
    const options = [...randomValues.sort(() => Math.random() - 0.5).slice(0, 3), doesNotShareBorder[0]].sort(() => Math.random() - 0.25);
    const answer = options.indexOf(doesNotShareBorder[0])
    return { question, options, answer }
}

// select either utDistrictsQuestion or districtUTQuestion
function selectUtQuestionFunction() {
    const random = Math.floor(Math.random() * 10);
    if (random % 2 == 0) {
        return utDistrictsQuestion()
    }
    else {
        return districtUTQuestion()
    }
}

// generate questions
async function generateQuestion() {
    const questionsFunctions = [stateDistrictsQuestion(), selectUtQuestionFunction(), districtStateQuestion(), doesShareBorderWith(), doesNotShareBorderWith()]
    const currentHour = new Date().getHours();
    const currentTimeSlot = Math.floor(currentHour / 4);
    console.log(currentTimeSlot)
    const questionObject = questionsFunctions[currentTimeSlot]
    if (questionObject.options.length != 4) {
        generateQuestion()
    }
    else {
        const { question, options, answer } = questionObject
        try {
            await bot.sendPoll(chatId, question, options, { type: 'quiz', correct_option_id: answer });
            console.log('Quiz poll sent successfully!');
        }
        catch (error) {
            console.log("error sending geography quiz", error)
        }
    }
}

module.exports = async (req, res) => {
    try {
        await generateQuestion();
        res.status(200).send('Quiz sent successfully.');
    } catch (error) {
        console.error('An error occurred:', error.message);
        res.status(500).send('Failed to send quiz poll.');
    }
};