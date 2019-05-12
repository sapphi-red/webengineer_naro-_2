<template>
  <div class="todo">
    <div class="name">{{ this.model.name }}</div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    model: Object,
  },
  methods: {}
};
</script>

<style>
.todo {
  background: rgba(0,0,0,.1);
  border-style: solid;
  border-width: 2px;
  border-color: rgba(0,0,0,.1);
  border-radius: 5px;
  padding: 2px 5px;
  margin: 5px;
}
</style>
