
const carloBot = require('botpoker-card-detection')

const g = {

  getMe(gs) {
    return gs.players.reduce(function (result, player, index) {
      if (parseInt(gs.me) === index) {
        return player;
      }
      return result;
    }, { name: ''})
  },

  parsePlayerCards(gs) {
    return this.getMe(gs).cards;
  },

  init(gs) {

    let bet = 0;

    const me = g.getMe(gs);
    const playerCards = g.parsePlayerCards(gs);
    const tableCards = gs.commonCards;
    const cards = playerCards.concat(tableCards)

    console.log('Current cards:', cards);



    return bet | gs.minimumRaiseAmount;
  }

}

module.exports = g;
