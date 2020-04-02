import produce from 'immer';

export const INITIAL_STATE = {
  jokes: null,
};

export default function jokes(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@jokes/SEARCH_SUCCESS': {
        draft.jokes = action.payload.jokes;
        break;
      }
      default:
    }
  });
}
