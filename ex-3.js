const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getTodoTopics(todos) {
  // Start coding here
  for (let key in todos) {
	return todos[key]
  }
}

console.log(todos.map(getTodoTopics))

//getTodoTopics(todos);
/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/

function getTodosTopics(todos) {
	function todosTopics (todos) {
	for (let key in todos) {
		return todos[key]
	  }
	}
	return todos.map(todosTopics)
}

console.log(getTodosTopics(todos))