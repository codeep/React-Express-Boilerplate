import * as actionTypes from '../actionTypes/botActionTypes';

export const create_bot = (name = '', description = '') => {
    return {
        type: actionTypes.CREATE_BOT,
        name: name,
        description: description
    }
};

export const get_bots = () => {
    return {
        type: actionTypes.GET_BOTS,
    }
};

export const get_bot_by_id = (id) => {
    return {
        type: actionTypes.GET_BOT_BY_ID,
        id
    }
};

export const edit_bot = (name, description, id) => {
    return {
        type: actionTypes.EDIT_BOT,
        name,
        description,
        id
    }
};

export const delete_bot = (id) => {
    return {
        type: actionTypes.DELETE_BOT,
        id
    }
};

export const change_bot_name = (name) => {
    return {
        type: actionTypes.CHANGE_BOT_NAME,
        name
    }
};

export const change_bot_description = (description) => {
    return {
        type: actionTypes.CHANGE_BOT_DESCRIPTION,
        description
    }
};

export const clear_bot_data = () => {
    return {
        type: actionTypes.CLEAR_BOT_DATA,
    }
};
