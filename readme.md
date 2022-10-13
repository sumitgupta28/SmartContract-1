#test using truffle console

$truffle console

truffle(development)> let instance =await ScoreCard.deployed()

truffle(development)> let accounts = awit web3.eth.getAccounts()

truffle(development)> accounts
truffle(development)> accounts
[
  '0x90955D557d00f97e5163528AC5bf442024b62123',
  '0x3e8Dbc0924d99Bc831695D3dF1c8C94D9A3eB572',
  '0xFD8C95B237e6245F4fD3AE48837a834CBf1b0f31',
  '0x7afB5418B424606d9756aB71781342Eb7a27F8C2',
  '0x5Ed40142AC18395d8cbb9b03459Ca09F2187f243',
  '0x69f532eE56A2DAEf3aBd09AB1c70D4760cB0ead3',
  '0x388F02ACfc201258A27E391c7cffE897400b126B',
  '0x271494a1d455604a97E86e60d2Cf95eb6E9D0d7d',
  '0xAf25e94bD327A21CedaA4Bf2dB655cA9E72452Ca',
  '0x7A1F693BF499F762d11De74E58a83f0bA88538AE'
]

truffle(development)> instance.addStudentDetails("John","White",{from:accounts[1]})

truffle(development)> instance.addStudentScore(1,10,100,100,{from:accounts[1]})