import { take, call, put, select } from 'redux-saga/effects';
import { get, post, update, remove } from '../fetch';
import { BotActionTypes , IndexActionTypes} from '../actionTypes';


export function* getBotList () {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(get, `/bot`);
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: "Can't Get Bot List", msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* getBotListFlow () {
    while (true){
        let req = yield take(BotActionTypes.GET_BOTS);
        let res = yield call(getBotList);
        if(res){
            yield put({type:BotActionTypes.GET_BOTS_RESPONSE,data:res})
        }
    }
}

export function* getBot (id) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(get, `/bot/${id}`);
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: "Can't Get Bot List", msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* getBotFlow () {
    while (true){
        let req = yield take(BotActionTypes.GET_BOT_BY_ID);
        let res = yield call(getBot, req.id);
        if(res){

            yield put({type:BotActionTypes.GET_BOT_BY_ID_RESPONSE, data: res})
        }
    }
}

export function* editBot (id, name, description) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(update, `/bot`, {id, name, description});
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: "Can't Get Bot List", msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* editBotFlow () {
    while (true){
        let req = yield take(BotActionTypes.EDIT_BOT);
        let res = yield call(editBot, req.id, req.name, req.description);
        if(res){
            yield put({type:BotActionTypes.GET_BOTS_RESPONSE,data:res})
        }
    }
}

export function* deleteBot (id) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(remove, `/api/bot/${id}`, {});
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: "Can't Delete Bot", msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* deleteBotFlow () {
    while (true){
        let req = yield take(BotActionTypes.DELETE_BOT);
        let delResult = yield call(deleteBot, req.id);
        let res = yield call(getBotList);
        if(res){
            yield put({type:BotActionTypes.GET_BOTS_RESPONSE,data:res})
        }
    }
}

export function* saveBot(data) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        let id = yield select(state=>{
            state.id
        });
        if(id){
            data.id = id;
            return yield call(put, '/bot', data);
        }else{
            return yield call(post, '/bot', data);
        }

    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: "Can't Save Bot", msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* newBotFlow() {
    while (true) {
        let request = yield take(BotActionTypes.CREATE_BOT);
            let res = yield call(saveBot, request);
            if (res) {
                if (res.code === 200) {
                    yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res, msgType: 1});
                }
            }
    }
}