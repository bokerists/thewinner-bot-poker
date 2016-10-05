const mock = {
    "tournamentId": "56ec25834c87d903006f3f8b",
    "game": 1,
    "round": 1,
    "spinCount": 0,
    "sb": 25,
    "buyin": 500,
    "pot": 75,
    "sidepots": [],
    "commonCards": [],
    "players": [
        {
            "id": "57f52baa22606f0003da625d",
            "name": "Arale",
            "status": "active",
            "cards": [
                {
                    "rank": "K",
                    "type": "C"
                },
                {
                    "rank": "2",
                    "type": "H"
                }
            ],
            "chips": 500,
            "chipsBet": 0
        },
        {
            "id": "57f52baa22606f0003da625d",
            "name": "Marvin",
            "status": "out",
            "cards": [
                {
                    "rank": "10",
                    "type": "S"
                },
                {
                    "rank": "7",
                    "type": "D"
                }
            ],
            "chips": 500,
            "chipsBet": 0
        },
        {
            "id": "57f52baa22606f0003da625d",
            "name": "R2D2",
            "status": "folded",
            "cards": [
                {
                    "rank": "9",
                    "type": "H"
                },
                {
                    "rank": "J",
                    "type": "H"
                }
            ],
            "chips": 500,
            "chipsBet": 0
        },
        {
            "id": "57f52baa22606f0003da625d",
            "name": "Bender",
            "status": "active",
            "cards": [
                {
                    "rank": "A",
                    "type": "S"
                },
                {
                    "rank": "6",
                    "type": "S"
                }
            ],
            "chips": 475,
            "chipsBet": 25
        },
        {
            "id": "57f52baa22606f0003da625d",
            "name": "Emilio",
            "status": "active",
            "cards": [
                {
                    "rank": "3",
                    "type": "D"
                },
                {
                    "rank": "4",
                    "type": "S"
                }
            ],
            "chips": 450,
            "chipsBet": 50
        }
    ],
    "db": 2,
    "me": 1,
    "callAmount": 50,
    "minimumRaiseAmount": 100
};

module.exports = {

  get() {
    return Object.assign({}, mock);
  },

  setPlayerCards(cards) {
    const mock = Object.assign({}, mock);

    mock.players[1].cards = cards;

    return mock;
  },

  setCommonCards() {
    return Object.assign({}, mock, { commonCards: cards });
  }

};
