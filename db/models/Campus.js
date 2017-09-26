const conn = require('../index');

const Campus = conn.define('campus', {
  name: {
    type: conn.Sequelize.STRING,
  },
  imageUrl: {
    type: conn.Sequelize.STRING,
    defaultValue: 'http://fillmurray.com/200/300'
  },
  note: {
    type: conn.Sequelize.TEXT
  }
})

module.exports = Campus;
