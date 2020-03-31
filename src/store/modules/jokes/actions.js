export function searchRequest(keyword) {
  return {
    type: '@jokes/SEARCH_REQUEST',
    payload: { keyword },
  };
}

export function searchSuccess(jokes) {
  return {
    type: '@jokes/SEARCH_SUCCESS',
    payload: { jokes },
  };
}
