const { ccggen, } = require("ccg-card-generator");
const cards = require("../cards.js");

// ---------------------------------

const options = {
	"debug": true,
	"style": "./node_modules/ccg-card-generator/lib/styles/cards.css",
	"printOptions": {
		displayHeaderFooter: false,
	},
};

// ---------------------------------

ccggen( cards.cards, "./cards.pdf", options);