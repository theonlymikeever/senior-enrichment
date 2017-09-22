const faker = require('faker');
const Student = require('./Student');
const Campus = require('./Campus');

//create a bunch of filler data
const boxOFakePeople = [];
const boxOFakeSchools = [];
for (var i = 0; i < 20; i++) {
  boxOFakePeople.push({
    name: faker.name.findName(),
    email: faker.internet.email()
  })

  boxOFakeSchools.push({
    name: faker.company.companyName(),
  })
}

const seed = () => {
  const promiseArr = []

//Promise array creation where 0-19 are students, 20-39 campuses
  boxOFakePeople.forEach((person) => {
    let { name, email } = person;
    promiseArr.push(
      Student.create({ name, email })
    )
  })

  boxOFakeSchools.forEach((school) => {
    let { name } = school;
    promiseArr.push(Campus.create({ name }))
  })

//load the DB up!
  return Promise.all(promiseArr)
    .then((res) => {
      return res.slice(0, 20).forEach((student) => {
        //and set random campuses
        student.setCampus(res[Math.floor(Math.random() * (39 - 20) + 20)])
      })
    })
}
 module.exports = seed;