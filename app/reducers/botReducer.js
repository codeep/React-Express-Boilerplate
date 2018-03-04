import { BotActionTypes } from '../actionTypes';

const initialState = {
    name: '',
    description: '',
    id: null,
    bots: []
}

export const botReducer = (state = initialState, action) => {
    switch (action.type) {
        case BotActionTypes.GET_BOTS_RESPONSE:
            return {
                ...state, bots: [...action.data]
            };
        case BotActionTypes.CHANGE_BOT_NAME:
            return {
                ...state, name: action.name
            };
        case BotActionTypes.CHANGE_BOT_DESCRIPTION:

            return {
                ...state, description: action.description
            };
        case BotActionTypes.GET_BOT_BY_ID_RESPONSE:
            return {
                ...state,
                name: action.data.name,
                description: action.data.description,
                id: action.data._id
            };
        case BotActionTypes.CLEAR_BOT_DATA:
            return {
                ...state,
                name: initialState.name,
                description: initialState.description,
                id: initialState.id
            };
        default:
            return state;
    }
};