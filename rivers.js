const riversMap = require("./data/rivers");

const TelegramBot = require('node-telegram-bot-api');
const key = require('./key.json')

// Set up the Telegram bot API token
const botToken = key.api_key;

// Set up the Telegram bot API token
const bot = new TelegramBot(botToken);

// Set the chat ID of the group you want to modify
const chatId = key.target_chat_id;

// generate river geogrpahy question
function generateRiverQuestion() {
    // get random pair from map
    const getRandomPairFromMap = (map) => {
        const entries = Array.from(map.entries()); // Get all entries as an array
        const randomIndex = Math.floor(Math.random() * entries.length);
        return entries[randomIndex]; // Return as an object
    }

    // get random object property
    const getRandomProperty = (obj) => {
        const propertyNames = Object.keys(obj);
        const randomIndex = Math.floor(Math.random() * propertyNames.length);
        const randomPropertyName = propertyNames[randomIndex];
        return { key: randomPropertyName, value: obj[randomPropertyName] };
    };

    // truncate describe list
    const describeList = (items, type) => {
        if (items && items.length > 0) {
            const itemCount = items.length;
            if (itemCount <= 3) {
                return `${items.join(', ')}`;
            } else {
                const sampleItems = items.slice(0, 3);
                return `${sampleItems.join(', ')}, and others`;
            }
        }
        return '';
    }

    // generate the river detailed explanation
    const generateRiverDescription = (river, details, exclude) => {
        const { source, states, tributaries, countries, mainstem, confluence, mouth } = details;

        let description = [];

        if (source && exclude != 'source') {
            description.push(`It originates from ${source}. `);
        }

        if (states && states.length > 0 && exclude != 'states') {
            const stateDescription = describeList(states, 'state');
            description.push(`It flows through ${states.length > 1 ? 'states' : 'the state'} including ${stateDescription}. `);
        }

        if (countries && countries.length > 0 && exclude != 'countries') {
            const countryDescription = describeList(countries, 'country');
            description.push(`This river spans across ${countries.length > 1 ? 'countries' : 'the country'} including ${countryDescription}. `);
        }

        if (tributaries && tributaries.length > 0 && exclude != 'countries') {
            const tributaryCount = tributaries.length;
            const tributaryDescription = describeList(tributaries, 'tributary');
            description.push(`It has ${tributaryCount} notable ${tributaryCount === 1 ? 'tributary' : 'tributaries'}, including ${tributaryDescription}. `);
        }

        if (mainstem && exclude != 'mainstem') {
            description.push(`It is a major tributary of the ${mainstem}. `);
        }

        if (confluence && exclude != 'confluence') {
            description.push(`It meets with ${mainstem} at ${confluence}. `);
        }

        if (mouth && exclude != 'mouth') {
            description.push(`It ultimately empties into ${mouth}. `);
        }

        let finalDescription = '';
        for (let descriptionItem of description) {
            if ((finalDescription + descriptionItem).length <= 200) {
                finalDescription += descriptionItem + ' ';
            } else {
                break;
            }
        }

        return finalDescription.trim();
    }

    let questionRiverData = getRandomPairFromMap(riversMap);
    let [river, details] = questionRiverData;
    let { key, value } = getRandomProperty(details)
    let explanation = generateRiverDescription(river, details, key);

    // if value is array add questionOptions. else 
    if (Array.isArray(value)) {
        // if the key is tributaires create a different question
        let question = key == 'tributaries' ? `Which among the following is a ${key} of the river ${river}?` : `Which among the following is a ${key} in which the river ${river} flows?`;
        let answerValues = value;
        let answerValue = answerValues[Math.floor(Math.random() * answerValues.length)]; // select one from the correct values 
        const valueEntries = Array.from(riversMap.values()); // value entries in the map
        // all values of the selected property
        const selectedValues = valueEntries.map((e) => {
            const propertyValue = e[key];
            return propertyValue;
        }).reduce((reduced, current) => {
            if (current) {
                reduced = [...reduced, ...current]
            }
            return reduced;
        }, [])
        // filter out the answer value and fetch 3 random value from it
        const filteredNonAnswers = selectedValues.filter((e) => {
            return e != answerValue && e && !(answerValues.includes(e))
        })

        // if non answers are less than 3, skip it
        if (filteredNonAnswers.length >= 3) {
            const randomItems = new Set();
            for (let j = 0; j < 10; j++) {
                const randomIndex = Math.floor(Math.random() * filteredNonAnswers.length);
                if (randomItems.size < 3) {
                    randomItems.add(filteredNonAnswers[randomIndex]);
                }
            }
            if (randomItems.size == 3) {
                let wrongOptions = [...Array.from(randomItems), answerValue];
                const options = wrongOptions.sort(() => Math.random() - 0.5);
                const answer = options.indexOf(answerValue);
                return { question, options, answer, explanation }
            }
        }
    } else {
        let question = `What is the ${key} of the river ${river}?`;
        let answerValue = value;
        const valueEntries = Array.from(riversMap.values()); // value entries in the map
        // all values of the selected property
        const selectedValues = valueEntries.map((e) => {
            const propertyValue = e[key];
            return propertyValue;
        })
        // filter out the answer value and fetch 3 random value from it
        const filteredNonAnswers = selectedValues.filter((e) => {
            return e != value && e
        })

        // if non answers are less than 3, skip it
        if (filteredNonAnswers.length >= 3) {
            const randomItems = new Set();
            for (let j = 0; j < 10; j++) {
                const randomIndex = Math.floor(Math.random() * filteredNonAnswers.length);
                if (randomItems.size < 3) {
                    randomItems.add(filteredNonAnswers[randomIndex]);
                }
            }
            if (randomItems.size == 3) {
                let wrongOptions = [...Array.from(randomItems), answerValue];
                const options = wrongOptions.sort(() => Math.random() - 0.5);
                const answer = options.indexOf(answerValue);
                return { question, options, answer, explanation }
            }
        }
    }

    return false;
}

// generate questions
async function generateQuestion() {
    const questionObject = generateRiverQuestion();
    if (!questionObject) {
        generateQuestion()
    } else {
        const containsOnlyUniqueItems = arr => arr.length === new Set(arr).size;
        if (questionObject.options.length != 4 && containsOnlyUniqueItems(questionObject.options)) {
            generateQuestion()
        }
        else {
            const { question, options, answer, explanation } = questionObject
            try {
                await bot.sendPoll(chatId, question, options, { type: 'quiz', correct_option_id: answer, explanation: explanation });
                console.log('Quiz poll sent successfully!');
            }
            catch (error) {
                console.log("error sending geography quiz", error)
            }
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