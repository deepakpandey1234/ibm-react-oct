
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

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


function incrementAsync() {
    return function (dispatch) {
        dispatch({ type: 'COUNTING_BEGINS' });
        // async
        setTimeout(function () {
            dispatch({ type: 'INCREMENT', value: 100 });
        }, 5000)
    }
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
        case "COUNTING_BEGINS": {
            return Object.assign({}, state, { status:"counting.." })
        }
        case INCREMENT:
            return Object.assign({}, state, { value:state.value + action.value ,status:''})
        case DECREMENT:
            return Object.assign({}, state, { value:state.value - action.value })
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

//let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let store = createStore(rootReducer, applyMiddleware(ReduxThunk));
//----------------------------------------------------------------


// View

let spanEle = document.getElementById('count');
let spanStatus = document.getElementById('status');

store.subscribe(function () {
    let state = store.getState();
    console.dir(state);
    spanStatus.innerText = state.count.status
    spanEle.innerText = state.count.value;
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
    // store.dispatch(increment(1));
    store.dispatch(incrementAsync());
});

decOneBtn.addEventListener('click', function () {
    store.dispatch(decrement(1));
});