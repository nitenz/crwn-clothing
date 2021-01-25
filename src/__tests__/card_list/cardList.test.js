const cardListValidators = require('./cardList');

test('validate if collection list is not empty', () => {
  expect(cardListValidators.validateCollectionList(['1','2','3'])).toEqual(true);
});

test('validate if collection list is not empty', () => {
  expect(cardListValidators.validateCollectionList([])).toEqual(false);
});

/***********************/

test('validate if item exists in the collection list', () => {
  expect(cardListValidators.itemExists(['1','2','3'],'2')).toEqual(true);
});

test('validate if item exists in the collection list', () => {
  expect(cardListValidators.itemExists(['1','2','3'],'4')).toEqual(false);
});

/*************************/

test('Add item to card list', () => {
  expect(cardListValidators.addItemToCardList(['1','2','3'],'2')).toEqual(false);
});

test('Add item to card list', () => {
  expect(cardListValidators.addItemToCardList(['1','2','3'],'4')).toEqual(true);
});
