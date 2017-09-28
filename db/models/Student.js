const conn = require('../index');
const faker = require('faker');

const Student = conn.define('student', {
  name: {
    type: conn.Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: conn.Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  note: {
    type: conn.Sequelize.TEXT,
    defaultValue: faker.company.catchPhrase()
  },
  imageUrl: {
    type: conn.Sequelize.STRING,
    defaultValue: 'https://randomuser.me/api/portraits/men/1.jpg'
  }
})

module.exports = Student;
