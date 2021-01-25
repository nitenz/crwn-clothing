
   function validateCollectionList(collectionList){
      return collectionList.length > 0 ? true : false;
   }
   function itemExists(collectionList,item){
      for(var i=0;i<collectionList.length; i++){
         if(collectionList[i] === item ){
            return true;
         }
      }
      return false;
   }
   function addItemToCardList(collectionList,item){
      if( !itemExists(collectionList,item) ){
         collectionList.push(item);
         return true;
      }else{
         return false;
      }
   }

const cardListValidators = {
   'validateCollectionList' : validateCollectionList,
   'itemExists': itemExists,
   'addItemToCardList': addItemToCardList,
}

module.exports = cardListValidators;