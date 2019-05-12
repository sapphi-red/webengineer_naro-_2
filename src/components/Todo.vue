<template>
  <div class="todo">
    <div class="content">{{ model.content }}</div>
    <button class="button-done" @click="$emit('changeState', model, TodoStatus.DONE)">done</button>
  </div>
</template>

<script>
import TodoStatus from "../TodoStatus.js";

export default {
  name: "Todo",
  data() {
    return {
      TodoStatus,
    }
  },
  props: {
    model: Object,
  },
  methods: {},
};
</script>

<style>
.todo {
  display: flex;
  background: rgba(0,0,0,.1);
  border-style: solid;
  border-width: 2px;
  border-color: rgba(0,0,0,.1);
  border-radius: 5px;
  padding: 2px 5px;
  margin: 5px;
}
.content {
  flex: 1 1;
  word-break: break-all;
  word-break: break-word;
}
button {
  flex: 0 0;
}
</style>
