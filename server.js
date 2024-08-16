import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import sequelize from 'sequelize'
import Participant from './models/Participants.js';
import dotenv from 'dotenv';

const app = express()
app.use(cors())
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 3001;

app.get('/api', async (req, res) => {
    try {
        const participants = await Participant.findAll();
        res.setHeader('Content-Type', 'application/json');
        res.json(participants);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch participants' });
    }
});

app.post('/form', async (req, res) => {
    try {
        const {  id, country, city, location, dateOfBirth, condition_id } = req.body;
        var newParticipant={  per_id:id, country, city, location, date_of_birth:dateOfBirth, condition_id }
        console.log('newParticipant:',newParticipant);
        Participant.create(newParticipant);

        res.setHeader('Content-Type', 'application/json');
        res.json({ message: 'Participant added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add participant' });
    }
});

//works
// var p = { per_id: 1, country: 'USA', city: 'New York', location: { type: 'Point', coordinates: [40.7128, -74.0060] }, date_of_birth: '1990-01-01', condition_id: 1 };
// Participant.create(p);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
