import axios from 'axios';
import { all, put, takeEvery } from 'redux-saga/effects';

function* fetchCar2Go() {
  try {
    const car2go = yield axios.get('/car2go/vehicles');
    yield put({ type: 'SHOW_CAR2GO', data: car2go.data.placemarks });
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}

function* fetchAllTaxi() {
  try {
    const taxi = yield axios.get('/mytaxi/vehicles');
    yield put({ type: 'SHOW_TAXI', data: taxi.data.poiList });
  } catch (e) {
    yield put({ type: 'ERROR', message: e.message });
  }
}

function* ticketsSaga() {
  yield takeEvery('FETCH_TAXI', fetchAllTaxi);
  yield takeEvery('FETCH_CAR2GO', fetchCar2Go);
}

export default function* rootSaga() {
  yield all([ticketsSaga()]);
}
