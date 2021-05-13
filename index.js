class SortedList {
  constructor() {
    //should have items and length properties
    this.items = []
    this.length = 0
  }
  // #add(x)
  // should add a single value to SortedList
  // should add a third value to SortedList
  // should add a value while keeping the list sorted
  add(x) {
    this.items.push(x)

    this.items.sort((a,b)=>a-b)

    this.length = this.items.length
  }

  // #get(i)
  // should return an OutOfBounds exception if there is no element in that position
  // should return the element in that position

  get(i) {
    if (this.items.indexOf(i) == -1) {
      throw new Error('OutOfBounds')
    }
    else {
      return(this.items.indexOf(i))
    }
  }

  // #max()
  //  should return an EmptySortedList exception if there is no elements in the list
  //  should return the max (highest) value in the list

  max() {
    if(this.items.length >0)
      return this.items[this.items.length - 1]
    else
      throw new Error('EmptySortedList')
  }

  // #min()
  // should return an EmptySortedList exception if there are no elements in the list
  // should return the min (lowest) value in the list

  min() {
    if(this.items.length > 0)
      return this.items[0]
    else
      throw new Error('EmptySortedList')
  }

  
// #avg()
  // should return an EmptySortedList exception if there are no elements
  // should return the average of elements in the list

  avg() {
    if(this.items.length > 0)
      return this.sum() / this.items.length
    else
      throw new Error('EmptySortedList')
   
  }


  // #sum()
  // should return the sum of all elements in the list
  // should return 0 for an empty sorted list
  sum() {
    if(this.items.length >0)
      return this.items.reduce((acc, item) => acc = acc + item, 0)
    else 
      return 0
  }
  
};

module.exports = SortedList;
