<template>
    <div v-show="getTodoItem.id"
        class="my-todo"
        >
           <p>{{getTodoItem.title}}</p>

        <div class="actions">
            <i @click="deleteTodo(getTodoItem.id)" class="fas fa-trash-alt"></i>
            <i @click="updateTodo(getTodoItem.id)" class="fas  fa-save"></i>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    name:'TodoListItem',
    computed: mapGetters(['getTodoItem']),
    created(){
        // this.showTodo()
    },
    methods:{
        ...mapActions(['deleteTodo']),       
    },
    mounted(){
        // console.log(this.$computed)
    }

}
</script>

<style>
.is-complete {
  background: #35495e;
  color: #fff;
}
.my-todo{
    background-color: whitesmoke;
}
.actions{
    justify-content:space-between;
}
</style>
