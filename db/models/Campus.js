const conn = require('../index');

const Campus = conn.define('campus', {
  name: {
    type: conn.Sequelize.STRING,
  },
  imageUrl: {
    type: conn.Sequelize.STRING,
    defaultValue: 'http://lorempixel.com/320/240/city?random=' + Math.floor(Math.random() * (100 - 1) + 1)
  },
  note: {
    type: conn.Sequelize.TEXT
  }
})

module.exports = Campus;
