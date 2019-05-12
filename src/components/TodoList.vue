<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <div class="todos">
      <todo
        v-for="todo in pendingTodos"
        :key="todo.name"
        :model="todo"
        @changeState="changeTodoState"
      />
    </div>
    <div class="menu">
      <label>
        <input type="text" v-model="newTodoName" placeholder="内容">
      </label>
      <button @click="addTodo">追加</button>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import TodoStatus from "../TodoStatus.js";

export default {
  name: "TodoList",
  components: {
    Todo
  },
  data() {
    return {
      todos: [],
      newTodoName: "",
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        name: this.newTodoName,
        status: TodoStatus.PENDING,
      });
      //this.newTodoName = "";
    },
    changeTodoState(todo, newState) {
      todo.status = newState;
    }
  },
  computed: {
    pendingTodos() {
      return this.todos.filter(todo => todo.status === TodoStatus.PENDING);
    },
  },
};
</script>

<style>
h1 {
  margin: 10px;
}
.todo-list {
  display: flex;
  flex-direction: column;
  height: calc(100% - 30px);
}
.todos {
  flex: 1 0;
  margin: 15px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.todo {
  background: rgba(0,0,0,.1);
  border-style: solid;
  border-width: 2px;
  border-color: rgba(0,0,0,.1);
  border-radius: 5px;
  padding: 2px 5px;
  margin: 5px;
}
.menu {
  flex: 0 0;
  margin: 0 30px 20px;
}
</style>
