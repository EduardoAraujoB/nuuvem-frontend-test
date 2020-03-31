import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container, SearchInput, SearchButton, SearchIcon } from './styles';

import { searchRequest } from '../../store/modules/jokes/actions';

function Search() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  function handleSearch(e) {
    e.preventDefault();
    dispatch(searchRequest(search));
  }

  return (
    <Container>
      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Jokes"
      />
      <SearchButton onClick={handleSearch}>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
}

export default Search;
