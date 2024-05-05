const Sequeslize = require('sequelize');
const sequelize = new Sequeslize('first', 'Vanessa', 'myroxane5');

const Data= sequelize.define('data', {
    firstName: {
        type: Sequeslize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequeslize.STRING,
        allowNull: false
    },
    national_id: {
        type: Sequeslize.INTEGER,
        allowNull: false
    },
    telephone: {
        type: Sequeslize.INTEGER,
        allowNull: false
    },
    email: {
        type: Sequeslize.STRING,
        allowNull: false
    },
    department: {
        type: Sequeslize.STRING,
        allowNull: false
    },
    position: {
        type: Sequeslize.STRING,
        allowNull: false
    },
    laptop_manufacturer: {
        type: Sequeslize.STRING,
        allowNull: false
    },
    model: {
        type: Sequeslize.STRING,
        allowNull: false
    },
    serial_number: {
        type: Sequeslize.INTEGER,
        allowNull: false
    },
    password: {
        type: Sequeslize.STRING,
        allowNull: false
    }
    
});
