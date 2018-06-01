import { TodoActionTypes } from '../actionTypes';

const initialState = {
    name: '',
    description: '',
    deadline: 'Wed Mar 25 2015 04:00:00 GMT+0400 (+04)',
    id: null,
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TodoActionTypes.GET_TODOS_RESPONSE:
            return {
                ...state, todos: [...action.data]
            };
        case TodoActionTypes.CHANGE_TODO_NAME:
            return {
                ...state, name: action.name
            };
        case TodoActionTypes.CHANGE_TODO_DESCRIPTION:

            return {
                ...state, description: action.description
            };
        case TodoActionTypes.CHANGE_TODO_DEADLINE:

            return {
                ...state, deadline: action.deadline
            };
        case TodoActionTypes.GET_TODO_BY_ID_RESPONSE:
            return {
                ...state,
                name: action.data.name,
                description: action.data.description,
                deadline: action.data.deadline,
                id: action.data._id
            };
        case TodoActionTypes.CLEAR_TODO_DATA:
            return {
                ...state,
                name: initialState.name,
                description: initialState.description,
                deadline: initialState.deadline,
                id: initialState.id
            };
        default:
            return state;
    }
};
