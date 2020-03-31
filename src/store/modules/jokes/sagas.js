import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { searchSuccess } from './actions';

export function* searchJokes({ payload }) {
  try {
    const { keyword } = payload;
    if (keyword.length < 3 || keyword.length > 120) {
      toast.error('minimum of 3 letters to search', {
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }
    const response = yield call(api.get, `jokes/search?query=${keyword}`);
    yield put(searchSuccess(response.data.result));
  } catch (error) {
    toast.error('Error when searching', {
      position: toast.POSITION.TOP_LEFT,
    });
  }
}

export default all([takeLatest('@jokes/SEARCH_REQUEST', searchJokes)]);
