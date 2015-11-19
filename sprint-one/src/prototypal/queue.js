var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = Object.create(queueMethods);
  instance.qSize = 0;
  instance.storage = {};
  _.extend(instance, queueMethods)
  return instance;
};

queueMethods = {};

queueMethods.enqueue = function (value){
  this.qSize++;
  this.storage[this.qSize] = value;
  return value;

}
queueMethods.dequeue = function () {
  if(this.qSize <=0){
    return;
  }
  var value = this.storage[this.qSize];
  delete this.storage[this.qSize];
  this.qSize--; 
  return value;
}
queueMethods.size = function (){
  return this.qSize;
}


