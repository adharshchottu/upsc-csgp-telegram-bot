const governanceQuestions = [
    {
        "question": "To what extent, in your view, the Parliament is able to ensure accountability of the executive in India?",
        "year": 2021,
        "concept": "Parliamentary Accountability",
        "marks": 15
    },
    {
        "question": "\"Pressure groups play a vital role in influencing public policy in making in India.\" Explain how the business associations contribute to public policies.",
        "year": 2021,
        "concept": "Pressure Groups",
        "marks": 10
    },
    {
        "question": "The jurisdiction of the Central Bureau of Investigation (CBI) regarding lodging an FIR and conducting a probe within a particular state is being questioned by various States. However, the power of the States to withhold consent to the CBI is not absolute. Explain with special reference to the federal character of India.",
        "year": 2021,
        "concept": "CBI Jurisdiction",
        "marks": 15
    },
    {
        "question": "Do Department-related Parliamentary Standing Committees keep the administration on its toes and inspire reverence for parliamentary control? Evaluate the working of such committees with suitable examples.",
        "year": 2021,
        "concept": "Parliamentary Committees",
        "marks": 15
    },
    {
        "question": "Can civil society and Non-Government Organisations present an alternative model of public service delivery to benefit the common citizen? Discuss the challenges of this alternative method.",
        "year": 2021,
        "concept": "Civil Society",
        "marks": 15
    },
    {
        "question": "\"Institutional quality is a crucial driver of economic performance\". In this context suggest reforms in Civil Service for strengthening democracy.",
        "year": 2020,
        "concept": "Civil Service Reforms",
        "marks": 15
    },
    {
        "question": "\"The emergence of Fourth Industrial Revolution (Digital Revolution) has initiated e-Governance as an integral part of government\". Discuss.",
        "year": 2020,
        "concept": "E-Governance",
        "marks": 15
    },
    {
        "question": "What are the methods used by the farmer's organizations to influence the policy-makers in India and how effective are these methods?",
        "year": 2019,
        "concept": "Farmers Organizations",
        "marks": 10
    },
    {
        "question": "Implementation of Information and Communication Technology (ICT) based projects/programmes usually suffers in terms of certain vital factors. Identify these factors and suggest measures for their effective implementation.",
        "year": 2019,
        "concept": "ICT Implementation",
        "marks": 10
    },
    {
        "question": "On what grounds a people's representative can be disqualified under the representation of people act, 1951? Also, mention the remedies available to such a person against his disqualification.",
        "year": 2019,
        "concept": "Disqualification",
        "marks": 10
    },
    {
        "question": "'In the context of the neo-liberal paradigm of developmental planning, multi-level planning is expected to make operations cost-effective and remove many implementation blockages'- Discuss",
        "year": 2019,
        "concept": "Multi-level Planning",
        "marks": 15
    },
    {
        "question": "The need for cooperation among various service sectors has been an inherent component of development discourse. Partnership bridges the gap among the sectors. It also sets in motion a culture of 'collaboration' and 'team spirit'. In the light of statements above examine India's development process.",
        "year": 2019,
        "concept": "Inter-sectoral Cooperation",
        "marks": 15
    },
    {
        "question": "Performance of welfare schemes that are implemented for vulnerable sections is not so effective due to the absence of their awareness and active involvement at all stages of the policy process. Discuss",
        "year": 2019,
        "concept": "Welfare Schemes",
        "marks": 15
    },
    {
        "question": "\"Policy contradictions among various competing sectors and stakeholders have resulted in inadequate protection and prevention of degradation to the environment.\" Comment with relevant illustrations.",
        "year": 2018,
        "concept": "Policy Contradictions",
        "marks": 15
    },
    {
        "question": "E-governance is not only about utilization of the power of new technology, but also much about the critical importance of the 'use value' of information.",
        "year": 2018,
        "concept": "E-Governance",
        "marks": 10
    },
    {
        "question": "How far do you agree with the view that the focus on lack of availability of food as the main cause of hunger takes the attention away from ineffective human development policies in India?",
        "year": 2018,
        "concept": "Human Development",
        "marks": 15
    },
    {
        "question": "'Simultaneous election to the Lok Sabha and the State Assemblies will limit the amount of time and money spent in electioneering but it will reduce the government's accountability to the people' Discuss. (150 words)",
        "year": 2017,
        "concept": "Simultaneous Elections",
        "marks": 10
    },
    {
        "question": "'To ensure effective implementation of policies addressing water, sanitation and hygiene needs, the identification of beneficiary segments is to be synchronized with the anticipated outcomes' Examine the statement in the context of the WASH scheme. (150 words)",
        "year": 2017,
        "concept": "WASH Scheme",
        "marks": 10
    },
    {
        "question": "Does the Rights of Persons with Disabilities Act, 2016 ensure an effective mechanism for empowerment and inclusion of the intended beneficiaries in the society? Discuss (150 words)",
        "year": 2017,
        "concept": "Disability Rights",
        "marks": 10
    },
    {
        "question": "Hunger and Poverty are the biggest challenges for good governance in India still today. Evaluate how far successive governments have progressed in dealing with these humongous problems. Suggest measures for improvement. (150 words)",
        "year": 2017,
        "concept": "Poverty Alleviation",
        "marks": 10
    },
    {
        "question": "'Poverty Alleviation Programmes in India remain mere show pieces until and unless they are backed by political will'. Discuss with reference to the performance of the major poverty alleviation programmes in India. (250 words)",
        "year": 2017,
        "concept": "Poverty Alleviation",
        "marks": 15
    },
    {
        "question": "\"In the Indian governance system, the role of non-state actors has been only marginal.\" Critically examine this statement.",
        "year": 2016,
        "concept": "Non-state Actors",
        "marks": 15
    },
    {
        "question": "\"Effectiveness of the government system at various levels and people's participation in the governance system are interdependent\" Discuss their relationship in the context of India.",
        "year": 2016,
        "concept": "People's Participation",
        "marks": 15
    },
    {
        "question": "Has the Indian governmental system responded adequately to the demands of Liberalization, Privatization and Globalization started in 1991? What can the government do to be responsive to this important change?",
        "year": 2016,
        "concept": "LPG Reforms",
        "marks": 15
    },
    {
        "question": "Examine the main provisions of the National Child Policy and throw light on the status of its implementation.",
        "year": 2016,
        "concept": "National Child Policy",
        "marks": 10
    },
    {
        "question": "Khap Panchayats have been in the news for functioning as extra-constitutional authorities, often delivering pronouncements amounting to human rights violations. Discuss critically the actions taken by the legislative, executive and the judiciary to set the things right in this regard.",
        "year": 2015,
        "concept": "Khap Panchayats",
        "marks": 15
    },
    {
        "question": "Examine critically the recent changes in the rules governing foreign funding of NGOs under the Foreign Contribution (Regulation) Act (FCRA), 1976.",
        "year": 2015,
        "concept": "FCRA",
        "marks": 10
    },
    {
        "question": "The Self-Help Group (SHG) Bank Linkage Programme (SBLP), which is India's own innovation, has proved to be one of the most effective poverty alleviation and women empowerment programmes. Elucidate.",
        "year": 2015,
        "concept": "SHG Programme",
        "marks": 15
    },
    {
        "question": "In the light of the Satyam Scandal (2009), discuss the changes brought in corporate governance to ensure transparency, accountability.",
        "year": 2015,
        "concept": "Corporate Governance",
        "marks": 10
    },
    {
        "question": "\"For achieving the desired objectives, it is necessary to ensure that the regulatory institutions remain independent and autonomous.\" Discuss in the light of the experiences in the recent past.",
        "year": 2015,
        "concept": "Regulatory Independence",
        "marks": 15
    },
    {
        "question": "Though 100 percent FDI is already allowed in non-news media like a trade publication and general entertainment channel, the government is mulling over the proposal for increased FDI in news media for quite some time. What difference would an increase in FDI make? Critically evaluate the pros and cons.",
        "year": 2014,
        "concept": "FDI in Media",
        "marks": 15
    },
    {
        "question": "The setting up of a Rail Tariff Authority to regulate fares will subject the cash strapped Indian Railways to demand subsidy for obligation to operate non-profitable routes and services. Taking into account the experience in the power sector, discuss if the proposed reform is expected to benefit the consumers, the Indian Railways or the private container operators.",
        "year": 2014,
        "concept": "Rail Tariff Authority",
        "marks": 15
    },
    {
        "question": "National Human Rights Commission (NHRC) in India can be most effective when its tasks are adequately supported by other mechanisms that ensure the accountability of a government. In light of above observation assess the role of NHRC as an effective complement to the judiciary and other institutions in promoting and protecting human rights standards.",
        "year": 2014,
        "concept": "NHRC",
        "marks": 15
    },
    {
        "question": "Do government's schemes for up-lifting vulnerable and backward communities by protecting required social resources for them, lead to their exclusion in establishing businesses in urban economies?",
        "year": 2014,
        "concept": "Social Protection",
        "marks": 10
    },
    {
        "question": "Has the Cadre based Civil Services Organization been the cause of slow in India? Critically examine.",
        "year": 2014,
        "concept": "Civil Services",
        "marks": 15
    },
    {
        "question": "Two parallel run schemes of the Government, viz the Adhar card and NPR, one of voluntary and the other as compulsory, have led to debates at national levels and also litigations. On merits , discuss whether or not both schemes need run concurrently. Analyse the potential of the schemes to achieve development benefits and equitable growth.",
        "year": 2014,
        "concept": "Aadhaar vs NPR",
        "marks": 15
    },
    {
        "question": "Many State Governments further bifurcate geographical administrative areas like Districts and Talukas for better governance. In light of the above, can it also be justified that more number of smaller States would bring in effective governance at the State level? Discuss.",
        "year": 2013,
        "concept": "Administrative Bifurcation",
        "marks": 15
    },
    {
        "question": "The product diversification of financial institutions and insurance companies, resulting in overlapping of products and services strengthens the case for the merger of the two regulatory agencies, namely SEBI and IRDA. Justify.",
        "year": 2013,
        "concept": "Regulatory Merger",
        "marks": 10
    },
    {
        "question": "The concept of Mid-Day Meal (MDM) scheme is almost a century old in India with early beginnings in Madras Presidency in pre-independent India. The scheme has again been given impetus in most states in the last two decades. Critically examine its twin objectives, latest mandates and success.",
        "year": 2013,
        "concept": "Mid-Day Meal",
        "marks": 15
    },
    {
        "question": "The Central Government frequently complains of the poor performance of the State Governments in eradicating suffering of the vulnerable sections of the society. Restructuring of Centrally sponsored schemes across the sectors for ameliorating the cause of vulnerable sections of population aims at providing flexibility to the States in better implementation. Critically evaluate.",
        "year": 2013,
        "concept": "Centrally Sponsored Schemes",
        "marks": 15
    },
    {
        "question": "Electronic cash transfer system for the welfare schemes is an ambitious project to minimize corruption, eliminate wastage and facilitate reforms. Comment.",
        "year": 2013,
        "concept": "Electronic Cash Transfer",
        "marks": 10
    }
];

module.exports = governanceQuestions;