import axios from "axios";

// import axios from 'axios'

const state = {
    todos: [
    ],
    todo:{
        id:null,
        title:null,
        status:false,
        completed:false
    }
}

const getters = {
    getTodos: (state) => state.todos,
    getTodoItem: (state) => {
        console.log("gettodoitem",state.todo)    
        return state.todo
    }
}

const actions = {
    async fetchTodos({
        commit
    }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos', response.data);
    },
    async showTodo({commit},id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        console.log("onShow",response.data)
        commit('viewTodo',response.data)
    },
    async addTodo({
        commit
    }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
        commit('newTodo', response.data)

    },
    async deleteTodo({commit},id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('removeTodo',id)
    },
    async filterTodos({commit},e){
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
          );
        console.log(limit)
        // console.log()
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('setTodos',response.data)
    },
    async updateTodo({commit},todo){
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,todo)
        commit('updateTodo', response.data);
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todos) => state.todos.unshift(todos),
    viewTodo: (state,todo) => (state.todo = todo),
    removeTodo:(state,id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo:(state,updatedTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id)
        if(index !== -1)
            state.todos.splice(index,1,updatedTodo)
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}