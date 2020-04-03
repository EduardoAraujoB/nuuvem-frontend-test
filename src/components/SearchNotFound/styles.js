import styled from 'styled-components';
import { MdErrorOutline } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
  padding: 10px;
`;

export const ErrorIcon = styled(MdErrorOutline)`
  width: 80px;
  height: 80px;
  color: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  color: #fff;
`;
