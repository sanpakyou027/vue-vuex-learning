<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit" >
        <input type="text" class="todo-add" v-model="title" placeholder="Add todo..">
        <button class="todo-btn-add">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: null
    };
  },
  methods:{
      ...mapActions(['addTodo']),
      onSubmit(e){
          e.preventDefault()
          this.addTodo(this.title)
      }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
.todo-add {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
.todo-btn-add {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>