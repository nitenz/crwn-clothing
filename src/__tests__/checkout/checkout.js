
   function validateCollectionList(collectionList){
      return collectionList.length > 0 ? true : false;
   }
   function validatePaymentData(paymentData){
      return paymentData.cardNumber && paymentData.codeCvv && paymentData.expirationDate ? true : false;
   }
   function validateTransaction(paymentData){
      const payment = {
         'cardNumber': '4242 4242 4242 4242',
         'expirationDate': '01/20',
         'codeCvv': '123'
        };
     if( validatePaymentData(paymentData) ){
        if( payment.cardNumber === paymentData.cardNumber && paymentData.expirationDate === payment.expirationDate && paymentData.codeCvv===payment.codeCvv){
         return true;
        }else{
         return false;
        }
     }
   }

const checkoutValidators = {
   'validateCollectionList' : validateCollectionList,
   'validatePaymentData': validatePaymentData,
   'validateTransaction': validateTransaction,
}

module.exports = checkoutValidators;