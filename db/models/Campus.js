const conn = require('../index');

const Campus = conn.define('campus', {
  name: {
    type: conn.Sequelize.STRING,
  },
  imageUrl: {
    type: conn.Sequelize.VIRTUAL,
    get: function () {
      return 'http://fillmurray.com/200/300';
      // return `/api/campuses/${this.id}/image`;
    }
  }
})

module.exports = Campus;
