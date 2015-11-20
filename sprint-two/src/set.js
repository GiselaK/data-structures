var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // only add unique values
  if(this._storage.indexOf(item)=== -1){
    this._storage.push(item)
  }
};

setPrototype.contains = function(item) {
  if(this._storage.indexOf(item) > -1){
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  if(index > -1){
    this._storage[index] = undefined;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
