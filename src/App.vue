<template>
  <div id="app">
    <h1>Todo List</h1>
    <todo-list/>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "app",
  components: {
    TodoList
  }
};
</script>

<style>
</style>
