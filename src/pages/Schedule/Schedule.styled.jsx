import styled from 'styled-components';

export const ContainerTable = styled.div`
  position: relative;
`;

export const Table = styled.table`
  margin-top: 10px;
  width: 100%;
  border-collapse: collapse;

  & th {
    padding: 10px;
    border: 1px solid #2a2a2a;
  }
`;

export const Tbody = styled.tbody`
  /* position: relative; */
`;

export const Card = styled.div`
  position: absolute;
  display: block;
  width: calc((100%-20px) / 7 - 30px);
  height: 20px;
  background-color: red;
`;
