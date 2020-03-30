import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #151d27;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const JokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 5px;
  margin: 10px;
  color: #fff;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 600px;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    background: #263241;
  }
`;
