var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.qSize = 0;
  this.removed = 0;
};
Queue.prototype.enqueue = function (value){
  this.qSize++;
  this.storage[this.qSize+this.removed] = value;
  return value;
}
Queue.prototype.dequeue = function  () {
  if(this.qSize <= 0){
    return;
  }
  this.removed++;
  var value = this.storage[this.removed];
  delete this.storage[this.removed]
  this.qSize--;
  return value;
}
Queue.prototype.size = function (){
  return this.qSize;
}

