import {fork} from 'redux-saga/effects'
import {newBotFlow, getBotListFlow, editBotFlow, getBotFlow, deleteBotFlow} from './newBotSaga'

export default function* rootSaga() {
    yield fork(newBotFlow);
    yield fork(getBotListFlow);
    yield fork(getBotFlow);
    yield fork(editBotFlow);
    yield fork(deleteBotFlow);

}