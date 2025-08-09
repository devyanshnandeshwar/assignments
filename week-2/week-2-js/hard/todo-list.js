/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  function add(todo) {
    if (!todo || typeof todo !== 'string') {
      throw new Error
    }
  }

  function remove(indexOfTodo) {}

  function update(index, updatedTodo) {}
  
  function getAll() {
    return [];
  }
  
  function get(indexOfTodo) {
    return null;
  }

  function clear() {
    // Clear the todo list
  }

}

module.exports = Todo;
