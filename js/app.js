var app = angular.module('todoApp', []);
  
  app.controller('todoController',function(){

    var todoList = this;
    todoList.todos = [
      { name: 'interview with Tonic', done: true },
      { name: 'flex angular muscles', done: true },
      { name: 'learn to play the banjo', done: false }
    ];

    todoList.addTodo = function(){
      todoList.todos.push({ name: todoList.todoName, done: false })
      todoList.todoName = ''
    };

  })