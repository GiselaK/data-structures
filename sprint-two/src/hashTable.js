

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
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
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage[index];
  delete this._storage[index];
  return value;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


