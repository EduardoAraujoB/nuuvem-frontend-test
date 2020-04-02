import SagaTester from 'redux-saga-tester';

import { searchRequest } from '../../../store/modules/jokes/actions';
import rootSaga from '../../../store/modules/rootSaga';
import rootReducer from '../../../store/modules/rootReducer';

const delay = (t) => new Promise((res) => setTimeout(() => res(), t));

describe('Jokes Saga', () => {
  it('should be able to search', async () => {
    const sagaTester = new SagaTester({
      reducers: rootReducer,
    });

    sagaTester.start(rootSaga);

    sagaTester.dispatch(searchRequest('kjk'));

    await delay(2000);

    const state = sagaTester.getState();
    expect(state.jokes.jokes).toHaveLength(1);
  });
});
