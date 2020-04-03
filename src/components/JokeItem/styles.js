import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
  height: auto;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  background: #263241;
  text-align: left;
  @media only screen and (max-width: 760px) {
    width: 400px;
  }
`;

export const JokeImg = styled.img`
  align-self: flex-start;
  margin-right: 10px;
`;

export const JokeText = styled.span`
  color: #fff;
`;
