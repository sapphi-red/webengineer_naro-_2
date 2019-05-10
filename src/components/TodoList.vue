<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <div class="todos">
      <div class="todo" v-for="todo in todos" :key="todo.name">
        <div class="name">{{ todo.name }}</div>
      </div>
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
export default {
  name: "TodoList",
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
      });
      //this.newTodoName = "";
    }
  }
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
