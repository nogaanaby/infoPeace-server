import fs from 'fs';
import { faker } from '@faker-js/faker';

const countries = [
    { name: 'Israel', cities: ['Jerusalem', 'Tel Aviv', 'Haifa', 'Beersheba'], coordinates: [[31.7683, 35.2137], [32.0853, 34.7818], [32.7940, 34.9896], [31.2520, 34.7915]] },
    { name: 'Egypt', cities: ['Cairo', 'Alexandria', 'Giza', 'Sharm El Sheikh'], coordinates: [[30.0444, 31.2357], [31.2001, 29.9187], [30.0131, 31.2089], [27.9158, 34.3299]] },
    { name: 'Jordan', cities: ['Amman', 'Zarqa', 'Irbid', 'Aqaba'], coordinates: [[31.9454, 35.9284], [32.0833, 36.1000], [32.5569, 35.8475], [29.5267, 35.0078]] },
    { name: 'Lebanon', cities: ['Beirut', 'Tripoli', 'Sidon'], coordinates: [[33.8938, 35.5018], [34.4333, 35.8333], [33.5575, 35.3722]] },
    { name: 'Syria', cities: ['Damascus', 'Aleppo', 'Homs'], coordinates: [[33.5138, 36.2765], [36.2021, 37.1343], [34.7324, 36.7138]] },
    { name: 'Iraq', cities: ['Baghdad', 'Basra', 'Mosul'], coordinates: [[33.3152, 44.3661], [30.5085, 47.7804], [36.3456, 43.1189]] },
    { name: 'Saudi Arabia', cities: ['Riyadh', 'Jeddah', 'Mecca'], coordinates: [[24.7136, 46.6753], [21.4858, 39.1925], [21.3891, 39.8579]] },
    { name: 'United Arab Emirates', cities: ['Abu Dhabi', 'Dubai', 'Sharjah'], coordinates: [[24.4539, 54.3773], [25.276987, 55.296249], [25.3463, 55.4209]] },
    { name: 'Qatar', cities: ['Doha', 'Al Rayyan', 'Umm Salal'], coordinates: [[25.276987, 51.520008], [25.2919, 51.4244], [25.4169, 51.4039]] },
    { name: 'Kuwait', cities: ['Kuwait City', 'Al Ahmadi', 'Hawalli'], coordinates: [[29.3759, 47.9774], [29.0769, 48.0838], [29.3328, 48.0289]] },
    { name: 'Bahrain', cities: ['Manama', 'Muharraq', 'Riffa'], coordinates: [[26.2285, 50.5860], [26.2572, 50.6119], [26.13, 50.555]] },
    { name: 'Oman', cities: ['Muscat', 'Salalah', 'Sohar'], coordinates: [[23.5880, 58.3829], [17.0194, 54.0897], [24.3481, 56.7075]] },
    { name: 'Yemen', cities: ['Sana\'a', 'Aden', 'Taiz'], coordinates: [[15.3694, 44.1910], [12.7855, 45.0187], [13.5795, 44.0209]] },
    { name: 'Palestine', cities: ['Gaza', 'Ramallah', 'Hebron'], coordinates: [[31.5017, 34.4668], [31.8996, 35.2042], [31.5326, 35.0998]] },
    // Add more countries and cities as needed
];

const conditions = [0, 1, 2]; // Example condition IDs

const generateRandomParticipants = (num) => {
    const participants = [];
    const perIdSet = new Set();

    for (let i = 0; i < num; i++) {
        const country = faker.helpers.arrayElement(countries);
        const cityIndex = faker.number.int({ min: 0, max: country.cities.length - 1 });
        const city = country.cities[cityIndex];
        const coordinates = country.coordinates[cityIndex];

        let per_id;
        do {
            per_id = faker.number.int({ min: 1000, max: 9999 });
        } while (perIdSet.has(per_id));
        perIdSet.add(per_id);

        const participant = {
            per_id: per_id,
            country: country.name,
            city: city,
            location: { type: 'Point', coordinates: coordinates },
            date_of_birth: faker.date.past({ years: 50, refDate: new Date() }).toISOString().split('T')[0],
            condition_id: faker.helpers.arrayElement(conditions),
        };
        participants.push(participant);
    }
    return participants;
};

const participants = generateRandomParticipants(5000); // Generate 100 random participants

fs.writeFileSync('participants.txt', JSON.stringify(participants, null, 2));
console.log('Random participants generated and saved to participants.txt');