const faker = require('faker');
const Student = require('./Student');
const Campus = require('./Campus');

console.log(typeof faker.company.catchPhrase() )
//create a bunch of filler data
const boxOFakePeople = [];
const boxOFakeSchools = [];
for (var i = 0; i < 40; i++) {
  boxOFakePeople.push({
    name: faker.name.findName(),
    email: faker.internet.email(),
    note: faker.company.catchPhrase()
  })
  if (i % 4 === 0) {
    boxOFakeSchools.push({
    name: faker.address.city(),
    imageUrl: 'http://lorempixel.com/320/240/city'+'?random='+Math.floor(Math.random() * (1 - 11) + 11),
    note: faker.company.catchPhrase()
    })
  }
}

const seed = () => {
  const promiseArr = []

//Promise array creation where 0-39 are students, 40-49 campuses
  boxOFakePeople.forEach((person) => {
    let { name, email, note } = person;
    promiseArr.push(
      Student.create({ name, email, note })
    )
  })

  boxOFakeSchools.forEach((school) => {
    let { name, imageUrl, note } = school;
    promiseArr.push(Campus.create({ name, imageUrl, note }))
  })

//load the DB up!
  return Promise.all(promiseArr)
    .then((res) => {
      return res.slice(0, 40).forEach((student) => {
        //and set random campuses
        student.setCampus(res[Math.floor(Math.random() * (49 - 40) + 40)])
      })
    })
}
 module.exports = seed;
