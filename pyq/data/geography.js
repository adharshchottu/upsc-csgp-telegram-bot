const geographyQuestions = [
    {
        "question": "Bring out the causes for more frequent landslides in the Himalayas than in Western Ghats.",
        "year": 2013,
        "concept": "Landslide",
        "marks": 5
    },
    {
        "question": "Major hot deserts in northern hemisphere are located between 20-30 degree north and on the western side of the continents. Why?",
        "year": 2013,
        "concept": "Phenomena",
        "marks": 10
    },
    {
        "question": "There is no formation of deltas by rivers of the Western Ghat. Why?",
        "year": 2013,
        "concept": "Phenomena",
        "marks": 5
    },
    {
        "question": "The recent cyclone on the east coast of India was called \"Phailin\". How are the tropical cyclones named across the world?",
        "year": 2013,
        "concept": "Cyclone",
        "marks": 5
    },
    {
        "question": "What do you understand by the theory of continental drift? Discuss the prominent evidences in its support.",
        "year": 2013,
        "concept": "Concept",
        "marks": 5
    },
    {
        "question": "Why are the world's fold mountain systems located along the margins of continents? Bring out the association between the global distribution of Fold Mountains and the earthquakes and volcanoes.",
        "year": 2014,
        "concept": "Phenomena",
        "marks": 10
    },
    {
        "question": "Tropical cyclones are largely confined to South China Sea, Bay of Bengal and Gulf of Mexico. Why?",
        "year": 2014,
        "concept": "Cyclone",
        "marks": 10
    },
    {
        "question": "Explain the formation of thousands of islands in Indonesian and Philippines archipelagos.",
        "year": 2014,
        "concept": "Phenomena",
        "marks": 10
    },
    {
        "question": "\"The Himalayas are highly prone to landslides.\" Discuss the causes and suggest suitable measures of mitigation.",
        "year": 2016,
        "concept": "Landslide",
        "marks": 12.5
    },
    {
        "question": "How does the Juno Mission of NASA help to understand the origin and evolution of the Earth?",
        "year": 2017,
        "concept": "Concept",
        "marks": 10
    },
    {
        "question": "Define mantle plume and explain its role in plate tectonics.",
        "year": 2018,
        "concept": "Concept",
        "marks": 10
    },
    {
        "question": "Why is Indian Regional Navigational Satellite System (IRNSS) needed? How does it help in navigation?",
        "year": 2018,
        "concept": "Technology",
        "marks": 10
    },
    {
        "question": "The process of desertification does not have climatic boundaries. Justify with examples.",
        "year": 2020,
        "concept": "Concept",
        "marks": 10
    },
    {
        "question": "Discuss the geophysical characteristics of Circum-Pacific Zone.",
        "year": 2020,
        "concept": "Features",
        "marks": 10
    },
    {
        "question": "Mention the global occurrence of volcanic eruptions in 2021 and their impact on regional environment.",
        "year": 2021,
        "concept": "Volcano",
        "marks": 10
    },
    {
        "question": "Why is India considered as a subcontinent? Elaborate your answer",
        "year": 2021,
        "concept": "Concept",
        "marks": 10
    },
    {
        "question": "Differentiate the causes of landslides in the Himalayan region and Western Ghats.",
        "year": 2021,
        "concept": "Landslide",
        "marks": 10
    },
    {
        "question": "Briefly mention the alignment of major mountain ranges of the world and explain their impact on local weather conditions with examples.",
        "year": 2021,
        "concept": "Features",
        "marks": 15
    },
    {
        "question": "Describe the characteristics and types of primary rocks.",
        "year": 2022,
        "concept": "Concept",
        "marks": 10
    },
    {
        "question": "Discuss the meaning of color-coded weather warnings for cyclone-prone areas given by the India Meteorological Department.",
        "year": 2022,
        "concept": "Cyclone",
        "marks": 10
    },
    {
        "question": "The troposphere is a very significant atmospheric layer that determines weather processes. How ?",
        "year": 2022,
        "concept": "Concept",
        "marks": 15
    },
    {
        "question": "What do you understand by the phenomenon of temperature inversion in meteorology? How does it affect the weather and the habitants of the place?",
        "year": 2013,
        "concept": "Global Warming",
        "marks": 5
    },
    {
        "question": "Bring out the causes for the formation of heat islands in the urban habitat of the world.",
        "year": 2013,
        "concept": "Global Warming",
        "marks": 5
    },
    {
        "question": "Bring out the relationship between the shrinking Himalayan glaciers and the symptoms of climate change in the Indian sub-continent.",
        "year": 2014,
        "concept": "Global Warming",
        "marks": 10
    },
    {
        "question": "Most of the unusual climatic happenings are explained as an outcome of the El-Nino effect. Do you agree?",
        "year": 2014,
        "concept": "Concept",
        "marks": 10
    },
    {
        "question": "How far do you agree that the behavior of the Indian monsoon has been changing due to humanizing landscapes? Discuss.",
        "year": 2015,
        "concept": "Monsoon",
        "marks": 12.5
    },
    {
        "question": "Discuss the concept of air mass and explain its role in macro-climatic changes.",
        "year": 2016,
        "concept": "Concept",
        "marks": 12.5
    },
    {
        "question": "What characteristics can be assigned to monsoon climate that succeeds in feeding more than 50 percent of the world population residing in Monsoon Asia?",
        "year": 2017,
        "concept": "Monsoon",
        "marks": 15
    },
    {
        "question": "In what way can flood be converted into a sustainable source of irrigation and all-weather inland navigation in India?",
        "year": 2017,
        "concept": "Flood",
        "marks": 15
    },
    {
        "question": "Account for variations in oceanic salinity and discuss its multi-dimensional effects.",
        "year": 2017,
        "concept": "Concept",
        "marks": 15
    },
    {
        "question": "How does the cryosphere affect global climate?",
        "year": 2017,
        "concept": "Concept",
        "marks": 10
    },
    {
        "question": "Mention the advantages of the cultivation of pulse because of which the year 2016 was declared as the International Year of Pulses by the United Nations.",
        "year": 2017,
        "concept": "Effect",
        "marks": 10
    },
    {
        "question": "In spite of adverse environmental impact, coal mining is still inevitable for development.\" Discuss.",
        "year": 2017,
        "concept": "Coal Mining",
        "marks": 10
    },
    {
        "question": "What are the consequences of spreading of 'Dead Zones' on marine ecosystem?",
        "year": 2018,
        "concept": "Concept",
        "marks": 10
    },
    {
        "question": "What is water stress? How and why does it differ regionally in India?",
        "year": 2019,
        "concept": "Water Resource",
        "marks": 15
    },
    {
        "question": "How can the mountain ecosystem be restored from the negative impact of development initiatives and tourism?",
        "year": 2019,
        "concept": "Tourism",
        "marks": 15
    },
    {
        "question": "Discuss the causes of depletion of mangroves and explain their importance in maintaining coastal ecology.",
        "year": 2019,
        "concept": "Mangroves",
        "marks": 10
    },
    {
        "question": "How do ocean currents and water masses differ in their impacts on marine life and the coastal environment? Give suitable examples?",
        "year": 2019,
        "concept": "Marine life",
        "marks": 15
    },
    {
        "question": "Assess the impact of global warming on coral life system with examples.",
        "year": 2019,
        "concept": "Marine life",
        "marks": 10
    },
    {
        "question": "How will the meeting of Himalayan glaciers have a far-reaching impact on the water resources of India?",
        "year": 2020,
        "concept": "Water Resource",
        "marks": 10
    },
    {
        "question": "What are the environmental implications of the reclamation of water bodies into urban land use? explain with examples?",
        "year": 2021,
        "concept": "Water Resource",
        "marks": 10
    },
    {
        "question": "How do the melting of Arctic ice and glaciers of the Antarctic differently affect the weather patterns and human activities on earth? Explain.",
        "year": 2021,
        "concept": "Global Warming",
        "marks": 15
    },
    {
        "question": "It is said the India has substantial reserves of shale oil and gas, which can feed the needs of country for quarter century. However, tapping of the resources doesn't appear to be high on the agenda. Discuss critically the availability and issues involved.",
        "year": 2013,
        "concept": "Oil",
        "marks": 10
    },
    {
        "question": "With growing scarcity of fossil fuels, the atomic energy is gaining more and more significance in India. Discuss the availability of raw material required for the generation of atomic energy in India and in the world.",
        "year": 2013,
        "concept": "Fuel",
        "marks": 10
    },
    {
        "question": "How does India see its place in the economic space of rising natural resource rich Africa?",
        "year": 2014,
        "concept": "Region",
        "marks": 10
    },
    {
        "question": "Critically evaluate the various resources of the oceans which can be harnessed to meet the resource crisis in the world.",
        "year": 2014,
        "concept": "Resources",
        "marks": 10
    },
    {
        "question": "The states of Jammu and Kashmir, Himachal Pradesh and Uttarakhand reaching the limits of their ecological carrying capacity due to tourism. Critically evaluate.",
        "year": 2015,
        "concept": "Tourism",
        "marks": 12.5
    },
    {
        "question": "India is well endowed with fresh water resources. Critically examine why it still suffers from water scarcity.",
        "year": 2015,
        "concept": "Water",
        "marks": 12.5
    },
    {
        "question": "What are the economic significances of discovery of oil in Arctic Sea and its possible environmental consequences?",
        "year": 2015,
        "concept": "Oil",
        "marks": 12.5
    },
    {
        "question": "In what way micro-watershed Development projects help in water conservation in drought prone and semi-arid regions of India.",
        "year": 2016,
        "concept": "Water",
        "marks": 12.5
    },
    {
        "question": "Enumerate the problems and prospects of inland water transport in India.",
        "year": 2016,
        "concept": "Water",
        "marks": 12.5
    },
    {
        "question": "Present an account of the Indus Water Treaty and examine its ecological, economic and political implications in the context of changing bilateral relations.",
        "year": 2016,
        "concept": "Water",
        "marks": 12.5
    },
    {
        "question": "South China Sea has assumed great geopolitical significance in the present context. Comment.",
        "year": 2016,
        "concept": "Region",
        "marks": 12.5
    },
    {
        "question": "The effective management of land and water resources will drastically reduce the human miseries. Explain",
        "year": 2016,
        "concept": "Water",
        "marks": 12.5
    },
    {
        "question": "Why is India taking keen interest in resources of Arctic Region?",
        "year": 2018,
        "concept": "Region",
        "marks": 10
    },
    {
        "question": "Can the strategy of regional-resource based manufacturing help in promoting employment in India?",
        "year": 2019,
        "concept": "Manufacturing",
        "marks": 10
    },
    {
        "question": "Examine the status of forest resources of India and its resultant impact on climate change.",
        "year": 2020,
        "concept": "Forest",
        "marks": 15
    },
    {
        "question": "India has immense potential of solar energy though there are regional variations in its development. Elaborate.",
        "year": 2020,
        "concept": "Solar",
        "marks": 15
    },
    {
        "question": "The interlinking of rivers can provide viable solutions to the multi-dimensional inter-related problems of droughts, floods and interrupted navigation. Critically examine.",
        "year": 2020,
        "concept": "Water",
        "marks": 15
    },
    {
        "question": "Discuss the multidimensional implications of uneven distribution of mineral oil in the world.",
        "year": 2021,
        "concept": "Oil",
        "marks": 15
    },
    {
        "question": "Discuss the natural resource potentials of Deccan Trap'.",
        "year": 2022,
        "concept": "Region",
        "marks": 10
    },
    {
        "question": "Examine the potential of wind energy in India and explain the reasons for their limited spatial spread.",
        "year": 2022,
        "concept": "Wind",
        "marks": 10
    },
    {
        "question": "Describing the distribution of rubber producing countries, indicate the major environmental issues faced by them.",
        "year": 2022,
        "concept": "Rubber",
        "marks": 15
    },
    {
        "question": "Analyze the factors for highly decentralized cotton textile industry in India.",
        "year": 2013,
        "concept": "Cotton",
        "marks": 5
    },
    {
        "question": "Do you agree that there is a growing trend of opening new sugar mills in the Southern states of India? Discuss with justification",
        "year": 2013,
        "concept": "Sugar",
        "marks": 5
    },
    {
        "question": "Why did the Green Revolution in India virtually by-pass the eastern region despite fertile soil and good availability of water?",
        "year": 2014,
        "concept": "GR",
        "marks": 10
    },
    {
        "question": "Account for the change in the spatial pattern of the Iron and Steel industry in the world.",
        "year": 2014,
        "concept": "Iron and steel",
        "marks": 10
    },
    {
        "question": "Whereas the British planters had developed tea gardens all along the Shivaliks and Lesser Himalayas from Assam to Himachal Pradesh, in effect they did not succeed beyond the Darjeeling area. Explain.",
        "year": 2014,
        "concept": "Tea",
        "marks": 10
    },
    {
        "question": "Explain the factors responsible for the origin of ocean currents. How do they influence regional climates, fishing and navigation?",
        "year": 2015,
        "concept": "Fishing",
        "marks": 12.5
    },
    {
        "question": "Petroleum refineries are not necessarily located nearer to crude oil producing areas, particularly in many of the developing countries. Explain its implications.",
        "year": 2017,
        "concept": "Oil",
        "marks": 15
    },
    {
        "question": "What is the significance of Industrial Corridors in India? Identify industrial corridors, explain their main characteristics.",
        "year": 2018,
        "concept": "Region",
        "marks": 15
    },
    {
        "question": "Define blue revolution, explain the problems and strategies for pisciculture development in India.",
        "year": 2018,
        "concept": "BR",
        "marks": 15
    },
    {
        "question": "Discuss the factors for localization of agro-based food processing industries of North-West India.",
        "year": 2019,
        "concept": "Agro",
        "marks": 10
    },
    {
        "question": "Account for the present location of iron and steel industries away from the source of raw material, by giving examples.",
        "year": 2020,
        "concept": "Iron and steel",
        "marks": 10
    },
    {
        "question": "Despite India being one of the countries of the Gondwanaland, its mining industry contributes much less to its Gross Domestic Product (GDP) in percentage. Discuss.",
        "year": 2021,
        "concept": "Region",
        "marks": 10
    },
    {
        "question": "What are the forces that influence ocean currents? Describe their role in fishing Industry of the world.",
        "year": 2022,
        "concept": "Fishing",
        "marks": 15
    },
    {
        "question": "Mention the significance of straits and isthmus in international trade.",
        "year": 2022,
        "concept": "Region",
        "marks": 15
    }
];

module.exports = geographyQuestions;