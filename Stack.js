// const array = [1,2,"ameen"]
// array.push(4)
// array.unshift(2)
// array.pop()
// array.shift()
// for(const item of array){
//   console.log(item)
// }
// console.log(array)



//Stack
class Stack {
  constructor(){
    this.items = []
  }

  push(element){
    this.items.push(element)
  }

  pop(){
    return this.items.pop()
  }

  peek(){
    return this.items[this.items.length-1]
  }

  isEmpty(){
    return this.items.length === 0
  }

  size(){
    return this.items.length
  }

  print(){
    console.log(this.items.toString())
  }

}

  const stack = new Stack()

console.log(stack.isEmpty())

stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.size())
console.log(stack.pop())
stack.print()

console.log(stack.peek())