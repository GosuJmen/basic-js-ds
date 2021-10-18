const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


module.exports = class BinarySearchTree {

  constructor() {
    this.data = null;
    this.left = null;
    this.right = null;
  }

  root() {
    if(this.data === null) {
      return null
    } else {
      return this
    }
  }

  add(data) {
    if(this.data === null) {
      this.data = data
    } else if(this.data === data) {
      return
    } else if(this.data < data) {
      this.left = whosNeht(this.left, data)
    } else if(this.data > data) {
      this.right = whosNeht(this.right, data)
    } 
    function whosNeht(node, data) {
      if(!node) {
        return new Node(data)
      }

      if(node.data === data) {
        return null
      }

      if(data < node.data) {
        node.left = whosNeht(node.left)
      } else {
        node.right = whosNeht(node.right, data)
      }
      return null
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}