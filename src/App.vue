<template>
  <div id="app">
    <todo-list />
    <div class="footer">
      <p>(C) 翠(green) 2019-</p>
    </div>
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
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}
#app {
  height: 100%;
  width: 100%;
  background: aliceblue;
}
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;
  background: #222222;
  color: #eeeeee;
}
.footer p {
  margin: 0;
  font-size: small;
  padding-left: 15px;
}
</style>
