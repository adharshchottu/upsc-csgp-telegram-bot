const societyQuestions = [
    {
        "question": "Growing feeling of regionalism is an important factor in the generation of demand for a separate state. Discuss.",
        "year": 2013,
        "concept": "Regionalism",
        "marks": 10
    },
    {
        "question": "How do the Indian debates on secularism differ from the debates in the West?",
        "year": 2014,
        "concept": "Secularism",
        "marks": 10
    },
    {
        "question": "Debate the issue of whether and how contemporary movements for assertion of Dalit identity work towards annihilation of caste.",
        "year": 2015,
        "concept": "Caste",
        "marks": 12.5
    },
    {
        "question": "Describe any four cultural elements of diversity in India and rate their relative significance in building a national identity.",
        "year": 2015,
        "concept": "Diversity",
        "marks": 12.5
    },
    {
        "question": "Mahatma Gandhi and Dr. B.R. Ambedkar, despite having divergent approaches and strategies, had a common goal of amelioration of the downtrodden. Elucidate.",
        "year": 2015,
        "concept": "Caste",
        "marks": 12.5
    },
    {
        "question": "What is the basis of regionalism? Is it that unequal distribution of benefits of development on regional basis eventually promotes regionalism? Substantiate your answer.",
        "year": 2016,
        "concept": "Regionalism",
        "marks": 12.5
    },
    {
        "question": "Why are the tribals in India referred to as the Scheduled Tribes? Indicate the major provisions enshrined in the Constitution of India for their upliftment.",
        "year": 2016,
        "concept": "Empowerment",
        "marks": 12.5
    },
    {
        "question": "Has the formation of linguistic States strengthened the cause of Indian Unity?",
        "year": 2016,
        "concept": "Unity",
        "marks": 12.5
    },
    {
        "question": "What are the two major legal initiatives by the State since Independence, addressing discrimination against Scheduled Tribes (STs)?",
        "year": 2017,
        "concept": "Empowerment",
        "marks": 10
    },
    {
        "question": "In the context of diversity of India, can it be said that the regions form cultural units rather than the States? Give reasons with examples for your viewpoint.",
        "year": 2017,
        "concept": "Diversity",
        "marks": 10
    },
    {
        "question": "Distinguish between religiousness/religiosity and communalism giving one example of how the former has got transformed into the latter in independent India.",
        "year": 2017,
        "concept": "Communalism",
        "marks": 15
    },
    {
        "question": "The spirit tolerance and love is not only an interesting feature of Indian society from very early times, but it is also playing an important part at the present. Elaborate.",
        "year": 2017,
        "concept": "Unity",
        "marks": 15
    },
    {
        "question": "'Communalism arises either due to power struggle or relative deprivation. Argue by giving suitable illustrations.",
        "year": 2018,
        "concept": "Communalism",
        "marks": 15
    },
    {
        "question": "How the Indian concept of secularism is different from the western model of secularism? Discuss.",
        "year": 2018,
        "concept": "Secularism",
        "marks": 10
    },
    {
        "question": "\"Caste system is assuming new identities and associational forms. Hence, caste system cannot be eradicated in India.\" Comment.",
        "year": 2018,
        "concept": "Caste",
        "marks": 10
    },
    {
        "question": "What are the challenges to our cultural practices in the name of secularism.",
        "year": 2019,
        "concept": "Secularism",
        "marks": 10
    },
    {
        "question": "Do we have cultural pockets of small India all over the nation? Elaborate with examples.",
        "year": 2019,
        "concept": "Unity",
        "marks": 15
    },
    {
        "question": "What makes Indian society unique in sustaining its culture? Discuss.",
        "year": 2019,
        "concept": "Tradition",
        "marks": 10
    },
    {
        "question": "Customs and traditions suppress reason leading to obscurantism. Do you agree?",
        "year": 2020,
        "concept": "Tradition",
        "marks": 15
    },
    {
        "question": "Do you agree that regionalism in India appears to be a consequence of rising cultural assertiveness? Argue.",
        "year": 2020,
        "concept": "Regionalism",
        "marks": 10
    },
    {
        "question": "Is diversity and pluralism in India under threat due to globalisation? Justify your answer.",
        "year": 2020,
        "concept": "Diversity",
        "marks": 15
    },
    {
        "question": "Has caste lost its relevance in understanding the multi-cultural Indian Society? Elaborate your answer with illustrations.",
        "year": 2020,
        "concept": "Caste",
        "marks": 10
    },
    {
        "question": "Examine the uniqueness of tribal knowledge system when compared with mainstream knowledge and cultural systems.",
        "year": 2021,
        "concept": "Tribal",
        "marks": 10
    },
    {
        "question": "How does Indian Society maintain continuity in traditional social values? Enumerate the changes taking place in it.",
        "year": 2021,
        "concept": "Tradition",
        "marks": 15
    },
    {
        "question": "Given the diversities among tribal communities in India, in which specific contexts should they be considered as a single category?",
        "year": 2022,
        "concept": "Tribal",
        "marks": 10
    },
    {
        "question": "Analyse the salience of 'sect' in Indian society vis-a-vis caste, region and religion.",
        "year": 2022,
        "concept": "Caste",
        "marks": 15
    },
    {
        "question": "Are tolerance, assimilation, and pluralism the key elements in the making of an Indian form of secularism? Justify your answer.",
        "year": 2022,
        "concept": "Secularism",
        "marks": 15
    },
    {
        "question": "The life cycle of a joint family depends on economic factors rather than social values. Discuss.",
        "year": 2014,
        "concept": "Family",
        "marks": 10
    },
    {
        "question": "Discuss the changes in the trends of labour migration within and outside India in the last four decades.",
        "year": 2015,
        "concept": "Development issues",
        "marks": 12.5
    },
    {
        "question": "Critically examine whether growing population is the cause of poverty OR poverty is the main cause of population increase in India.",
        "year": 2015,
        "concept": "Population",
        "marks": 12.5
    },
    {
        "question": "\"An essential condition to eradicate poverty is to liberate the poor from deprivation.\" Substantiate this statement with suitable examples.",
        "year": 2016,
        "concept": "Poverty",
        "marks": 12.5
    },
    {
        "question": "Mention core strategies for the transformation of aspirational districts in India and explain the nature of convergence, collaboration and competition for its success.",
        "year": 2018,
        "concept": "Development issues",
        "marks": 15
    },
    {
        "question": "Discuss whether formation of new states in recent times is beneficial or not for the economy of India.",
        "year": 2018,
        "concept": "Development issues",
        "marks": 15
    },
    {
        "question": "'Despite implementation of various programmes for eradication of poverty by the government in India, poverty is still existing.' Explain by giving reasons.",
        "year": 2018,
        "concept": "Poverty",
        "marks": 10
    },
    {
        "question": "How have digital initiatives in India contributed to the functioning of the educational system in the country? Elaborate your answer.",
        "year": 2020,
        "concept": "Development issues",
        "marks": 15
    },
    {
        "question": "COVID-19 pandemic accelerated class inequalities and poverty in India. Comment.",
        "year": 2020,
        "concept": "Poverty",
        "marks": 10
    },
    {
        "question": "Discuss the main objectives of Population Education and point out the measures to achieve them in India in detail.",
        "year": 2021,
        "concept": "Population",
        "marks": 15
    },
    {
        "question": "What is Cryptocurrency? How does it affect global security? Has it been affecting Indian society also?",
        "year": 2021,
        "concept": "Development issues",
        "marks": 15
    },
    {
        "question": "Discussion the various social problems which originated out of the speedy process of urbanization in India.",
        "year": 2013,
        "concept": "Social Problems",
        "marks": 10
    },
    {
        "question": "Smart cities in India cannot sustain without smart villages. Discuss this statement in the backdrop of rural urban integration.",
        "year": 2015,
        "concept": "Integration",
        "marks": 12.5
    },
    {
        "question": "Mumbai, Delhi and Kolkata are the three mega cities of the country but the air pollution is much more serious problem in Delhi as compared to the other two. Why is this so?",
        "year": 2015,
        "concept": "Pollution",
        "marks": 12.5
    },
    {
        "question": "Major cities of India are becoming more vulnerable to flood conditions. Discuss.",
        "year": 2016,
        "concept": "Flood",
        "marks": 12.5
    },
    {
        "question": "With a brief background of quality of urban life in India, introduce the objectives and strategy of the 'Smart City Programme'.",
        "year": 2016,
        "concept": "Programme",
        "marks": 12.5
    },
    {
        "question": "The growth of cities as I.T. hubs has opened up new avenues employment but has also created new problems. Substantiate this statement with examples.",
        "year": 2017,
        "concept": "Social Problems",
        "marks": 15
    },
    {
        "question": "\"The ideal solution of depleting ground water resources in India is water harvesting system.\" How can it be made effective in urban areas?",
        "year": 2018,
        "concept": "Resource",
        "marks": 15
    },
    {
        "question": "How is efficient and affordable urban mass transport key to the rapid economic development of India?",
        "year": 2019,
        "concept": "Transport",
        "marks": 15
    },
    {
        "question": "Account for the huge flooding of million cities in India including the smart ones like Hyderabad and Pune. Suggest lasting remedial measures.",
        "year": 2020,
        "concept": "Flood",
        "marks": 15
    },
    {
        "question": "What are the main socio-economic implications arising out of development of IT industries in major cities of India",
        "year": 2021,
        "concept": "Social Problems",
        "marks": 15
    },
    {
        "question": "How is the growth of Tier 2 cities related to the rise of a new middle class with an emphasis on the culture of consumption?",
        "year": 2022,
        "concept": "Social Problems",
        "marks": 10
    },
    {
        "question": "Critically examine the effects of globalization on the aged population in India.",
        "year": 2013,
        "concept": "Aged",
        "marks": 10
    },
    {
        "question": "To what extent globalization has influenced the core of cultural diversity in India? Explain.",
        "year": 2016,
        "concept": "Culture",
        "marks": 12.5
    },
    {
        "question": "Discuss the positive and negative effects of globalization on women in India.",
        "year": 2015,
        "concept": "Women",
        "marks": 12.5
    },
    {
        "question": "'Globalization is generally said to promote cultural homogenization but due to this cultural specificities appear to be strengthened in the Indian Society. Elucidate.",
        "year": 2018,
        "concept": "Culture",
        "marks": 15
    },
    {
        "question": "Are we losing our local identity for the global identity? Discuss.",
        "year": 2019,
        "concept": "Identity",
        "marks": 15
    },
    {
        "question": "Explore and evaluate the impact of 'Work From Home' on family relationships.",
        "year": 2022,
        "concept": "Relationship",
        "marks": 10
    },
    {
        "question": "Elucidate the relationship between globalization and new technology in a world of scarce resources, with special reference to India.",
        "year": 2022,
        "concept": "Technology",
        "marks": 15
    },
    {
        "question": "Male membership needs to be encouraged in order to make women's organization free from gender bias. Comment.",
        "year": 2013,
        "concept": "Bias",
        "marks": 10
    },
    {
        "question": "Why do some of the most prosperous regions of India have an adverse sex ratio for women? Give your arguments.",
        "year": 2014,
        "concept": "Sex ratio",
        "marks": 10
    },
    {
        "question": "Discuss the various economic and socio-cultural forces that are driving increasing feminization of agriculture in India.",
        "year": 2014,
        "concept": "Feminization",
        "marks": 10
    },
    {
        "question": "How does patriarchy impact the position of a middle class working woman in India?",
        "year": 2014,
        "concept": "Work",
        "marks": 10
    },
    {
        "question": "How do you explain the statistics that show that the sex ratio in Tribes in India is more favourable to women than the sex ratio among Scheduled Castes?",
        "year": 2015,
        "concept": "Sex ratio",
        "marks": 12.5
    },
    {
        "question": "'Women's movement in India has not addressed the issues of women of lower social strata. Substantiate your view.",
        "year": 2018,
        "concept": "Movements",
        "marks": 15
    },
    {
        "question": "What are the continued challenges for women in India against time and space?",
        "year": 2019,
        "concept": "Challenges",
        "marks": 15
    },
    {
        "question": "\"Empowering women is the key to control population growth\". Discuss",
        "year": 2019,
        "concept": "Empowerment",
        "marks": 10
    },
    {
        "question": "Examine the role of 'Gig Economy' in the process of empowerment of women in India.",
        "year": 2021,
        "concept": "Work",
        "marks": 10
    }
];

module.exports = societyQuestions;
