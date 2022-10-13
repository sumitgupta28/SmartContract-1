const ScoreCard = artifacts.require('ScoreCard');

module.exports = function (deployer) {
  let n = 1;
  deployer.deploy(ScoreCard, { from: arguments[2][n] });


};
