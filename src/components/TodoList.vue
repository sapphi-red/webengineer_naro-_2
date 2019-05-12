<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <div class="todos">
      <todo
        v-for="todo in pendingTodos"
        :key="todo.content"
        :model="todo"
        @changeState="changeTodoState"
      />
    </div>
    <div class="menu">
      <label>
        <input type="text" v-model="newTodoContent" placeholder="内容">
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
      newTodoContent: "",
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        content: this.newTodoContent,
        status: TodoStatus.PENDING,
      });
      this.newTodoContent = "";
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
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex: 0 0;
  padding: 10px;
  margin: 10px 20px 10px;
  background: rgba(0,0,0,.2);
  border-style: solid;
  border-width: 2px;
  border-color: rgba(0,0,0,.5);
  border-radius: 5px;
}
.menu label {
  flex: 1 1 300px;
}
.menu label input {
  width: 100%;
}
.menu button {
  flex: 0 0;
  margin-left: 10px;
  word-break: keep-all;
}
</style>
