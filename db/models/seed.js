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
  // let mike, nick, camp, camp2

  // return Promise.all([
  //   Student.create({ name: 'mike', email: 'hi@hi.com'}),
  //   Student.create({ name: 'Nick', email: 'hi2@hi2.com'}),
  //   Campus.create({ name: 'place1'}),
  //   Campus.create({ name: 'other place'})
  // ])
  // .then(([s1, s2, c1, c2]) => {
  //   mike = s1
  //   nick = s2
  //   camp = c1
  //   camp2 = c2
  //   return mike.setCampus(camp)
  // })
  // .then(() => {
  //   return { mike, nick, camp, camp2 }
  // })

  const promiseArr = []

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
  return Promise.all(promiseArr)
    .then((res) => {
      return res.slice(0, 20).forEach((student) => {
        console.log(res[39].get())
        student.setCampus(res[Math.floor(Math.random() * (39 - 20) + 20)])
      })
    })
}
 module.exports = seed;

