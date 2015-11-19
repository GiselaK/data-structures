var LinkedList = function() { // Linked List class
  var list = {}; // instance of LinkedList Class
  list.head = null; // instance property head equals null
  list.tail = null; // instance property head equals null

  list.addToTail = function(value) {
    // list.head = !list.tail ? null : value;
    if (!list.tail){ // no values in the list
      list.head = Node(value); 
      list.tail = Node(value);
    } else if (!list.head.next) { // 1 value in the list, stored as both head and tail
      list.head.next = Node(value);
      // this.tail.next = Node(value);
      list.tail = Node(value);
    } else {                      // more than 1 item in list
      // list.tail.next = Node(value);
      list.head = list.head.next
      list.tail = Node(value);
    }
    return list.tail;
  };

  list.removeHead = function() {
    var value = list.head.value;
    list.head = list.head.next;  
    return value;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
