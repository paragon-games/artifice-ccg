const { ccggen, } = require("ccg-card-generator");
const cards = require("../cards.js");

// ---------------------------------

const options = {
	"debug": true,
  "customStyles": "./styles/artifice.css",
};

// ---------------------------------

ccggen( cards.cards, "./cards.pdf", options);