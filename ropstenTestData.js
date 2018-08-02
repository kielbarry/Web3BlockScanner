let testBlock1 = {
  number: 1,
  transactions: [
    { from: 'kiel',
      gas: 300000,
      gasPrice: '100000000000',
      to: 'contract',
      value: '0' },
    {  from: 'kiel',
       gas: 22920,
       gasPrice: '21840000000',
       to: 'truffle',
       value: '541900000000000000' },
    {  from: 'kiel',
       gas: 2000000,
       gasPrice: '100000000000',
       to: null,
       value: '0' },
  ],
  uncles: [ 'adsdf' ]
}

let testBlock1Answer =  { 
  number: 1,
  from: { kiel: -0.5419 },
  to: { truffle: 0.5419 },
  contracts: { kiel: 0 },
  uniqueReceivedAddress: 1,
  uniqueSentAddresses: 1,
  transactionCount: 1,
  valueSent: 0.5419,
  contractsCreated: 1,
  contractsTransactions: 1,
  uncles: 1 
}

let testBlock2 = { difficulty: '1696260042',
  extraData: '0xd983010802846765746887676f312e392e328777696e646f7773',
  gasLimit: 9147927,
  gasUsed: 1096807,
  hash:
   '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
  logsBloom:'',
  miner: '0x14a94E658ba3ADbe6D2836A09F38FFf95b885f15',
  mixHash:
   '0x58e72f247d02345f43875e4fd99a33705290886799b334017b046e10ce0dc56f',
  nonce: '0x0d47f29bbe877fd3',
  number: 3717820,
  parentHash:
   '0x4a1a4cfb917fdab816ce243f151239334d7bacb31f650589689c846e3422840f',
  receiptsRoot:
   '0x8ffa13c73debd57393ad604d8b9df611e347919239aec624e7f3cda21b8cce91',
  sha3Uncles:
   '0xd95ba361d6e89794f0c934a5fc142f0c80959a3988bdee7fe0fef682c2d40fac',
  size: 5726,
  stateRoot:
   '0x6e65feeb501b077722c59adef44b29d38f28eee63e72358bbfffeb44b1c93e65',
  timestamp: 1532658046,
  totalDifficulty: '9047448190459965',
  transactions:
   [ { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0xd1E36aC88dB0f6Ef95421f78e7a9cDFB3aA88Ddd',
       gas: 300000,
       gasPrice: '100000000000',
       hash:
        '0x8822b6049b48a6cc47f227c071a03f842e5143ac3803ced0728350f85a8c6179',
       input:
        '0xa9059cbb0000',
       nonce: 11,
       r:
        '0x56df4db936bef2a738c1c35101c8081c407523b8a994df95c75bd6bd190eac57',
       s:
        '0x43e40d5915dc128c2ef4b21867605781b5b556e34d8d32055f18a6fe7a6eeeec',
       to: '0x503b0C139665E7e9F863ba1BCf0e635a2E87aA5b',
       transactionIndex: 0,
       v: '0x29',
       value: '0' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x7299192CD862c9c5345cC47a2Ef24807436009b0',
       gas: 2000000,
       gasPrice: '100000000000',
       hash:
        '0x7a6a2934e0f2f94f1238d83227bc583b5d95f3319386e625af8ea6ea2f271c80',
       input:
        '0x608060405234',
       nonce: 1294,
       r:
        '0x4beeb0a37250390af4a37eeab86fa1d35a32a61d747d276b1b174c7390ccdd49',
       s:
        '0x65436b9b085dfd8b50feee2a593848c3a9a480c24245270ad1fab4396df5ccb0',
       to: null,
       transactionIndex: 1,
       v: '0x1b',
       value: '0' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x56ddC3eBc75525f0ea4601a5BF97dd8a35877beF',
       gas: 300000,
       gasPrice: '40000000000',
       hash:
        '0x1ca62c7be3bde0e0790a032fdf7d03cc43d39b54467cf85f6ff89fba54011e52',
       input:
        '0xa9059cbb0000000000000000000000007019d8e66d7e8cb2e67707c6fa800ef0f1edae790000000000000000000000000000000000000000000000008ac7230489e80000',
       nonce: 1,
       r:
        '0xce8de89b8031fdd335232079b4e853f6d271a626c02ca99df1d72a8f3586940e',
       s:
        '0x55aabf7296478f2c99510d1da168e4b122a7f848f07c485b7f47142cf46e6fec',
       to: '0x503b0C139665E7e9F863ba1BCf0e635a2E87aA5b',
       transactionIndex: 2,
       v: '0x29',
       value: '0' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0xa8B7c036afB2C8434D32e1BA61305eA1F688CFCe',
       gas: 22920,
       gasPrice: '21840000000',
       hash:
        '0xb9d3541e33af1bf699fdfae06a0a4f7254688636e0adaac608314a968cecf754',
       input:
        '0x00000000000000000000000000000000000000000000000000000000000000194d4c533230313830373237313031393537313935373135363500000000000000',
       nonce: 6,
       r:
        '0x9b824ee049525ce80eb18d3f6810a40051b99f16070f0614848ed60477aa8ef0',
       s:
        '0x6ba5d1d03911620c6abfe36a1f5bb2be1c436d7acdddc57523d0a7277b2766b5',
       to: '0xa2243aDEE0D4CedFad3737edae1F25e67fB227c3',
       transactionIndex: 3,
       v: '0x1b',
       value: '541900000000000000' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x75237811638EB37f898339c9FA19c9b1c764886c',
       gas: 1000000,
       gasPrice: '21000000000',
       hash:
        '0xd04d9ee8d2d9af1405f27652c098b3a06a6344dd37aa484de2a82ee06cb9cfbe',
       input: '0x',
       nonce: 12,
       r:
        '0x9aba0014c98afd94354b587f89ac381cf447f8446197fb38092f2f0dcf7d820e',
       s:
        '0x74878caec3029d873c2ce1abb8c2aad42014045f37fd6d860ef6ae90a4afccd4',
       to: '0x86C65673bEFD323f5255905e267f5b34d453924c',
       transactionIndex: 4,
       v: '0x29',
       value: '100000000000000000' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x75237811638EB37f898339c9FA19c9b1c764886c',
       gas: 1000000,
       gasPrice: '21000000000',
       hash:
        '0xe30e64edc9f03609ba3188ae14924488464491fcb2de0325e3510d033b7891ee',
       input:
        '0xa9059cbb00000000000000000000000086c65673befd323f5255905e267f5b34d453924c0000000000000000000000000000000000000000000000000de0b6b3a7640000',
       nonce: 13,
       r:
        '0x7b2a987c65bc4fd635a7f591c4ca7ea092e7c1d734b883c124ad499c6362ca5f',
       s:
        '0x7911d83e32c4b0b51b9d7ff94eabdd0f5e6b9f908ad7cc18248f73aac1370472',
       to: '0xb190177211024e128CB1fEd4f57099976F99cB80',
       transactionIndex: 5,
       v: '0x2a',
       value: '0' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x81b7E08F65Bdf5648606c89998A9CC8164397647',
       gas: 21000,
       gasPrice: '19000000000',
       hash:
        '0x1a868926e942a16ee2d2bd59e814c9911881ebce6fb2367818e147c9154b8aee',
       input: '0x',
       nonce: 12546645,
       r:
        '0x1258a0caaa80cdde00032db8accbb9ef00f60109ca56e0d594c50dc8da3fce05',
       s:
        '0x267bc3b3dc1a77b85f58fcb24507d54e421e6b395e4b58ab383fb60a84f01608',
       to: '0x725ca2A01d5006c22172eC602C8923139b8Bfc4E',
       transactionIndex: 6,
       v: '0x1c',
       value: '1000000000000000000' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x81b7E08F65Bdf5648606c89998A9CC8164397647',
       gas: 21000,
       gasPrice: '19000000000',
       hash:
        '0xcf4d2eb2acac596ec076475e96f197056dc0da834072c90237befc1ca1818951',
       input: '0x',
       nonce: 12546646,
       r:
        '0x61efc39dd948cb339c3e6f63896ed31b70d539a994e7b7a7b041d6a088ec9c02',
       s:
        '0x78101b3f0e4c77104b99bfc3098800ea28131a8a3da93c45c0ef3fdd17beed40',
       to: '0x725ca2A01d5006c22172eC602C8923139b8Bfc4E',
       transactionIndex: 7,
       v: '0x1c',
       value: '1000000000000000000' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x81b7E08F65Bdf5648606c89998A9CC8164397647',
       gas: 21000,
       gasPrice: '19000000000',
       hash:
        '0x57cda04fbe665d6f94e7d1e3e757cef70be95f128873830c6940444358a2d97d',
       input: '0x',
       nonce: 12546647,
       r:
        '0x8b965f4435d91a7bc794e5c759e371ce5ca3bd99dff629070eecfc79ac055ac0',
       s:
        '0x17dffe3863fda6a5a9a2c421b75f944b66314eec21074defd57c8afda0a7a5f7',
       to: '0x725ca2A01d5006c22172eC602C8923139b8Bfc4E',
       transactionIndex: 8,
       v: '0x1b',
       value: '1000000000000000000' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x81b7E08F65Bdf5648606c89998A9CC8164397647',
       gas: 21000,
       gasPrice: '19000000000',
       hash:
        '0x41f61df274ff1d21a0ac2ac2ee3471890e0f97070572633c350d43585a81c7ac',
       input: '0x',
       nonce: 12546648,
       r:
        '0xc76cc8e22e9d30de6341dd081e74cea2dc51c51552a71aa7506c6f1a79518790',
       s:
        '0x418ad94deeb1b8fd0ffc3c45851c7cc3c4f2e6536628f23fca0a440a85a71d0c',
       to: '0x725ca2A01d5006c22172eC602C8923139b8Bfc4E',
       transactionIndex: 9,
       v: '0x1c',
       value: '1000000000000000000' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x81b7E08F65Bdf5648606c89998A9CC8164397647',
       gas: 21000,
       gasPrice: '19000000000',
       hash:
        '0x44f9cab41c120427d8e06de7daf43ec459152ce9dbfe8fdb4562b13bfffd384c',
       input: '0x',
       nonce: 12546649,
       r:
        '0x752d6ff136797b2131b6fd630aa419646c9ef0d6cae8e586034bac0a51011c9a',
       s:
        '0x69215af24f3fbc38d4e395aee1cc73054fbe37aba5ac5f409e3c24a7eabb03d9',
       to: '0x7455530BE355aD45a942360DFf71a8Eb1E714783',
       transactionIndex: 10,
       v: '0x1c',
       value: '1000000000000000000' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x81b7E08F65Bdf5648606c89998A9CC8164397647',
       gas: 21000,
       gasPrice: '19000000000',
       hash:
        '0x6044d9339e234cf04b96bf74e0e3f4d83dfebff2b3ee96dabe4f9685d1fb1d5c',
       input: '0x',
       nonce: 12546650,
       r:
        '0xfe67b422143df254abba46701a34741fd3de611ad7b7f3fe253575edce632413',
       s:
        '0x39053759df011b1a53369304a30332bc3633ff2adc58b1b94ac115ffcc6e47a9',
       to: '0x725ca2A01d5006c22172eC602C8923139b8Bfc4E',
       transactionIndex: 11,
       v: '0x1c',
       value: '1000000000000000000' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x81b7E08F65Bdf5648606c89998A9CC8164397647',
       gas: 21000,
       gasPrice: '19000000000',
       hash:
        '0x01dd0e0144d42babb7029e86857f8b7e8f673ac508845dc6e2330ea05ecdf060',
       input: '0x',
       nonce: 12546651,
       r:
        '0xb79723f821aaff5daa7c25c2adbed5dbe16a005bb61034415838b5529753c0bc',
       s:
        '0x462bb1f97ae4cbac20047b95abca52023fc9be6eb0f1bb33a72e4c8442408f2b',
       to: '0x725ca2A01d5006c22172eC602C8923139b8Bfc4E',
       transactionIndex: 12,
       v: '0x1c',
       value: '1000000000000000000' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x81b7E08F65Bdf5648606c89998A9CC8164397647',
       gas: 21000,
       gasPrice: '19000000000',
       hash:
        '0x29189081eb23299866c8db444b0f59a039acc7dfc9ceaf2023f29aadd4177438',
       input: '0x',
       nonce: 12546652,
       r:
        '0x23e7286f44ee1fa8199a7c6953fa1afc6610c1a5f0b15b09ebfad04d3e8cbb08',
       s:
        '0x61ef9c7dbdde5ad29231f11b1b85f847cbb0b54a61d39993555dcd613fb42dc1',
       to: '0x725ca2A01d5006c22172eC602C8923139b8Bfc4E',
       transactionIndex: 13,
       v: '0x1b',
       value: '1000000000000000000' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x81b7E08F65Bdf5648606c89998A9CC8164397647',
       gas: 21000,
       gasPrice: '19000000000',
       hash:
        '0x4e64bb1663c8da3f3e76b76de1418d4b25379ea07033f44f55b10a08eeeec7ba',
       input: '0x',
       nonce: 12546653,
       r:
        '0x43ce69b8353964721c60aa53e4be01042b87bc426cd678bc3dbbbec6ea26f4d5',
       s:
        '0x38c8a759d68fec71da201fa5eaf937946f9bf39bbc4a31ac00b3507a74e62bbf',
       to: '0x725ca2A01d5006c22172eC602C8923139b8Bfc4E',
       transactionIndex: 14,
       v: '0x1c',
       value: '1000000000000000000' },
     { blockHash:
        '0x0115b180bc4c26cedd7c365e9ce44e787bfdecd3bdfb20bb3e82d0440efb728d',
       blockNumber: 3717820,
       from: '0x81b7E08F65Bdf5648606c89998A9CC8164397647',
       gas: 21000,
       gasPrice: '19000000000',
       hash:
        '0x270193f243b29291c2457338276462798b5beeab80e6e31092e1f0e44a9ad5f6',
       input: '0x',
       nonce: 12546654,
       r:
        '0x69ddb7c58b9d5c087d82381eb96684352b4c55876bda6f857a9a3f771b9b695c',
       s:
        '0x403653c9c60f38c887136f8663e7808aaeb15e0d3972f745949aecfac28c7c99',
       to: '0x725ca2A01d5006c22172eC602C8923139b8Bfc4E',
       transactionIndex: 15,
       v: '0x1c',
       value: '1000000000000000000' } ],
  transactionsRoot:
   '0x8272a8546b46748ecfeaee5e78a46a66662fe6053a8ff1d2365f6fd519b24c16',
  uncles:
   [ '0xf7f6262550ff2d8ea66e8ad0d5490e29df1066ad5c3fc95f3971a2b0e6fe7e78' ] }

let testBlock2Answer = { 
  number: 3717820,
  from:
   { '0xa8B7c036afB2C8434D32e1BA61305eA1F688CFCe': -0.5419,
     '0x75237811638EB37f898339c9FA19c9b1c764886c': -0.1,
     '0x81b7E08F65Bdf5648606c89998A9CC8164397647': -10 },
  to:
   { '0xa2243aDEE0D4CedFad3737edae1F25e67fB227c3': 0.5419,
     '0x86C65673bEFD323f5255905e267f5b34d453924c': 0.1,
     '0x725ca2A01d5006c22172eC602C8923139b8Bfc4E': 9,
     '0x7455530BE355aD45a942360DFf71a8Eb1E714783': 1 },
  uniqueReceivedAddress: 4,
  uniqueSentAddresses: 3,
  transactionCount: 12,
  valueSent: 10.6419,
  contractsCreated: 1,
  contractsTransactions: 3,
  uncles: 1 }


module.exports = {
  testBlock1,
  testBlock2,
  testBlock1Answer,
  testBlock2Answer
}