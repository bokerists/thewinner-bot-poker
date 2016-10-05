
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

  activePlayers(gs) {
    return gs.players.filter(g => g.status === 'active').length;
  },

  init(gs) {

    let bet = 0;

    const me = g.getMe(gs);
    const playerCards = g.parsePlayerCards(gs);
    const tableCards = gs.commonCards;
    const cards = playerCards.concat(tableCards);

    if (carloBot.hasPoker(cards)) {
      return Infinity;
    }

    if (g.activePlayers(gs) === 2 && carloBot.hasCoppia(cards)) {
      return Infinity;
    }

    console.log('Current cards:', cards);

    return bet | gs.minimumRaiseAmount;
  }

}

module.exports = g;
