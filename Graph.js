
// Graph implementation


// class Graph {
//     constructor() {
//       this.adjacencyList = {};
//     }
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) {
//         this.adjacencyList[vertex] = [];
//       }
//     }
//     addEdge(source, destination) {
//       if (!this.adjacencyList[source]) {
//         this.addVertex(source);
//       }
//       if (!this.adjacencyList[destination]) {
//         this.addVertex(destination);
//       }
//       this.adjacencyList[source].push(destination);
//       this.adjacencyList[destination].push(source);
//     }
//     removeEdge(source, destination) {
//       this.adjacencyList[source] = this.adjacencyList[source].filter(vertex => vertex !== destination);
//       this.adjacencyList[destination] = this.adjacencyList[destination].filter(vertex => vertex !== source);
//     }
//     removeVertex(vertex) {
//       while (this.adjacencyList[vertex]) {
//         const adjacentVertex = this.adjacencyList[vertex].pop();
//         this.removeEdge(vertex, adjacentVertex);
//       }
//       delete this.adjacencyList[vertex];
//     }  
//   }

/* ------------------------------------ . ----------------------------------- */

// Breadth First Search

// BFS visits the nodes one level at a time. To prevent visiting the same node more than once, we’ll maintain a visited object.

// Since we need to process the nodes in a First In First Out fashion, a queue is a good contender for the data structure to use. The time complexity is O(V+E).


// function BFS
//    Initialize an empty queue, empty 'result' array & a 'visited' map
//    Add the starting vertex to the queue & visited map
//    While Queue is not empty:
//      - Dequeue and store current vertex
//      - Push current vertex to result array
//      - Iterate through current vertex's adjacency list:
//        - For each adjacent vertex, if vertex is unvisited:
//          - Add vertex to visited map
//          - Enqueue vertex
//    Return result array

/* ----------------------------------- .. ----------------------------------- */

// Depth First Search
// DFS visits the nodes depth wise. Since we need to process the nodes in a Last In First Out manner, we’ll use a stack.

// Starting from a vertex, we’ll push the neighboring vertices to our stack. Whenever a vertex is popped, it is marked visited in our visited object. Its neighboring vertices are pushed to the stack. Since we are always popping a new adjacent vertex, our algorithm will always explore a new level.

// We can also use the intrinsic stack calls to implement DFS recursively. The logic is the same.

// The time complexity is the same as BFS, O(V+E).

// function DFS
//    Initialize an empty stack, empty 'result' array & a 'visited' map
//    Add the starting vertex to the stack & visited map
//    While Stack is not empty:
//      - Pop and store current vertex
//      - Push current vertex to result array
//      - Iterate through current vertex's adjacency list:
//        - For each adjacent vertex, if vertex is unvisited:
//          - Add vertex to visited map
//          - Push vertex to stack
//    Return result array

/* ------------------------------------ . ----------------------------------- */



// Graph.prototype.bfs = function(start) {
//     const queue = [start];
//     const result = [];
//     const visited = {};
//     visited[start] = true;
//     let currentVertex;
//     while (queue.length) {
//       currentVertex = queue.shift();
//       result.push(currentVertex);
//       this.adjacencyList[currentVertex].forEach(neighbor => {
//         if (!visited[neighbor]) {
//           visited[neighbor] = true;
//           queue.push(neighbor);
//         }
//       });
//     }
//     return result;
// }
// Graph.prototype.dfsRecursive = function(start) {
//     const result = [];
//     const visited = {};
//     const adjacencyList = this.adjacencyList;
//     (function dfs(vertex){
//       if (!vertex) return null;
//       visited[vertex] = true;
//       result.push(vertex);
//       adjacencyList[vertex].forEach(neighbor => {
//           if (!visited[neighbor]) {
//             return dfs(neighbor);
//           }
//       })
//     })(start);
//     return result;
// }
// Graph.prototype.dfsIterative = function(start) {
//     const result = [];
//     const stack = [start];
//     const visited = {};
//     visited[start] = true;
//     let currentVertex;
//     while (stack.length) {
//       currentVertex = stack.pop();
//       result.push(currentVertex);
//       this.adjacencyList[currentVertex].forEach(neighbor => {
//         if (!visited[neighbor]) {
//           visited[neighbor] = true;
//           stack.push(neighbor);
//         }
//       });
//     }
//     return result;
// }




