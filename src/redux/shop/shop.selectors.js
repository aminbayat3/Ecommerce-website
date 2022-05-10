import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector( 
    [selectCollections],
    (collections) => Object.keys(collections).map((key) => {
    // collections[key].items = collections[key].items.filter((item, idx) => idx < 4 ); //by doing this we dont have to filter the items inside of CollectionPreview commponent
        return collections[key];
        // return { ...Object.values(collections)[i] }
    })
)

export const selectCollection = (collectionUrlParam) => (
    createSelector(
        [selectCollections],
        (collections) => collections[collectionUrlParam]  //you can do it with title
    ) 
);   //VERY IMPORTANT::::** if our collections have 1000 elements the problem with find and in general the problem with saving the collection data here is that it should for example search for a specific item after checking 999 items in the worst case senerio. this is the flaw in storing data that we need to query individual elements for inside of an array.
//instead what we can do  is we can store it in an object instead. this concept of storing lists of elements inside of an object instead of an array is called Data Normalization. so now we can turn all of our data into objects(nested objects instead of array of objects) this is something that we do in firebase and basically in nosql databases
// and the fact that our items and sections are still arrays is okay because we probably are not going to need an individual element inside of these arrays; if we for example had an individual product page where maybe we wanted the specific item then we might do the same things and convert the items and sections into object. it's just as fast searching for the last one as it is searching for the first one.  

// const MAP_COLLECTION_ITEM = {
//  'hats': 1,
//  'sneakers': 2,
//  'jackets': 3,
//  'womens': 4,
//  'mens': 5
// }
// (collections) => collections.find((collection) => collection.id === MAP_COLLECTION_ITEM[collectionUrlParam])