const conn = require('../index');

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
  }
})

module.exports = Student;
