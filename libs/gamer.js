const g = {

  getMe(gs) {
    return gs.players.reduce(function (result, player) {
      if (player.id == gs.me) {
        return player;
      }
      return result;
    }, { name: ''})
  },

  parsePlayerCards(gs) {
    return true;
  },

  init(gs) {

    const me = g.getMe(gs);
    const playerCards = g.parsePlayerCards(gs)



    return gs.minimumRaiseAmount;
  }

}


module.exports = g;
