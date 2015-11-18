var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
    
    return value;
  };

  someInstance.pop = function() {
    if (size === 0){
      return;
    }
    console.log(size);
    var val = storage[size];
    storage[size] = undefined;
    size--;
    return val;
  };

  someInstance.size = function() {
    if (size < 0){
      return 0;
    }
    return size;
  };

  return someInstance;
};
