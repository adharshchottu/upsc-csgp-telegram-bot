const economyQuestions = [
    {
        "question": "How did land reforms in some parts of the country help to improve the socio-economic conditions of marginal and small farmers?",
        "year": 2021,
        "concept": "Land Reforms",
        "marks": 10
    },
    {
        "question": "Distinguish between Capital Budget and Revenue Budget. Explain the components of both these Budgets.",
        "year": 2021,
        "concept": "Budgeting",
        "marks": 15
    },
    {
        "question": "Discuss how emerging technologies and globalisation contribute to money laundering. Elaborate measures to tackle the problem of money laundering both at national and international levels.",
        "year": 2021,
        "concept": "Money Laundering",
        "marks": 15
    },
    {
        "question": "Do you agree that the Indian economy has recently experienced V-shaped recovery? Give reasons in support of your answer. (Answer in 250 words)",
        "year": 2021,
        "concept": "Economic Recovery",
        "marks": 15
    },
    {
        "question": "\"Investment in infrastructure is essential for more rapid and inclusive economic growth.\" Discuss in the light of India's experience.",
        "year": 2021,
        "concept": "Infrastructure",
        "marks": 15
    },
    {
        "question": "Explain intra-generational and inter-generational issues of equity from the perspective of inclusive growth and sustainable development.",
        "year": 2020,
        "concept": "Inclusive Growth",
        "marks": 15
    },
    {
        "question": "Define potential GDP and explain its determinants. What are the factors that have been inhibiting India from realizing its potential GDP?",
        "year": 2020,
        "concept": "GDP",
        "marks": 15
    },
    {
        "question": "Explain the meaning of investment in an economy in terms of capital formation. Discuss the factors to be considered while designing a concession agreement between a public entity and a private entity.",
        "year": 2020,
        "concept": "Capital Formation",
        "marks": 15
    },
    {
        "question": "Explain the rationale behind the Goods and Services Tax (Compensation to States) Act of 2017. How has COVID-19 impacted the GST compensation fund and created new federal tensions?",
        "year": 2020,
        "concept": "GST",
        "marks": 15
    },
    {
        "question": "Enumerate the indirect taxes which have been subsumed in the goods and services tax (GST) in India. Also, comment on the revenue implications of the GST introduced in India since July 2017.",
        "year": 2019,
        "concept": "GST",
        "marks": 15
    },
    {
        "question": "Do you agree with the view that steady GDP growth and low inflation have left the Indian economy in good shape? Give reasons in support of your arguments.",
        "year": 2019,
        "concept": "Economic Growth",
        "marks": 15
    },
    {
        "question": "It is argued that the strategy of inclusive growth is intended to meet the objectives of inclusiveness and sustainability together. Comment on this statement.",
        "year": 2019,
        "concept": "Inclusive Growth",
        "marks": 10
    },
    {
        "question": "The public expenditure management is a challenge to the Government of India in the context of budget-making during the post-liberalization period. Clarify it.",
        "year": 2019,
        "concept": "Public Expenditure",
        "marks": 10
    },
    {
        "question": "\"Access to affordable, reliable, sustainable and modern energy is the sine qua non to achieve Sustainable Development Goals (SDGs)\".Comment on the progress made in India in this regard.",
        "year": 2018,
        "concept": "Energy",
        "marks": 15
    },
    {
        "question": "Comment on the important changes introduced in respect of the Long term Capital Gains Tax (LCGT) and Dividend Distribution Tax (DDT) in the Union Budget for 2018-2019.",
        "year": 2018,
        "concept": "Taxation",
        "marks": 10
    },
    {
        "question": "The China Pakistan Economic Corridor (CPEC) is viewed as a cardinal subset of China's larger 'One Belt One Road' initiative. Give a brief description of CPEC and enumerate the reasons why India has distanced itself from the same.",
        "year": 2018,
        "concept": "CPEC",
        "marks": 15
    },
    {
        "question": "How are the principles followed by NITI Aayog different from those followed by the erstwhile planning commission in India?",
        "year": 2018,
        "concept": "NITI Aayog",
        "marks": 10
    },
    {
        "question": "How would the recent phenomena of protectionism and currency manipulations in world trade effect macroeconomic stability of India?",
        "year": 2018,
        "concept": "Trade Policy",
        "marks": 15
    },
    {
        "question": "Among several factors for India's potential growth, the savings rate is the most effective one. Do you agree? What are the other factors available for growth potential? (Answer in 150 words)",
        "year": 2017,
        "concept": "Savings Rate",
        "marks": 10
    },
    {
        "question": "Account for the failure of the manufacturing sector in achieving the goal of labour-intensive exports rather than capital-intensive exports. Suggest measures for more labour-intensive rather than capital-intensive exports.",
        "year": 2017,
        "concept": "Manufacturing",
        "marks": 15
    },
    {
        "question": "Examine the developments of Airports in India through Joint Ventures under the Public-Private Partnership(PPP) model. What are the challenges faced by the authorities in this regard?",
        "year": 2017,
        "concept": "PPP",
        "marks": 15
    },
    {
        "question": "One of the intended objectives of Union Budget 2017-18 is to 'transform, energize and clean India'. Analyse the measures proposed in the Budget 2017-18 to achieve the objective.",
        "year": 2017,
        "concept": "Budget",
        "marks": 15
    },
    {
        "question": "\"Industrial growth rate has lagged behind in the overall growth of Gross-Domestic-Product(GDP) in the post-reform period\" Give reasons. How far the recent changes is Industrial Policy are capable of increasing the industrial growth rate?",
        "year": 2017,
        "concept": "Industrial Growth",
        "marks": 15
    },
    {
        "question": "What are the salient features of 'inclusive growth'? Has India been experiencing such a growth process? Analyze and suggest measures for inclusive growth.",
        "year": 2017,
        "concept": "Inclusive Growth",
        "marks": 15
    },
    {
        "question": "How globalization has led to the reduction of employment in the formal sector of the Indian economy? Is increased informalization detrimental to the development of the country?",
        "year": 2016,
        "concept": "Employment",
        "marks": 15
    },
    {
        "question": "Women empowerment in India needs gender budgeting. What are the requirements and status of gender budgeting in the Indian context?",
        "year": 2016,
        "concept": "Gender Budgeting",
        "marks": 10
    },
    {
        "question": "Pradhan Mantri Jan Dhan Yojana (PMJDY) is necessary for bringing the unbanked to the institutional finance fold. Do you agree with this for financial inclusion of the poor section of the Indian society? Give arguments to justify your opinion.",
        "year": 2016,
        "concept": "Financial Inclusion",
        "marks": 15
    },
    {
        "question": "What are 'Smart Cities'? Examine their relevance for urban development in India. Will it increase rural-urban differences? Give arguments for 'Smart Villages' in the light of PURA and RURBAN Mission.",
        "year": 2016,
        "concept": "Smart Cities",
        "marks": 15
    },
    {
        "question": "Justify the need for FDI for the development of the Indian economy. Why is there a gap between MOUs signed and actual FDIs? Suggest remedial steps to be taken for increasing actual FDIs in India.",
        "year": 2016,
        "concept": "FDI",
        "marks": 15
    },
    {
        "question": "Comment on the challenges for inclusive growth which include careless and useless manpower in the Indian context. Suggest measures to be taken for facing these challenges.",
        "year": 2016,
        "concept": "Inclusive Growth",
        "marks": 15
    },
    {
        "question": "The nature of economic growth in India is described as jobless growth. Do you agree with this view? Give arguments in favour of your answer.",
        "year": 2015,
        "concept": "Jobless Growth",
        "marks": 15
    },
    {
        "question": "In what way could replacement of price subsidy with Direct Benefit Transfer (DBT) change the scenario of subsidies in India? Discuss.",
        "year": 2015,
        "concept": "DBT",
        "marks": 15
    },
    {
        "question": "What are the impediments in marketing and supply chain management in the industry in India? Can e-commerce help in overcoming these bottlenecks?",
        "year": 2015,
        "concept": "Supply Chain",
        "marks": 15
    },
    {
        "question": "The craze for gold in Indians has led to a surge in import of gold in recent years and put pressure on the balance of payments and external value of the rupee. In view of this, examine the merits of the Gold Monetization Scheme.",
        "year": 2015,
        "concept": "Gold Import",
        "marks": 15
    },
    {
        "question": "\"Success of 'Make in India' programme depends on the success of 'Skill India' programme and radical labour reforms.\" Discuss with logical arguments.",
        "year": 2015,
        "concept": "Make in India",
        "marks": 15
    },
    {
        "question": "There is a clear acknowledgement that Special Economic Zones (SEZs) are a tool of industrial development, manufacturing and exports. Recognizing this potential, the whole instrumentality of SEZs requires augmentation. Discuss the issues plaguing the success of SEZs with respect to taxation, governing laws and administration.",
        "year": 2015,
        "concept": "SEZ",
        "marks": 15
    },
    {
        "question": "Normally countries shift from agriculture to industry and then later to services, but India shifted directly from agriculture to services. What are the reasons for the huge growth of services vis-a-vis the industry in the country? Can India become a developed country without a strong industrial base?",
        "year": 2014,
        "concept": "Service Sector",
        "marks": 15
    },
    {
        "question": "While we found India's demographic dividend, we ignore the dropping rates of employability. What are we missing while doing so? Where will the jobs that India desperately needs come from? Explain.",
        "year": 2014,
        "concept": "Demographic Dividend",
        "marks": 15
    },
    {
        "question": "The right to fair compensation and transparency land acquisition, rehabilitation and resettlement act, 2013 has come into effect from 1 January 2014. What implication would it have on industrialization and agriculture in India?",
        "year": 2014,
        "concept": "Land Acquisition",
        "marks": 15
    },
    {
        "question": "Capitalism has guided the world economy to unprecedented prosperity. However, it often encourages shortsightedness and contributes to the wide disparities between the rich and the poor. In this light, would it be correct to believe and adopt capitalism driving inclusive growth in India? Discuss.",
        "year": 2014,
        "concept": "Capitalism",
        "marks": 15
    },
    {
        "question": "Foreign direct investment in the defence sector is now said to be liberalized. What influence this is expected to have on Indian defence and economy in the short and long-run?",
        "year": 2014,
        "concept": "Defence FDI",
        "marks": 10
    },
    {
        "question": "Explain how private-public partnership agreements, in longer gestation infrastructure projects, can transfer unsuitable liabilities to the future. What arrangements need to be put in place to ensure that successive generations' capacities are not compromised?",
        "year": 2014,
        "concept": "PPP",
        "marks": 15
    },
    {
        "question": "National urban transport policy emphasizes on moving people instead of moving vehicles. Discuss critically the success of various strategies of the government in this regard.",
        "year": 2014,
        "concept": "Urban Transport",
        "marks": 15
    },
    {
        "question": "With consideration towards the strategy of inclusive growth, the new Companies Bill,2013 has indirectly made CSR a mandatory obligation. Discuss the challenges expected in its implementation in the right earnest. Also, discuss other provisions in the Bill and their implications. (200 words)",
        "year": 2013,
        "concept": "CSR",
        "marks": 15
    },
    {
        "question": "What were the reasons for the introduction of Fiscal Responsibility and Budget Management (FRBM) Act, 2013? Discuss critically its salient features and their effectiveness.",
        "year": 2013,
        "concept": "FRBM",
        "marks": 15
    },
    {
        "question": "What is the meaning of the term 'tax expenditure'? Taking the housing sector as an example, discuss how it influences the budgetary policies of the government.",
        "year": 2013,
        "concept": "Tax Expenditure",
        "marks": 10
    },
    {
        "question": "Examine the impact of liberalization on companies owned by Indians. Are they competing with the MNCs satisfactorily? Discuss.",
        "year": 2013,
        "concept": "Liberalization",
        "marks": 15
    },
    {
        "question": "Discuss the impact of FDI entry into the Multi-trade retail sector on supply chain management in the commodity trade pattern of the economy.",
        "year": 2013,
        "concept": "Retail FDI",
        "marks": 15
    },
    {
        "question": "Though India allowed Foreign Direct Investment (FDI) in what is called multi-brand retail through the joint venture route in September 2012, the FDI, even after a year, has not picked up. Discuss the reasons.",
        "year": 2013,
        "concept": "Retail FDI",
        "marks": 10
    },
    {
        "question": "Discuss the rationale for introducing the Goods and Services Tax (GST) in India. Bring out critically the reasons for the delay in roll out for its regime.",
        "year": 2013,
        "concept": "GST",
        "marks": 15
    },
    {
        "question": "Write a note on India's green energy corridor to alleviate the problem of conventional energy.",
        "year": 2013,
        "concept": "Green Energy",
        "marks": 10
    },
    {
        "question": "Adoption of the PPP model for infrastructure development of the country has not been free of criticism. Critically discuss the pros and cons of the model.",
        "year": 2013,
        "concept": "PPP",
        "marks": 15
    },
    {
        "question": "What do you understand about the Umpire Decision Review System in cricket? Discuss its various components. Explain how silicone tape on the edge of a bat may fool the system?",
        "year": 2013,
        "concept": "Technology",
        "marks": 10
    },
    {
        "question": "What do you understand about the Run-of-river hydroelectricity project? How is it different from any other hydroelectricity project?",
        "year": 2013,
        "concept": "Hydroelectricity",
        "marks": 10
    }
];

module.exports = economyQuestions;
