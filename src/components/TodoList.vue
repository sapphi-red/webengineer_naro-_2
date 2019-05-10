<template>
  <div>
    <div class="todos" v-for="todo in todos" :key="todo.name">
      <div class="todo">
        <div class="name">{{ todo.name }}</div>
      </div>
    </div>
    <div>
      <p>Todoを追加する</p>
      <label>
        内容
        <input type="text" v-model="newTodoName">
      </label>
      <button @click="addTodo">add</button>
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
      this.newTodoName = "";
    }
  }
};
</script>

<style>
</style>
