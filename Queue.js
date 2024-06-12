// Queue

class Queue{
  constructor(){
    this.items = []
  }

enqueue(element){
  this.items.push(element)
}

  dequeue(){
    return this.items.shift()
  }

  isEmpty(){
    return this.items.length === 0
  }
  peek(){
    if(!this.isEmpty()){
      return this.items[0]
    }
    return null
  }

  size(){
    return this.items.length
  }
  print(){
    console.log(this.items.toString())
  }
}

const que = new Queue()
  console.log(que.isEmpty())

que.enqueue(50)
que.enqueue(60)
que.enqueue(70)
que.enqueue(90)
console.log(que.size())
que.dequeue()
que.print()
console.log(que.peek())