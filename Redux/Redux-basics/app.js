
import { createStore, combineReducers } from 'redux';


// constants for Counter
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


// todo = {id:1,title:'',completed:true}

// constants for Todo 
const ADD_TODO = "ADD_TODO"
const COMPLETE_TODO = "COMPLETE_TODO"
const DELETE_TODO = "DELETE_TODO"

//---------------------------------------------

// step-1 : Actions

function increment(value) {
    return { type: INCREMENT, value };
}
function decrement(value) {
    return { type: DECREMENT, value };
}




function addTodo(title) {
    return { type: ADD_TODO, title }
}

function completeTodo(id) {
    return { type: COMPLETE_TODO, id }
}

function deleteTodo(id) {
    return { type: DELETE_TODO, id }
}

//--------------------------------------------------------------

// step-2 : Reducers

let initialState = {
    count: {
        status: '',
        value: 1
    },
    todos: [
        { id: 1, title: 'Live Life', completed: false }
    ]
};

function countReducer(state = initialState.count, action) {
    console.log('counterReducer');
    switch (action.type) {
        case INCREMENT:
            return state.value + action.value;
        case DECREMENT:
            return state.value - action.value;
        default: return state;
    }
}

function todosReducer(state = initialState.todos, action) {
    console.log('todosReducer');
    switch (action.type) {
        case ADD_TODO: {
            let todo = { id: Math.floor(Math.random() * 1000), title: action.title, completed: false }
            return [...state, todo];
        }
        case DELETE_TODO: {
            return state.filter(todo => todo.id !== action.id);
        }
        default:
            return state;

    }
}


//--------------------------------------------------------------
// step-3: create store

let rootReducer = combineReducers({
    count: countReducer,
    todos: todosReducer
});

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//----------------------------------------------------------------


// View

let spanEle = document.getElementById('count');
store.subscribe(function () {
    let state = store.getState();
    spanEle.innerText = state.count;
})

// store.dispatch(increment(1));
// store.dispatch(increment(10));
// store.dispatch(increment(100));
// store.dispatch(decrement(100));
// store.dispatch(decrement(10));
// store.dispatch(decrement(1));


let incOneBtn = document.querySelector('.btn-primary');
let decOneBtn = document.querySelector('.btn-danger');

incOneBtn.addEventListener('click', function () {

});

decOneBtn.addEventListener('click', function () {
    store.dispatch(decrement(1));
});