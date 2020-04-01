import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Paginator from '../../util/Paginator';

import Header from '../../components/Header';
import JokeList from '../../components/JokeList';
import NothingToSee from '../../components/NothingToSee';

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
  const { jokes } = useSelector((state) => state.jokes);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const paginated = Paginator(jokes, page);
    setData(paginated.data);
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
      <Container>
        {jokes.length === 0 ? (
          <NothingToSee />
        ) : (
          <JokeListContainer>
            <JokeList jokes={data} />
            <ActionsWrapper>
              <RemoveButton onClick={handlePreviousPage}>
                <RemoveIcon />
              </RemoveButton>
              <AddButton onClick={handleNextPage}>
                <AddIcon />
              </AddButton>
            </ActionsWrapper>
          </JokeListContainer>
        )}
      </Container>
    </>
  );
}

export default Home;
