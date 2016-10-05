const tape = require('tape');

const g = require('../libs/gamer');
const player = require('../player');
const gameStateMocker = require('./gameStateMock');
const cardsMock = require('./cards');

tape('Player Work', function (t) {

  const gameStateMock = gameStateMocker.get();
  
  const result = typeof player.bet(gameStateMock);
  const expected = typeof 1;

  t.equal(result, expected);

  t.end();
})

tape('Init return a number', function (t) {
  const gameStateMock = gameStateMocker.get();

  const result = typeof g.init(gameStateMock);
  const expected = typeof 1;

  t.equal(result, expected);

  t.end();
})


tape('Player Card', function (t) {
  const gameStateMock = gameStateMocker.get();

  const result =  typeof g.parsePlayerCards(gameStateMock);
  const expected = typeof [];

  t.equal(result, expected);

  t.end();
})

tape('Get ME', function (t) {
  const gameStateMock = gameStateMocker.get();

  const result =  g.getMe(gameStateMock).name;
  const expected = 'Marvin';

  t.ok(result, expected);

  t.end();
})
