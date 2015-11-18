var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var oldestIndex = 0;
  var newestIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    newestIndex++;
    size++;
    storage[newestIndex] = value;
    console.log(storage);
    return value;
  };

  someInstance.dequeue = function() {
    // var keys = Object.keys(storage);
    if (size === 0) {
      return;
    }
    size--;
    // var value = storage[keys[0]];
    // delete storage[keys[0]];
    // return value;
    oldestIndex++;
    var value = storage[oldestIndex];
    delete storage[oldestIndex];
    console.log(storage);
    return value;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
