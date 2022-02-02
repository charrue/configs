<script>
export default {
  name: "TodoApp",
  data() {
    return { todoItems: [] };
  },
};
</script>

<style>
.todo-item {
  background-color: #eef;
}
.todo-item--done {
  background-color: #3fb983;
  color: #fff;
}
</style>
