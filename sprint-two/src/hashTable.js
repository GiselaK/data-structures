var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._items = 0;
};

HashTable.prototype.insert = function(k, v) {
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
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get current array at index
  var currentIndexArray = this._storage.get(index);
  var value;
  // loop over arrayatindex
  for (var i = 0; i < currentIndexArray.length; i++) {
    // if k equals arrayatindex[i][0]
    if (currentIndexArray[i][0] === k){
      // splice tupil out of array
      value = currentIndexArray.splice(i, 1);
    }
  }
  // set (index, spliced array)
  this._storage.set(index, currentIndexArray);
  // counter --
  this._items--;
  // return val
  return value[1];
};


