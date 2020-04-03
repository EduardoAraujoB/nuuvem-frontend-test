import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Paginator from '../../util/Paginator';

import { getJokes } from '../../store/modules/jokes/selectors';

import Header from '../../components/Header';
import JokeList from '../../components/JokeList';
import NothingToSee from '../../components/NothingToSee';
import SearchNotFound from '../../components/SearchNotFound';

import {
  Container,
  JokeListContainer,
  ActionsWrapper,
  AddButton,
  AddIcon,
  RemoveButton,
  RemoveIcon,
} from './styles';

function Home() {
  const { jokes } = useSelector(getJokes);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (jokes !== null) {
      const paginated = Paginator(jokes, page);
      setData(paginated.data);
    }
  }, [jokes, page]);

  function handlePreviousPage(e) {
    e.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleNextPage(e) {
    e.preventDefault();
    if (jokes.length / 5 > page) {
      setPage(page + 1);
    }
  }
  return (
    <>
      <Header />
      <Container data-testid="home-container">
        {jokes === null ? (
          <NothingToSee />
        ) : (
          <JokeListContainer data-testid="jokes-container">
            {jokes.length === 0 ? (
              <SearchNotFound />
            ) : (
              <>
                <JokeList jokes={data} />
                <ActionsWrapper>
                  <RemoveButton
                    visible={page > 1}
                    data-testid="previous-page"
                    onClick={handlePreviousPage}
                  >
                    <RemoveIcon />
                  </RemoveButton>
                  <AddButton
                    visible={jokes.length / 5 > page}
                    data-testid="next-page"
                    onClick={handleNextPage}
                  >
                    <AddIcon />
                  </AddButton>
                </ActionsWrapper>
              </>
            )}
          </JokeListContainer>
        )}
      </Container>
    </>
  );
}

export default Home;
