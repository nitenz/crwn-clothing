const checkoutValidators = require('./checkout');

describe('Checkout', () => {
  test('validate if collection list is not empty', () => {
    expect(checkoutValidators.validateCollectionList(['1','2','3'])).toEqual(true);
  });
  test('validate if collection list is not empty', () => {
    expect(checkoutValidators.validateCollectionList([])).toEqual(false);
  });

  /***********************/
  test('validate if all fields from payment data are filled', () => {
    const payment = {
      'cardNumber': '4242 4242 4242 4242',
      'expirationDate': '01/20',
      'codeCvv': '123'
    };
    expect(checkoutValidators.validatePaymentData(payment)).toEqual(true);
  });
  test('validate if all fields from payment data are filled', () => {
    const payment1 = {
      'cardNumber': '4242 4242 4242 4242',
      'expirationDate': '01/20',
      'codeCvv': ''
    };
    expect(checkoutValidators.validatePaymentData(payment1)).toEqual(false);
  });

  /*************************/
  test('Add item to card list', () => {
    const payment = {
      'cardNumber': '4242 4242 4242 4242',
      'expirationDate': '01/20',
      'codeCvv': '124'
    };
    expect(checkoutValidators.validateTransaction(payment)).toEqual(false);
  });
  test('Add item to card list', () => {
    const payment = {
      'cardNumber': '4242 4242 4242 4242',
      'expirationDate': '01/20',
      'codeCvv': '123'
    };
    expect(checkoutValidators.validateTransaction(payment)).toEqual(true);
  })
});