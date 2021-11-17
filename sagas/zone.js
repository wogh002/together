import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
    ZONE_REQUEST,
    ZONE_SUCCESS,
    ZONE_FAILURE
} from '../reducers/zone';
import axios from '../api/axios';

const zoneAPI = () => {
    return axios.get('/api/zone');
}

function* zone() {
    const result = yield call(zoneAPI);
    try {
        yield put({
            type: ZONE_SUCCESS,
            data: result.data
        });
    } catch (error) {
        yield put({
            type: ZONE_FAILURE,
            error: error.response.data
        })
    }
}

function* watchZone() {
    yield takeLatest(ZONE_REQUEST, zone);
}

export default function* zoneSaga() {
    yield all([
        fork(watchZone),
    ])
}