require("dotenv").config();

const
Web3 = require("web3"),
chalk = require("chalk"),
figlet = require("figlet"),
clear = require("clear"),
readline = require("readline"),
ropsten = process.env.ROPSTEN_ENDPOINT,
mainNet = process.env.MAINNET_ENDPOINT,
WSRopsten = process.env.WS_ROPSTEN_ENDPOINT,
WSMainNet = process.env.WS_MAINNET_ENDPOINT;

let web3 = new Web3();

web3.setProvider(WSMainNet);

let BlockStatsCache = {};

let currentBlock

web3.eth.subscribe('newBlockHeaders', (err, res) => {
	err ? console.log("websocket error please restart") : currentBlock = res.number
});

console.log(chalk.yellow('Please wait while the current block is retrieved'))

let hasCurrentBlock = setInterval(() => {
	if(currentBlock != undefined) {
		clearInterval(hasCurrentBlock);
		setConsole();
	}
}, 500);

readInput();

// clearConsole prettifies the workspace.
function clearConsole() {
	clear();
	console.log(chalk.yellow(figlet.textSync('FRIKADELLER', { horizontalLayout: 'full' })));
}

// setConsole formats the screen and refreshes on an error.
function setConsole(err) {
	clearConsole();
	if(err) console.log(chalk.red('An invalid entry was made, please try again'))
	console.log(`Please enter either \n 
		1) the number of blocks since the most recent (single input) or a \n 
		2) range of blocks (2 inputs of block number)`
	)
}
// readInput takes user input from cli.	
function readInput() {
	process.stdin.setEncoding('utf8');
	readline.createInterface({
	  input: process.stdin,
	  terminal: true
	}).on('line', readLine);
}

// readLine treats each line as a separate input to operate on.
function readLine(input){
	var toValidate = input.trim().replace(/\s+/g, " ").split(" ")
	let v = returnIsValid(toValidate)
	!v ? setConsole(!v) : getAllBlockStats(toValidate)
}

// returnIsValid checks for several mistakes / typos.
function returnIsValid(input){
	if(input[0] === '') return false;
	if(input.length !== 1 && input.length !== 2) return false;
	if(input[0].match(/^\d+$/) === null) return false;
	if(input[1] && input[1].match(/^\d+$/) === null) return false;
	return true;
}

// getAllBlockStats retrieves stats based on wether 1 or 2 arguments were supplied.
function getAllBlockStats(input) {

	// TODO: web.eth.filter here
	let MasterBlock = [];

	if(!input[1]) {
		let cb = currentBlock
		for(let i = 0; i < input[0]; i++) {
			let b = cb-i
			console.log(b)
			web3.eth.getBlock(b, true, (err, resp) => {
	    		if(err) console.log("err in getblockstats: ",err);
	    		MasterBlock[i] = getBlockStats(resp)
	    	}).then(resp => organizeBlockStats(MasterBlock))
		}
 
	}
	else {
		let i = 0;
		for(var b = input[0]; b <= input[1]; b++) {
			web3.eth.getBlock(b, true, (err, resp) => {
	    		if(err) console.log("err in getblockstats: ",err);
	    		MasterBlock[i] = getBlockStats(resp)
	    	}).then(resp => organizeBlockStats(MasterBlock))
	    	i++;
		}
	}
}


function getBlockStats(block){

	var bt = {
		"number" : block["number"],
		"from": {},
		"to": {},
		"uniqueSentAddresses": 0,
		"uniqueReceivedAddress": 0,
		"transactionCount": 0,
		"valueSent": 0,
		"contractsCreated": 0,
		"contractsTransactions": 0,
		"uncles": 0
	}

	if(block["uncles"]) bt["uncles"] = block["uncles"].length

	if(null == block["transactions"]) return bt;

	// if(BlockStatsCache[block["number"]] !== undefined && block["number"] != currentBlock) {
	// 	return BlockStatsCache[bt["number"]]
	// }


	// console.log(block.transactions)
	// block["transactions"].map(tx => {
	// 	console.log(
	// 		chalk.green("\tfrom"), 
	// 		chalk.yellow(tx.from), 
	// 		chalk.green("\tto"), 
	// 		chalk.yellow(tx.to), 
	// 		chalk.green("\tvalue"), 
	// 		chalk.yellow(parseFloat(web3.utils.fromWei(tx.value)))
	// 	)
	// 	// if(tx.to =='0x18c7dfa7d3a130bcf35129eaf3ba4d58e5563158') console.log(tx) 
	// })

	block["transactions"].map(tx => {

		bt["valueSent"] += parseFloat(web3.utils.fromWei(tx["value"], 'ether'))

		if (tx["to"] === null) {
			bt["contractsCreated"]++;
		} else if (tx["value"] == 0) {
			bt["contractsTransactions"]++;
		} else {

			if(!bt["from"].hasOwnProperty(tx["from"])) bt["from"][tx["from"]] = 0;
			// substract balance from sender
			bt["from"][tx["from"]] -= parseFloat(web3.utils.fromWei(tx["value"], 'ether'));
			
			if(!bt["to"].hasOwnProperty(tx["to"])) bt["to"][tx["to"]] = 0;
			// add balance to receiver
			bt["to"][tx["to"]] += parseFloat(web3.utils.fromWei(tx["value"], 'ether'));

			// count transaction
			bt["transactionCount"] ++;
		}
	})

	bt["uniqueSentAddresses"] = Object.keys(bt["from"]).length
	bt["uniqueReceivedAddress"] = Object.keys(bt["to"]).length

	// if(BlockStatsCache[block["number"]] === undefined && block["number"] != currentBlock) {
	// 	BlockStatsCache[bt["number"]] == bt;
	// }

	return bt
}

function organizeBlockStats(arr) {

	console.log(arr)

	let TotalSent = 0;
	let TotalTransactions = 0;
	let TotalUniqueSentAddr = 0;
	let TotalUniqueReceivedAddr = 0;
	let TotalContractsCreated = 0;
	let TotalContractsTransactions = 0;
	let TotalUncles = 0;



	let uniqueFroms = {};
	let uniqueTos ={};

	arr.map(b => {
		console.log(
			chalk.green("\tBlock"), 
			chalk.yellow(b.number), 
			chalk.green("\tTotal Txs"), 
			chalk.yellow(b.transactionCount), 
			chalk.green("\tUnique From Addr"), 
			chalk.yellow(b.uniqueSentAddresses), 
			chalk.green("\tUnique To Add"), 
			chalk.yellow(b.uniqueReceivedAddress), 
			chalk.green("\tContracts Created"), 
			chalk.yellow(b.contractsCreated),
			chalk.green("\tContracts Txs"), 
			chalk.yellow(b.contractsTransactions),
			chalk.green("\tUncles"), 
			chalk.yellow(b.uncles),
		)

		TotalSent += b.valueSent;
		TotalTransactions += b.transactionCount;
		TotalUniqueSentAddr += b.uniqueSentAddresses;
		TotalUniqueReceivedAddr += b.uniqueReceivedAddress;
		TotalContractsCreated += b.contractsCreated;
		TotalContractsTransactions += b.contractsTransactions;
		TotalUncles += b.uncles;


		// Object.keys(b.from).map(key => {
		// 	// TotalSent += b.from[key]
		// 	if(!Object.keys(uniqueFroms).includes(key)) {
		// 		uniqueFroms[key] = b.from[key]
		// 	} else {
		// 		uniqueFroms[key] += b.from[key]
		// 	}
		// })

		// Object.keys(b.to).map(key => {
		// 	if(!Object.keys(uniqueTos).includes(key)) {
		// 		uniqueTos[key] = b.to[key]
		// 	} else {
		// 		uniqueTos[key] += b.to[key]
		// 	}
		// })
	})

	console.log(
		chalk.green("\tTotals"), 
		chalk.yellow(TotalSent), 
		chalk.green("\tTotal Txs"), 
		chalk.yellow(TotalTransactions), 
		chalk.green("\tUnique From Addr"), 
		chalk.yellow(TotalUniqueSentAddr), 
		chalk.green("\tUnique To Add"), 
		chalk.yellow(TotalUniqueReceivedAddr), 
		chalk.green("\tContracts Created"), 
		chalk.yellow(TotalContractsCreated),
		chalk.green("\tContracts Txs"), 
		chalk.yellow(TotalContractsTransactions),
		chalk.green("\tUncles"), 
		chalk.yellow(TotalUncles),
	)

}


module.exports = {
	returnIsValid,
	getBlockStats
}

