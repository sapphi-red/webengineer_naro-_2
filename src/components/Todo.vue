<template>
  <div class="todo" :class="{ loading: model.waitingResponse }">
    <div class="content">{{ model.content }}</div>
    <button
      class="button-done"
      v-if="isPending"
      :disabled="model.waitingResponse"
      @click="$emit('changeStatus', model, TodoStatus.DONE)"
    >
      完了
    </button>
    <button
      class="button-delete"
      v-if="isDone"
      :disabled="model.waitingResponse"
      @click="$emit('changeStatus', model, TodoStatus.DELETED)"
    >
      削除
    </button>
    <div class="error" v-if="model.error">同期エラー</div>
  </div>
</template>

<script>
import TodoStatus from "../TodoStatus.js";

export default {
  name: "Todo",
  data() {
    return {
      TodoStatus
    };
  },
  props: {
    model: Object
  },
  methods: {},
  computed: {
    isPending() {
      return this.model.status === TodoStatus.PENDING;
    },
    isDone() {
      return this.model.status === TodoStatus.DONE;
    }
  }
};
</script>

<style>
.todo {
  display: flex;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.7);
  border-style: solid;
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 2px 5px;
  margin: 5px;
}
.todo.loading {
  opacity: 0.3;
}
.content {
  flex: 1 1;
  word-break: break-all;
  word-break: break-word;
}
button {
  flex: 0 0;
  word-break: keep-all;
  cursor: pointer;
}
.error {
  width: 100%;
  background: red;
}
</style>
