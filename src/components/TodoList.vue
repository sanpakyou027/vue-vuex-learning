<template>
  <div>
    <h3>Todo List</h3>
    <div class="todos">
      <div 
        v-for="todo in getTodos" 
        :key="todo.id" 
        
        class="todo"
        v-bind:class="{'is-complete':todo.completed}">
            <p>{{todo.title}}</p>
            <div class="actions">
                <button>
                     <i @click="showTodo(todo.id)" class="fab fa-angellist"></i>
                </button>
                <button @click="deleteTodo(todo.id)">
                     <i class="fas fa-trash-alt"></i>
                </button>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoList",
  computed: mapGetters(["getTodos"]),
  created(){
      this.fetchTodos()
  },
  methods: {
    ...mapActions(["fetchTodos",'deleteTodo','updateTodo','showTodo']),
    updateStatus(todo){
        // console.log(e)
        const updatedTodo = {
            id:todo.id,
            title:todo.title,
            completed: !todo.completed
        }
        this.updateTodo(updatedTodo)
    },
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.actions{
    display:flex;
    justify-content:space-between;
}

i {
  bottom: 10px;
  right: 10px;
  /* color: #fff; */
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>

