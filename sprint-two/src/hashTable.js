var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._items = 0;
};

HashTable.prototype.rehash = function () {
  // create new storage object
  var tempStorage = LimitedArray(this._limit);
  var index, newIndexArray;
  // loop over all hash indices
  this._storage.each(function (indexArray) {
    // loop over each index array
    _.each(indexArray, function (tuple) {
      // put each key through hash function to generate a new index
      index = getIndexBelowMaxForKey(tuple[0], this._limit);

      // get array at index of new storage object
      newIndexArray = tempStorage.get(index);

       // check if there's NOT an array at index
      if (!newIndexArray) {
           // create an empty array at index
           newIndexArray = [];
      }
      // push tuple to array 
      newIndexArray.push(tuple);
      
      // set updated array into index of new storage object
      tempStorage.set(index, newIndexArray);
    });
  });

  // update reference to new storage
  this._storage = tempStorage;
};

HashTable.prototype.insert = function (k, v) {
  this._count++;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  // get current array at index
  var currentIndexArray = this._storage.get(index);

  // if there's nothing at the index, create a new array
  if (!currentIndexArray){
    currentIndexArray = [];
  }

  // check for collisions
  var collision = false;
  // loop through currentIndexArray 
  for (var i = 0; i < currentIndexArray.length; i++) {
    // check each key to see if it matches our new key
    if (k === currentIndexArray[i][0]){
      // replace value associated with the key
      currentIndexArray[i][1] = v;
      collision = true;
    }
  }

  // push our current tuple into array at index
  if (!collision){
    currentIndexArray.push(tuple);
    this._items++;

    // check if it needs rehashing
    if (this._items / this._limit > 0.75) {
      // double limit
      this._limit *= 2;
      // rehash
      this.rehash();
    }
  }
  // set index with new array
  this._storage.set(index, currentIndexArray);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get nested array at index
  var arrayAtIndex = this._storage.get(index);

  if (!arrayAtIndex) {
    return;
  }

  // loop through array at current index
  for (var i = 0; i < arrayAtIndex.length; i++) {
    // if k matches the stored key 
    if (arrayAtIndex[i][0] === k){
      // return value 
      return arrayAtIndex[i][1];
    }
    
  }
};

HashTable.prototype.remove = function(k) {
  this._count--;
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get current array at index
  var currentIndexArray = this._storage.get(index);
  var value;
  // loop over arrayatindex
  if (currentIndexArray) {
    for (var i = 0; i < currentIndexArray.length; i++) {
      // if k equals arrayatindex[i][0]
      if (currentIndexArray[i][0] === k){
        // splice tupil out of array
        value = currentIndexArray.splice(i, 1);
      }
    }
  }
  // set (index, spliced array)
  this._storage.set(index, currentIndexArray);
  // counter --
  this._items--;
  // check if needs to be rehashed
  if (this._items / this._limit < 0.25 && this._items > 0) {
    this._limit /= 2;
    this.rehash();
  }
  // return val
  return value ? value[1] : null;
};


