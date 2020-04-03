import styled from 'styled-components';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const JokeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  @media only screen and (max-width: 760px) {
    width: 200px;
    margin-bottom: 60px;
  }
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff6666;
  border-radius: 50%;
  border: 0;
`;

export const AddIcon = styled(MdKeyboardArrowRight)`
  width: 30px;
  height: 30px;
  color: #fff;
`;

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff6666;
  border-radius: 50%;
  border: 0;
`;

export const RemoveIcon = styled(MdKeyboardArrowLeft)`
  width: 30px;
  height: 30px;
  color: #fff;
`;
