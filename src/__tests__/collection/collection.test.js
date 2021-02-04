const validateCollectionList = require('./collection');


describe('<ContactsRoute />', () => {
  test('validate if collection list is not empty', () => {
    expect(validateCollectionList(['1','2','3'])).toEqual(true);
  });
  test('validate if collection list is not empty', () => {
    expect(validateCollectionList([])).toEqual(false);
  })
});