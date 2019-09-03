class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    //if empty then make it head
    if (!this.head) {
      this.head = node;
    } else {
      //traverset through the list if not empty
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  // insert in between
  insertAt(data, index) {
    //edge cases
    //if index does not exist or out of range, return
    if (index > 0 && index > this.size) {
      return;
    }
    //if first index
    if (index === 0) {
      // this.head = new Node(data, this.head)
      // this.size++
      //or:
      this.inserFirst(data);
      return;
    }
    //else if multiple nodes exist:
    const node = new Node(data, this.head);
    let current, previous;
    //set current to first node
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; //node before the index we want to insert
      count++;
      current = current.next; //node after the index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      //move along in the list
      current = current.next;
    }
    return null;
  }

  // remove at index
  removeAt(index) {
    //check if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    //Remove First
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // clear the list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // print the list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
// ll.insertAt(500, 2)

// ll.printListData()
ll.getAt(10);
// console.log(ll)
