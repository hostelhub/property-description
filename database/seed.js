const faker = require('faker');
const db = require('./index.js');
const Hostel = require('./Hostel.js');

const sampleHostels = [];

for (let i = 1; i <= 100; i += 1) {
  const pics = [];
  let paragraph = '';
  for (let j = 0; j < 10; j += 1) {
    const picId = (Math.floor(Math.random() * 54) + 1).toString();
    pics.push({ full: `https://s3-us-west-1.amazonaws.com/hackreactorfrontendcapstone/hrsf114-front-end-capstone-pics/sample${picId}.jpg`, small: `https://s3-us-west-1.amazonaws.com/hackreactorfrontendcapstone/hrsf114-front-end-capstone-pics/sample${picId}_small.jpg` });
  }
  for (let k = 0; k < 20; k += 1) {
    paragraph += `${faker.hacker.noun()} `;
  }
  sampleHostels.push({
    _id: i, name: faker.name.findName(), description: paragraph, photos: pics,
  });
}

const insertSampleHostels = function seed() {
  Hostel.create(sampleHostels)
    .then(() => {
      console.log('data has been seeded!');
      db.close();
    });
};

insertSampleHostels();
