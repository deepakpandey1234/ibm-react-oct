'use strict';

var _redux = require('redux');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// constants for Counter
var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';

// todo = {id:1,title:'',completed:true}

// constants for Todo 
var ADD_TODO = "ADD_TODO";
var COMPLETE_TODO = "COMPLETE_TODO";
var DELETE_TODO = "DELETE_TODO";

//---------------------------------------------

// step-1 : Actions

function increment(value) {
    return { type: INCREMENT, value: value };
}
function decrement(value) {
    return { type: DECREMENT, value: value };
}

function addTodo(title) {
    return { type: ADD_TODO, title: title };
}

function completeTodo(id) {
    return { type: COMPLETE_TODO, id: id };
}

function deleteTodo(id) {
    return { type: DELETE_TODO, id: id };
}

//--------------------------------------------------------------

// step-2 : Reducers

var initialState = {
    count: {
        status: '',
        value: 1
    },
    todos: [{ id: 1, title: 'Live Life', completed: false }]
};

function countReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.count;
    var action = arguments[1];

    console.log('counterReducer');
    switch (action.type) {
        case INCREMENT:
            return state.value + action.value;
        case DECREMENT:
            return state.value - action.value;
        default:
            return state;
    }
}

function todosReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.todos;
    var action = arguments[1];

    console.log('todosReducer');
    switch (action.type) {
        case ADD_TODO:
            {
                var todo = { id: Math.floor(Math.random() * 1000), title: action.title, completed: false };
                return [].concat(_toConsumableArray(state), [todo]);
            }
        case DELETE_TODO:
            {
                return state.filter(function (todo) {
                    return todo.id !== action.id;
                });
            }
        default:
            return state;

    }
}

//--------------------------------------------------------------
// step-3: create store

var rootReducer = (0, _redux.combineReducers)({
    count: countReducer,
    todos: todosReducer
});

var store = (0, _redux.createStore)(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//----------------------------------------------------------------


// View

var spanEle = document.getElementById('count');
store.subscribe(function () {
    var state = store.getState();
    spanEle.innerText = state.count;
});

// store.dispatch(increment(1));
// store.dispatch(increment(10));
// store.dispatch(increment(100));
// store.dispatch(decrement(100));
// store.dispatch(decrement(10));
// store.dispatch(decrement(1));


var incOneBtn = document.querySelector('.btn-primary');
var decOneBtn = document.querySelector('.btn-danger');

incOneBtn.addEventListener('click', function () {});

decOneBtn.addEventListener('click', function () {
    store.dispatch(decrement(1));
});