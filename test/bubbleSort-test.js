// npm install mocha npm install chai

const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')


describe('bubbleSort', function(){
  context('orders an array', function (){
    it('orders any length array in ascending alpha/numberic order', function(){
      assert.deepEqual(bubbleSort(["d", "b", "c", "a"]), ["a", "b", "c", "d"])
    })
  })
})
