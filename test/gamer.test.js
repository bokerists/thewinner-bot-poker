const tape = require('tape');

const g = require('../libs/gamer');
const gameStateMock = require('./gameStateMock');

tape('Init return a number', function (t) {

  const result = typeof g.init(gameStateMock);
  const expected = typeof 1;

  t.equal(result, expected);

  t.end();
})


tape('Player Card parser', function (t) {

  const result =  g.parsePlayerCards(gameStateMock);
  const expected = true;

  t.equal(result, expected);

  t.end();
})

tape('Get ME', function (t) {

  const result =  g.getMe(gameStateMock).name;
  const expected = 'Marvin';

  t.ok(result, expected);

  t.end();
})