const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(todos) {
  // Start coding here
  for (let key in todos) {
    if (todos[key] === true) {
    return todos[key]
    }
    }
}



let result = todos.filter(getCompletedTodo)
console.log(result)

//getCompletedTodo(todos);
/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/

function getCompletedTodoLists (todos) {
function completedTodo(todos) {
  for (let key in todos) {
    if (todos[key] === true) {
      return todos[key]
      }
    }
  } 
  return todos.filter(completedTodo)
}

console.log(getCompletedTodoLists(todos))
