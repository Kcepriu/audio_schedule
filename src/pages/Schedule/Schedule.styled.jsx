import styled from 'styled-components';

export const ContainerTable = styled.div`
  position: relative;
`;

export const Table = styled.table`
  margin-top: 10px;
  width: 100%;
  border-collapse: collapse;

  /* & th {
    padding: 10px;
    border: 1px solid #2a2a2a;
  } */
`;

export const Tbody = styled.tbody`
  /* position: relative; */
`;

export const TableCell = styled.th`
  padding: 10px;

  text-align: center;
  /* border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0; */
`;
