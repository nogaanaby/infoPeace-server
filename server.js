import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import sequelize from 'sequelize'
import Participant from './models/Participants.js';

const app = express()
app.use(cors())

app.get('/api', async (req, res) => {
    try {
        const participants = await Participant.findAll();
        res.setHeader('Content-Type', 'application/json');
        res.json(participants);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch participants' });
    }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})
