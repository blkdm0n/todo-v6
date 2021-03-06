var todoList = {
  todos: [],
  displayTodos: function () {
    console.log(`My Todos:`)
    if (!this.todos.length) {
      console.log(`Your todo list is empty!`);
    } else {
        for (let i = 0; i < this.todos.length; i++) {
          if (this.todos[i].completed === true) {
            console.log(`(X) ${this.todos[i].todoText}`);
          } else {
            console.log(`( ) ${this.todos[i].todoText}`)
          }
      }
    }
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },
  changeTodo: function (oldTodo, newTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].todoText === oldTodo) {
        this.todos[i].todoText = newTodo;
      }
    }
    this.displayTodos();
  },
  toggleCompleted: function (completedTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].todoText === completedTodo) {
        this.todos[i].completed = !this.todos[i].completed;
      }
    }
    this.displayTodos();
  },
  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //Get number of completed todos.
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();

  },
  deleteTodo: function (deletedTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].todoText === deletedTodo) {
        this.todos.splice(i, 1);
      }
    }
    this.displayTodos();
  }
}