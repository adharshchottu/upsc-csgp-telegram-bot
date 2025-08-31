const agricultureQuestions = [
    {
        "question": "How did land reforms in some parts of the country help to improve the socio-economic conditions of marginal and small farmers?",
        "year": 2021,
        "concept": "Land Reforms",
        "marks": 10
    },
    {
        "question": "How and to what extent would micro-irrigation help in solving India's water crisis? (Answer in 150 words)",
        "year": 2021,
        "concept": "Micro-irrigation",
        "marks": 10
    },
    {
        "question": "What are the salient features of National Food Security Act, 2013? How has the Food Security Bill helped in eliminating hunger and malnutrition in India? (Answer 250 words)",
        "year": 2021,
        "concept": "Food Security",
        "marks": 15
    },
    {
        "question": "What are the present challenges before crop diversification? How do emerging technologies provide an opportunity for crop diversification?",
        "year": 2021,
        "concept": "Crop Diversification",
        "marks": 10
    },
    {
        "question": "What are the main constraints in transport and marketing of agricultural produce in India?",
        "year": 2020,
        "concept": "Agricultural Marketing",
        "marks": 10
    },
    {
        "question": "What are the challenges and opportunities of food processing sector in the country? How can income of the farmers be substantially increased by encouraging food processing?",
        "year": 2020,
        "concept": "Food Processing",
        "marks": 15
    },
    {
        "question": "What are the major factors responsible for making rice-wheat system a success? In spite of this success how has this system become bane in India?",
        "year": 2020,
        "concept": "Rice-Wheat System",
        "marks": 15
    },
    {
        "question": "Suggest measures to improve water storage and irrigation system to make its judicious use under depleting scenario.",
        "year": 2020,
        "concept": "Water Management",
        "marks": 10
    },
    {
        "question": "How far is the Integrated Farming System (IFS) helpful in sustaining agricultural production.",
        "year": 2019,
        "concept": "Integrated Farming",
        "marks": 10
    },
    {
        "question": "Elaborate on the impact of the National Watershed Project in increasing agricultural production from water-stressed areas.",
        "year": 2019,
        "concept": "Watershed Management",
        "marks": 10
    },
    {
        "question": "How has India benefited from the contributions of Sir M. Visvesvaraya and Dr. M. S. Swaminathan in the fields of water engineering and agricultural science respectively?",
        "year": 2019,
        "concept": "Agricultural Scientists",
        "marks": 10
    },
    {
        "question": "What are the reformative steps taken by the Government to make the food grain distribution system more effective?",
        "year": 2019,
        "concept": "Food Distribution",
        "marks": 10
    },
    {
        "question": "Elaborate on the policy taken by the Government of India to meet the challenges of the food processing sector.",
        "year": 2019,
        "concept": "Food Processing",
        "marks": 10
    },
    {
        "question": "What do you mean by the Minimum Support Price (MSP)? How will MSP rescue the farmers from the low-income trap?",
        "year": 2018,
        "concept": "MSP",
        "marks": 10
    },
    {
        "question": "Examine the role of supermarkets in supply chain management of fruits, vegetables, and food items. How do they eliminate the number of intermediaries?",
        "year": 2018,
        "concept": "Supply Chain",
        "marks": 10
    },
    {
        "question": "Assess the role of the National Horticulture Mission (NHM) in boosting the production, productivity, and income of horticulture farms. How far has it succeeded in increasing the income of farmers?",
        "year": 2018,
        "concept": "Horticulture",
        "marks": 15
    },
    {
        "question": "How has the emphasis on certain crops brought about changes in cropping patterns in the recent past? Elaborate the emphasis on millet production and consumption.",
        "year": 2018,
        "concept": "Cropping Pattern",
        "marks": 10
    },
    {
        "question": "Explain various types of revolutions, took place in Agriculture after Independence in India. How these revolutions have helped in poverty alleviation and food security in India?",
        "year": 2017,
        "concept": "Agricultural Revolutions",
        "marks": 15
    },
    {
        "question": "What are the reasons for poor acceptance of cost-effective small processing units? How can the food processing unit be helpful to uplift the socio-economic status of poor farmers?",
        "year": 2017,
        "concept": "Food Processing",
        "marks": 10
    },
    {
        "question": "What are the major reasons for declining rice and wheat yield in the cropping system? How crop diversification is helpful to stabilize the yield of the crop in the system? (Answer in 250 words)",
        "year": 2017,
        "concept": "Crop Yield",
        "marks": 15
    },
    {
        "question": "How do subsidies affect the cropping pattern, crop diversity and economy of farmers? What is the significance of crop insurance, minimum support price and food processing for small and marginal farmers?",
        "year": 2017,
        "concept": "Agricultural Subsidies",
        "marks": 15
    },
    {
        "question": "What is water-use efficiency? Describe the role of micro-irrigation in increasing water-use efficiency.",
        "year": 2016,
        "concept": "Water Efficiency",
        "marks": 10
    },
    {
        "question": "Discuss the role of land reforms in agricultural development. Identify the factors that were responsible for the success of land reforms in India.",
        "year": 2016,
        "concept": "Land Reforms",
        "marks": 10
    },
    {
        "question": "Given the vulnerability of Indian agriculture to vagaries of nature, discuss the need for crop insurance and bring out the salient features of the Pradhan Mantri Fasal Bima Yojana (PMFBY).",
        "year": 2016,
        "concept": "Crop Insurance",
        "marks": 15
    },
    {
        "question": "Livestock rearing has a big potential for providing non-farm employment and income in rural areas. Discuss suggesting suitable examples.",
        "year": 2015,
        "concept": "Livestock",
        "marks": 10
    },
    {
        "question": "In view of the declining average size of land holdings in India which has made agriculture non-viable for a majority of farmers, should contract farming and land leasing be promoted in agriculture? Critically evaluate the pros and cons.",
        "year": 2015,
        "concept": "Contract Farming",
        "marks": 15
    },
    {
        "question": "There is also a point of view that agriculture produce market committees (APMCs) set up under the state acts have not only impeded the development of agriculture but also have been the cause of food inflation in India. Critically examine.",
        "year": 2014,
        "concept": "APMC",
        "marks": 15
    },
    {
        "question": "\"In the villages itself, no form of credit organization will be suitable except the cooperative society.\" – All Indian rural credit survey. Discuss this statement in the background of agriculture finance in India. What constraints and challenges do financial institutions supply agricultural finances? How can technology be used to better reach and serve rural clients?",
        "year": 2014,
        "concept": "Agricultural Finance",
        "marks": 15
    },
    {
        "question": "Food Security Bill is expected to eliminate hunger and malnutrition in India. Critically discuss various apprehensions in its effective implementation along with the concerns it has generated in WTO.",
        "year": 2013,
        "concept": "Food Security",
        "marks": 15
    },
    {
        "question": "What are the different types of agriculture subsidies given to farmers at the national and at state levels? Critically analyse the agricultural subsidy regime with reference to the distortions created by it.",
        "year": 2013,
        "concept": "Agricultural Subsidies",
        "marks": 15
    },
    {
        "question": "India needs to strengthen measures to promote the pink revolution in the food industry for ensuring better nutrition and health. Critically elucidate the statement.",
        "year": 2013,
        "concept": "Pink Revolution",
        "marks": 10
    },
    {
        "question": "Establish relationships between land reforms, agricultural productivity and elimination of poverty in the Indian economy. Discuss the difficulties in designing and implementation of agriculture – friendly land reforms in India.",
        "year": 2013,
        "concept": "Land Reforms",
        "marks": 15
    }
];

module.exports = agricultureQuestions;


