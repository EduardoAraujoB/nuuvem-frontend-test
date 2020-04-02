import reducer, { INITIAL_STATE } from '../../../store/modules/jokes/reducer';
import { searchSuccess } from '../../../store/modules/jokes/actions';

describe('Jokes Reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('@jokes/SEARCH_SUCCESS', () => {
    const { jokes } = reducer(INITIAL_STATE, searchSuccess(['joke']));

    expect(jokes).toStrictEqual(['joke']);
  });
});
