var LinkedList = function () { // Linked List class
  var list = {}; // instance of LinkedList Class
  list.head = null; // instance property head equals null
  list.tail = null; // instance property head equals null

  list.addToTail = function (value) {
    var node = Node(value);
    if (!list.tail) {
      // 1. empty list 
      list.head = node;
      list.tail = node;      
    } else {
      // 2. populated list
      // list objs current tails next property equals node(value)
      // tail the node(value)
      this.tail.next = node;
      this.tail = node;      
    }
  };

  list.removeHead = function() {
    if (!list.head) {
      return;
    }
    var value = list.head.value;
    if (!list.head.next && list.head) {
      list.head = null
      list.tail = null;
    } else {
      list.head = list.head.next;  
    }
    return value;
  };

  list.contains = function (target) {
      if (this.value === target) {
        return true;
      }
      else if (!this.next && !this.hasOwnProperty("head")) {
        return false;
      }
      else {
        if (this.head) {
          return list.contains.call(this.head, target);
        } else {
          return list.contains.call(this.next, target);
        }
      }
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
