const statesDistrictsMap = new Map([
    ["Kerala", ["Malappuram", "Thiruvananthapuram", "Ernakulam", "Thrissur", "Kozhikode", "Palakkad", "Kannur", "Kollam", "Alappuzha", "Kottayam", "Idukki", "Pathanamthitta", "Wayanad", "Kasaragod"]],
    ["Tamil Nadu", ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Kanniyakumari", "Namakkal", "Perambalur", "Pudukottai", "Ramanathapuram", "Ranipet", "Salem", "Sivagangai", "Tenkasi", "Thanjavur", "Theni", "Thiruvallur", "Thiruvarur", "Thoothukudi", "Trichirappalli", "Thirunelveli", "Tirupathur", "Tiruppur", "Tiruvannamalai", "The Nilgiris", "Vellore", "Viluppuram", "Virudhunagar"]],
    ["Karnataka", ["Bagalkot", "Ballari", "Bangalore Rural", "Bangalore Urban", "Belagavi", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"]],
    ["Goa", ["North Goa", "South Goa"]],
    ["Andhra Pradesh", ["Anantapur", "Chittoor", "East Godavari", "Guntur", "YSR Kadapa", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"]],
    ["Telangana", ["Adilabad", "Bhadradri Kothagudem", "Hanumakonda", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal", "Yadadri Bhuvanagiri"]],
    ["Maharashtra", ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City District", "Mumbai Suburban District", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Yavatmal"]],
    ["Chhattisgarh", ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela - Pendra - Marwahi", "Janjgir–Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Khairagarh - Chhuikhadan - Gandai", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sakti", "Sukma", "Surajpur", "Surguja", "Manendragarh", "Mohla - Manpur", "Sarangarh"]],
    ["Odisha", ["Angul", "Balangir", "Bargarh", "Boudh", "Balasore", "Bhadrak", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"]],
    ["Gujarat", ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi (Vyara)", "Vadodara (Baroda)", "Valsad"]],
    ["Madhya Pradesh", ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Niwari", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"]],
    ["West Bengal", ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]],
    ["Jharkhand", ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"]],
    ["Mizoram", ["Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Saitual", "Serchhip"]],
    ["Tripura", ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sipahijala", "South Tripura", "Unakoti", "West Tripura"]],
    ["Rajasthan", ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"]],
    ["Manipur", ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Senapati", "Tamenglong", "Thoubal", "Ukhrul", "Kangpokpi", "Tengnoupal", "Pherzawl", "Noney", "Kamjong", "Jiribam", "Kakching"]],
    ["Uttar Pradesh", ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shrawasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"]],
    ["Assam", ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup Rural", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia"]],
    ["Bihar", ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Khagaria", "Kishanganj", "Kaimur", "Katihar", "Lakhisarai", "Madhubani", "Munger", "Madhepura", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Sheohar", "Sheikhpura", "Saran", "Sitamarhi", "Supaul", "Siwan", "Vaishali", "West Champaran"]],
    ["Meghalaya", ["East Garo Hills", "North Garo Hills", "South Garo Hills", "West Garo Hills", "South West Garo Hills", "East Khasi Hills", "West Jaintia Hills", "East Jaintia Hills", "South West Khasi Hills", "West Khasi Hills", "Eastern West Khasi Hills", "Ri-Bhoi"]],
    ["Nagaland", ["Chümoukedima", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Niuland", "Noklak", "Peren", "Phek", "Shamator", "Tuensang", "Tseminyü", "Wokha", "Zünheboto"]],
    ["Arunachal Pradesh", ["Anjaw", "Changlang", "East Kameng", "East Siang", "Itanagar", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Pakke-Kessang", "Papum Pare", "Shi-Yomi", "Tawang", "Tirap", "Upper Dibang Valley", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang", "Ziro"]],
    ["Sikkim", ["Gangtok", "Namchi", "Mangan", "Soreng", "Pakyong", "Gyalshing(Geyzing)"]],
    ["Haryana", ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"]],
    ["Punjab", ["Amritsar", "Barnala", "Bathinda", "Fazilka", "Faridkot", "Fatehgarh Sahib", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Nawan Shahr", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Tarn Taran", "Malerkotla"]],
    ["Uttarkhand", ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"]],
    ["Himachal Pradesh", ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"]]
]);

const UTdistrictsMap = new Map([
    ["Dadra and Nagar Haveli and Daman & Diu", ["Dadra and Nagar Haveli", "Daman", "Diu"]],
    ["Jammu & Kashmir", ["Jammu", "Kathua", "Samba", "Udhampur", "Reasi", "Rajouri", "Poonch", "Ramban", "Doda", "Kishtwar", "Srinagar", "Anantnag", "Kulgam", "Pulwama", "Shopian", "Budgam", "Ganderbal", "Bandipora", "Baramulla", "Kupwara"]],
    ["Ladakh", ["Leh", "Kargil"]],
    ["Puducherry", ["Puducherry", "Karaikal", "Yanam", "Mahé"]],
    ["Lakshadweep", ["Agatti", "Amini", "Andrott", "Bitra", "Chetlat", "Kadmat", "Kalpeni", "Kavaratti", "Kiltan", "Minicoy"]],
    ["Andaman and Nicobar", ["Diglipur", "Mayabunder", "Rangat", "Port Blair", "Ferrargunj", "Little Andaman", "Bambooflat", "Prothrapur", "Car Nicobar", "Teressa", "Katchal", "Nancowry", "Kamorta", "Great Nicobar", "Little Nicobar"]]
]);

const statesMap = new Map([
    ["Kerala",
        ["Karnataka", "Tamil Nadu", "Arabian Sea", "Puducherry"]
    ],
    ["Tamil Nadu", ["Kerala", "Karnataka", "Andra Pradesh", "Bay of Bengal", "Arabian Sea", "Indian Ocean", "Puducherry"]
    ],
    ["Karnataka", ["Kerala", "Tamil Nadu", "Goa", "Telangana", "Andra Pradesh", "Maharastra", "Arabian Sea"]
    ],
    ["Goa", ["Maharastra", "Karnataka", "Arabian Sea"]],
    ["Andra Pradesh", ["Tamil Nadu", "Karnataka", "Telangana", "Chattisgarh", "Odisha", "Bay of Bengal", "Puducherry"]
    ],
    ["Telangana", ["Karnataka", "Maharastra", "Chattisgarh", "Andra Pradesh"]
    ],
    ["Maharastra", ["Goa", "Karnataka", "Telangana", "Chattisgarh", "Madhya Pradesh", "Gujarat", "Arabian Sea", "Dadra and Nagar Haveli and Daman & Diu"]
    ],
    ["Chattisgarh", ["Telangana", "Maharastra", "Madhya Pradesh", "Uttar Pradesh", "Jharkhand", "Odisha", "Andra Pradesh"]
    ],
    ["Odisha", ["Chattisgarh", "Jharkhand", "West Bengal", "Andra Pradesh", "Bay of Bengal"]
    ],
    ["Gujarat", ["Maharastra", "Madhya Pradesh", "Rajasthan", "Arabian Sea", "Pakistan", "Dadra and Nagar Haveli and Daman & Diu"]
    ],
    ["Madhya Pradesh", ["Maharastra", "Gujarat", "Rajasthan", "Uttar Pradesh", "Chattisgarh"]
    ],
    ["West Bengal", ["Odisha", "Jharkhand", "Bihar", "Sikkim", "Assam", "Bay of Bengal", "Nepal", "Bhutan", "Bangladesh"]
    ],
    ["Jharkhand", ["Odisha", "Bihar", "West Bengal", "Uttar Pradesh", "Chattisgarh"]
    ],
    ["Mizoram", ["Assam", "Tripura", "Manipur", "Bangladesh", "Myanmar"]
    ],
    ["Tripura", ["Assam", "Mizoram", "Bangladesh"]
    ],
    ["Rajasthan", ["Gujarat", "Madhya Pradesh", "Uttar Pradesh", "Haryana", "Punjab", "Pakistan"]
    ],
    ["Manipur", ["Mizoram", "Assam", "Nagaland", "Myanmar"]
    ],
    ["Uttar Pradesh", ["Bihar", "Jharkhand", "Chattisgarh", "Madhya Pradesh", "Rajasthan", "Haryana", "Uttarkhand", "Himachal Pradesh", "Nepal", "NCR"]
    ],
    ["Assam", ["West Bengal", "Meghalaya", "Arunachal Pradesh", "Nagaland", "Manipur", "Mizoram", "Tripura", "Bangladesh", "Bhutan"]
    ],
    ["Bihar", ["West Bengal", "Jharkhand", "Uttar Pradesh", "Nepal"]
    ],
    ["Meghalaya", ["Assam", "Bangladesh"]
    ],
    ["Nagaland", ["Arunachal Pradesh", "Assam", "Manipur", "Myanmar"]
    ],
    ["Arunachal Pradesh", ["Assam", "Nagaland", "Myanmar", "China", "Bhutan"]
    ],
    ["Sikkim", ["West Bengal", "Nepal", "China", "Bhutan"]
    ],
    ["Haryana", ["Uttar Pradesh", "Uttarkhand", "Himachal Pradesh", "Punjab", "Rajasthan", "Chandigarh", "NCR"]
    ],
    ["Punjab", ["Haryana", "Rajasthan", "Himachal Pradesh", "Chandigarh", "Jammu & Kashmir", "Pakistan"]
    ],
    ["Uttarkhand", ["Haryana", "Himachal Pradesh", "Uttar Pradesh", "China", "Nepal"]
    ],
    ["Himachal Pradesh", ["Haryana", "Uttarkhand", "Uttar Pradesh", "Punjab", "Ladakh", "China"]
    ]
])

const utsMap = new Map([
    ["Andaman and Nicobar", ["Bay of Bengal"]],
    ["Dadra and Nagar Haveli and Daman & Diu", ["Arabian Sea", "Gujarat", "Maharastra"]],
    ["Jammu & Kashmir", ["Pakistan", "Punjab", "Himachal Pradesh"]],
    ["Ladakh", ["Pakistan", "Afghanistan", "China", "Himachal Pradesh"]],
    ["Puducherry", ["Kerala", "Tamil Nadu", "Andra Pradesh", "Arabian Sea", "Bay of Bengal"]],
    ["Lakshadweep", ["Arabian Sea"]],
    ["NCR", ["Uttar Pradesh", "Haryana"]],
    ["Chandigarh", ["Punjab", "Haryana"]]
])

const countriesMap = new Map([
    ["Pakistan", ["Arabian Sea", "Gujarat", "Rajasthan", "Punjab", "Jammu & Kashmir", "Ladakh"]],
    ["China", ["Himachal Pradesh", "Uttarkhand", "Sikkim", "Arunachal Pradesh", "Ladakh"]],
    ["Nepal", ["Uttarkhand", "Sikkim", "Uttar Pradesh", "Bihar", "West Bengal"]],
    ["Bhutan", ["Sikkim", "West Bengal", "Assam", "Arunachal Pradesh"]],
    ["Bangladesh", ["West Bengal", "Assam", "Meghalaya", "Tripura", "Mizoram", "Bay of Bengal"]],
    ["Myanmar", ["Mizoram", "Manipur", "Nagaland", "Arunachal Pradesh", "Bay of Bengal"]]
])

module.exports = { UTdistrictsMap, statesDistrictsMap, statesMap, utsMap, countriesMap }