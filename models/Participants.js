import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js'; 

const Participant = sequelize.define('Participant', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    per_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: false,
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    condition_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
});

export default Participant;