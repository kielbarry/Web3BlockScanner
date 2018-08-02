# Web3BlockScanner

## This CLI program is an Ethereum block explorer using Web3.js and an Infura Web Socket, built in NodeJS.

### You may supply the program either 
	
-	1) a single number, which will be used to analyze all blocks between the current block (cb) and cb minus that number; or,
-	2) two numbers, each representing a blocknumber, which will be used to analyze those blocks inclusive, as well as those in between.

### Each Block explored display a summary table, listing:

-	1. The block number,
-	2. The total number of transactions,
-	3. The total number of unique 'from' addresses,
-	4. The total number of unique 'to' addresses,
-	5. The total number of contracts created,
-	6. The total number of contract transactions,
-	7. The total number of uncles.

### Before the summary table for each block, the program lists:
-	1. Every unique 'from' address and its total spent that block,
-	2. Every unique 'to' address and its total received that block,
-	3. Every unique contract address.

### Finally, a summary table for all blocks explored is displayed, listing:
-	1. The total number of ETH transacted,
-	2. The total number of transactions,
-	3. The total number of unique 'to' addresses,
-	4. The total number of unique 'from' addresses,
-	5. The total number of contracts created,
-	6. The total number of contract transactions,
-	7. The total number of uncles.

### Before the summary table for each block, the program lists:
-	1. Every unique 'from' address and its total spent in sum,
-	2. Every unique 'to' address and its total received in sum,
-	3. Every unique contract address.


To use this tool, you can
 - Clone the repo

 To get started with a clone,
 - Clone the repo from here: https://github.com/kielbarry/Web3BlockScanner.git
 - CD into that directory
 - Run npm install --save
 - Run npm test
 - If there is a delay after test success, exit the program and run node app.js from the root of the directory
