var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = Object.create(queueMethods);
  instance.qSize = 0;
  instance.removed = 0;
  instance.storage = {};
  return instance;
};

queueMethods = {};

queueMethods.enqueue = function (value){
  this.qSize++;
  this.storage[this.qSize + this.removed] = value;
  return value;

}
queueMethods.dequeue = function () {
  if(this.qSize <=0){
    return;
  }
  this.removed++;
  var value = this.storage[this.removed];
  delete this.storage[this.removed];
  this.qSize--;
  return value;
}
queueMethods.size = function (){
  return this.qSize;
}


