<template>
  <div id="app">
      <div class="container">
          <AddTodo />
          <FilterTodos />
          <div class="container-fluid">
              <div class="col-80">
                <TodoList/>
            </div>
            <div class="col-20">
                <TodoListItem />
            </div>
          </div>
          
      </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import  FilterTodos from './components/FilterTodos'
import TodoListItem from './components/TodoListItem'

export default {
  name: 'app',
  components: {
    TodoList,
    AddTodo,
    FilterTodos,
    TodoListItem
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
.container-fluid{
    display:inline-flex;
}
.col-80 {
    width:80%;
}
.col-20 {
    width:20%;
}
</style>
