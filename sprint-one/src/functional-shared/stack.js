var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.stackSize = 0;

  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;
  instance.push = stackMethods.push;
  instance.storage = {}

  return instance;
};

var stackMethods = {
  push: function(value){
    this.stackSize++;
    this.storage[this.stackSize] = value;
    return value;
  },
  pop: function(){
    if(this.stackSize <=0){
      return;
    }
    var value = this.storage[this.stackSize];
    delete this.storage[this.stackSize];  
    this.stackSize--;
    return value;
  },
  size: function(){
    return this.stackSize;
  }
};


