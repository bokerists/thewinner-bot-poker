
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

    let river = cards.length === 5;
    let turn = cards.length === 4;
    let preRiver = cards.length < 5;
    let preTurn = cards.length < 4;
    let preFlop = cards.length < 3;

    if (carloBot.hasPoker(cards)) {
      return Infinity;
    }

    if (g.activePlayers(gs) === 2 && carloBot.hasCoppia(cards)) {
      return Infinity;
    }

    if (carloBot.hasCoppia(cards) || carloBot.hasTris(cards) || carloBot.hasPoker(cards)
   || carloBot.hasFull(cards)  || carloBot.hasDoppiaCoppia(cards) || carloBot.hasColore(cards)) {
      bet = gs.minimumRaiseAmount;
    }

    if (preFlop && !carloBot.sklanskyCluster(playerCards) >= 6) {
      return 0;
    }

    return bet | gs.callAmount;

    console.log('Current cards:', cards);

  }

}

module.exports = g;
