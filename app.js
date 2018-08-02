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
WSMainNet = process.env.WS_MAINNET_ENDPOINT || "wss://mainnet.infura.io/ws";

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
async function getAllBlockStats(input) {

	// TODO: web.eth.filter here
	let MasterBlock = [];

	if(!input[1]) {
		let cb = currentBlock
		await getBlockWrapperSingle(cb, input[0]).then(resp => organizeBlockStats(resp))
	}
	else {
		await getBlockWrapperRange(input).then(resp => organizeBlockStats(resp))
	}
}

async function getBlockWrapperSingle(cb, input) {
	let MasterBlock = [];
	for(let i = 0; i < input; i++) {
		let b = cb-i
		MasterBlock[i] = await web3.eth.getBlock(b, true, (err, resp) => {
    		if(err) console.log("err in getblockstats: ",err);
    		return getBlockStats(resp)
    	})
	}
	return  MasterBlock
}

async function getBlockWrapperRange(input) {
	let MasterBlock = [];
	let i = 0;
	for(var b = input[0]; b <= input[1]; b++) {
		MasterBlock[i] = await web3.eth.getBlock(b, true, (err, resp) => {
    		if(err) console.log("err in getblockstats: ",err);
    		return getBlockStats(resp)
    	})
    	i++;
	}
	return  MasterBlock
}


async function getBlockStats(block){

	var bt = {
		"number" : block["number"],
		"from": {},
		"to": {},
		"contracts": {},
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

	block["transactions"].map(tx => {

		bt["valueSent"] += parseFloat(web3.utils.fromWei(tx["value"], 'ether'))

		if (tx["to"] === null) {
			bt["contractsCreated"]++;

			if(!bt["contracts"][tx["from"]] ) {
				bt["contracts"][tx["from"]]  = parseFloat(web3.utils.fromWei(tx["value"], 'ether'));
			} else {
				bt["contracts"][tx["from"]] += parseFloat(web3.utils.fromWei(tx["value"], 'ether'));
			}

		} else if (tx["value"] == 0) {
			bt["contractsTransactions"]++;
			if(!bt["contracts"][tx["from"]] ) {
				bt["contracts"][tx["from"]]  = parseFloat(web3.utils.fromWei(tx["value"], 'ether'));
			} else {
				bt["contracts"][tx["from"]] += parseFloat(web3.utils.fromWei(tx["value"], 'ether'));
			}
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

	return bt
}

async function organizeBlockStats(newArr) {

	let arr = []
	try {
		arr = await Promise.all(newArr.map(b => getBlockStats(b)))
	} catch(error) {
		console.log("that one didn't work... please try again")
	}

	let TotalSent = 0;
	let TotalTransactions = 0;
	let TotalUniqueSentAddr = 0;
	let TotalUniqueReceivedAddr = 0;
	let TotalContractsCreated = 0;
	let TotalContractsTransactions = 0;
	let TotalUncles = 0;
	let TotalUniqueContracts = {};
	let TotalUniqueFroms = {};
	let TotalUniqueTos = {};

	arr.map(b => {

		Object.keys(b.contracts).map(key => {
			console.log(
				chalk.green("\tContract Addr"), 
				chalk.yellow(key),
			)
			if(!TotalUniqueContracts[key]) {
				TotalUniqueContracts[key] = b.contracts[key]
			} else {
				TotalUniqueContracts[key] += b.contracts[key]
			}
		})
		Object.keys(b.from).map(key => {
			console.log(
				chalk.green("\tFrom Addr"), 
				chalk.yellow(key),
				chalk.green("\tValue Sent"),
				chalk.yellow(b.from[key])
			)
			if(!TotalUniqueFroms[key]) {
				TotalUniqueFroms[key] = b.from[key]
			} else {
				TotalUniqueFroms[key] += b.from[key]
			}
		})
		Object.keys(b.to).map(key => {
			console.log(
				chalk.green("\tTo Addr"), 
				chalk.yellow(key),
				chalk.green("\tValue Sent"),
				chalk.yellow(b.to[key])
			)
			if(!TotalUniqueTos[key]) {
				TotalUniqueTos[key] = b.to[key]
			} else {
				TotalUniqueTos[key] += b.to[key]
			}
		})

		console.log(
			chalk.green("\tBlock"), 
			chalk.yellow(b.number), 
			chalk.green("\tTotal Txs"), 
			chalk.yellow(b.transactionCount), 
			chalk.green("\tUnique From Addr"), 
			chalk.yellow(b.uniqueSentAddresses), 
			chalk.green("\tUnique To Addr"), 
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

	})


	Object.keys(TotalUniqueContracts).map(key => {
		console.log(
			chalk.green("\tContract Addr"), 
			chalk.yellow(key),
		)
	})
	Object.keys(TotalUniqueFroms).map(key => {
		console.log(
			chalk.green("\tFrom Addr"), 
			chalk.yellow(key),
			chalk.green("\tValue Sent"),
			chalk.yellow(TotalUniqueFroms[key])
		)
	})
	Object.keys(TotalUniqueTos).map(key => {
		console.log(
			chalk.green("\tTo Addr"), 
			chalk.yellow(key),
			chalk.green("\tValue Sent"),
			chalk.yellow(TotalUniqueTos[key])
		)
	})


	console.log(
		chalk.green("\tTotal Sent"), 
		chalk.yellow(TotalSent), 
		chalk.green("\tTotal Txs"), 
		chalk.yellow(TotalTransactions), 
		chalk.green("\tUnique From Addr"), 
		chalk.yellow(TotalUniqueSentAddr), 
		chalk.green("\tUnique To Addr"), 
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

