var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.queueSize = 0;
  instance.totalRemoved = 0;

  instance.storage = {};

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  dequeue: function(){
    if (this.queueSize <= 0){
      return;
    }
    this.queueSize--;
    this.totalRemoved++;
    var value = this.storage[this.totalRemoved];
    delete this.storage[this.totalRemoved];
    return value;
  },
  enqueue: function(value){
    this.queueSize++;
    this.storage[this.queueSize + this.totalRemoved] = value;
    return value;
  },
  size: function(){
    return this.queueSize;
  }
};


