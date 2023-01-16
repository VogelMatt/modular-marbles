const { createMarble } = require("./marbleMaker.js");
const marble = createMarble("giant");
console.log(marble);

const { weaveBag } = require("./bagMaker.js");
const bag = weaveBag("denim");
console.log(bag);