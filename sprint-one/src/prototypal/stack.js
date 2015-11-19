var Stack = function() {
  var instance = Object.create(stackMethods)
  instance.stackSize = 0;
  instance.storage = {};
  return instance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};
stackMethods.push = function  (val) {
  this.stackSize++;
  this.storage[this.stackSize] = val;
  return val;
}
stackMethods.pop = function() {
  var value = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  this.stackSize--;
  this.stackSize = this.stackSize < 0 ? 0: this.stackSize;
  return value;

};
stackMethods.size = function  () {
  return this.stackSize;
}




