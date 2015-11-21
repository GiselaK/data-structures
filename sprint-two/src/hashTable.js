

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  this._count++;
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]){
    this._storage[index] = [];
  }

  for (var i = 0; i < this._storage[index].length; i++){
    if (this._storage[index][i][0] === k){
      this._storage[index][i][1] = v;
      return;
    }           
  }
  var tuple = [k, v];
  this._storage[index].push(tuple);
  if (this._count / this._limit > 0.75) {
    // double array size limit
    this._limit *= 2;
    // create new storage object
    var tempStorage = {};
    // reassign all values into new storage

    // assign this._storage to the new storage
    this._storage = tempStorage;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage[index];

  if (array){
    for (var i=0; i<array.length; i++){
      if (array[i][0] === k){
        return array[i][1];
      }
    }
  }
  
};

HashTable.prototype.remove = function(k) {
  this._count--;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage[index];
  delete this._storage[index];
  return value;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


