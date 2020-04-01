import styled from 'styled-components';
import { AiOutlineFileSearch } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

export const Icon = styled(AiOutlineFileSearch)`
  width: 100px;
  height: 100px;
  color: #fff;
`;

export const Title = styled.h2`
  color: #fff;
`;
