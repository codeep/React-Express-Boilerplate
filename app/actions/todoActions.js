import * as actionTypes from '../actionTypes/todoActionTypes';

export const create_todo = (name = '', description = '', deadline) => {
    return {
        type: actionTypes.CREATE_TODO,
        name,
        description,
        deadline
    }
};

export const get_todos = () => {
    return {
        type: actionTypes.GET_TODOS,
    }
};

export const get_todo_by_id = (id) => {
    return {
        type: actionTypes.GET_TODO_BY_ID,
        id
    }
};

export const edit_todo = (name, description, deadline, id) => {
    return {
        type: actionTypes.EDIT_TODO,
        name,
        description,
        deadline,
        id
    }
};

export const delete_todo = (id) => {
    return {
        type: actionTypes.DELETE_TODO,
        id
    }
};

export const change_todo_name = (name) => {
    return {
        type: actionTypes.CHANGE_TODO_NAME,
        name
    }
};

export const change_todo_description = (description) => {
    return {
        type: actionTypes.CHANGE_TODO_DESCRIPTION,
        description
    }
};

export const change_todo_deadline = (deadline) => {
    return {
        type: actionTypes.CHANGE_TODO_DEADLINE,
        deadline
    }
};

export const clear_todo_data = () => {
    return {
        type: actionTypes.CLEAR_TODO_DATA,
    }
};
