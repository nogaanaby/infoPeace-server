import sequelize from './sequelize.js';
import Participant from './models/Participants.js';

const participantsData = [
    { per_id: 1111, country: 'Israel', city: 'Tel Aviv', location: { type: 'Point', coordinates: [32.0853, 34.7818] }, date_of_birth: '1990-01-01', condition_id: 0 },
    { per_id: 1112, country: 'Egypt', city: 'Cairo', location: { type: 'Point', coordinates: [30.0444, 31.2357] }, date_of_birth: '1985-05-15', condition_id: 1 },
    { per_id: 1113, country: 'Jordan', city: 'Amman', location: { type: 'Point', coordinates: [31.9539, 35.9106] }, date_of_birth: '1992-07-20', condition_id: 2 },
    { per_id: 1114, country: 'Israel', city: 'Jerusalem', location: { type: 'Point', coordinates: [31.7683, 35.2137] }, date_of_birth: '1988-11-30', condition_id: 0 },
    // Add more participants as needed
];


const seedDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await Participant.bulkCreate(participantsData);
        console.log('Participants have been added!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
    }
};

seedDatabase();