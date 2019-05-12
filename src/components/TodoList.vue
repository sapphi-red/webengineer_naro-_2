<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <div class="list-selector">
      <div
        class="list-type"
        :class="{ selected: isPendingShown }"
        @click="changeShownListType(TodoStatus.PENDING)"
      >
        未完了
      </div>
      <div
        class="list-type"
        :class="{ selected: isDoneShown }"
        @click="changeShownListType(TodoStatus.DONE)"
      >
        完了
      </div>
    </div>
    <div class="todos">
      <todo
        v-for="todo in shownTodos"
        :key="todo.content"
        :model="todo"
        @changeStatus="changeTodoStatus"
      />
    </div>
    <div class="menu">
      <div class="error" v-if="isNewTodoContentError">
        <p v-if="isNewTodoContentEmpty">内容を入力してください。</p>
        <p v-if="isNewTodoContentDuplicated">ほかのTodoと重複しています。</p>
      </div>
      <label>
        <input type="text" v-model="newTodoContent" placeholder="内容" />
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
      TodoStatus,
      todos: [],
      shownListType: TodoStatus.PENDING,
      newTodoContent: "",
      isNewTodoContentEmpty: false,
      isNewTodoContentDuplicated: false
    };
  },
  methods: {
    changeShownListType(newType) {
      this.shownListType = newType;
    },
    addTodo() {
      this.updateValidation();
      if (this.isNewTodoContentError) return;

      this.todos.push({
        content: this.newTodoContent,
        status: TodoStatus.PENDING
      });
      this.newTodoContent = "";
    },
    changeTodoStatus(todo, newStatus) {
      if (newStatus === TodoStatus.DELETED) {
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
        return;
      }

      todo.status = newStatus;
    },
    updateValidation() {
      this.isNewTodoContentEmpty = this.newTodoContent === "";
      this.isNewTodoContentDuplicated = this.todos.some(
        todo => todo.content === this.newTodoContent
      );
    }
  },
  computed: {
    shownTodos() {
      return this.todos.filter(todo => todo.status === this.shownListType);
    },
    isPendingShown() {
      return this.shownListType === TodoStatus.PENDING;
    },
    isDoneShown() {
      return this.shownListType === TodoStatus.DONE;
    },
    isNewTodoContentError() {
      return this.isNewTodoContentEmpty || this.isNewTodoContentDuplicated;
    }
  }
};
</script>

<style>
h1 {
  margin: 0;
}
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 30px);
  padding: 15px;
}
.list-selector {
  display: flex;
  flex: 0 0;
  width: 100%;
  max-width: 600px;
  margin: 10px 0;
}
.list-type {
  flex: 1 0;
  padding: 5px;
  background: rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
}
.list-type.selected {
  background: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 1px;
}
.todos {
  flex: 1 0;
  width: 100%;
  margin: 15px 0;
  background: rgba(0, 0, 0, 0.3);
  overflow-x: hidden;
  overflow-y: scroll;
}
.todo {
  background: rgba(255, 255, 255, 0.7);
  border-style: solid;
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 2px 5px;
  margin: 5px;
}
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex: 0 0;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
.menu .error {
  flex: 1 0 100%;
  padding: 5px;
  margin-bottom: 5px;
  background: #ddbbbb;
  border-style: solid;
  border-width: 1px;
  border-color: #cc3333;
}
.menu .error p {
  margin: 0;
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
  cursor: pointer;
}
</style>
