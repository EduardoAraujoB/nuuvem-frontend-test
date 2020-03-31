import { all } from 'redux-saga/effects';

import jokes from './jokes/sagas';

export default function* rootSaga() {
  return yield all([jokes]);
}
