const { ccg, } = require("ccg-card-generator");

const options = {
	"debug": true,
	"style": "./node_modules/ccg-card-generator/lib/styles/cards.css",
	"printOptions": {
		displayHeaderFooter: false,
	},
};

ccg("./card.js", "./cards.pdf", options);