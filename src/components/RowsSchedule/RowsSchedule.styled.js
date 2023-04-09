import styled from 'styled-components';

export const TableRow = styled.tr`
  background-color: yellow;

  &.row0 {
    border-top: 1px solid #2a2a2a;
  }
  &.row45 {
    border-bottom: 1px solid #2a2a2a;
  }
`;

export const TableCell = styled.td`
  text-align: center;

  &.cellDay {
    border-left: 1px solid #2a2a2a;
    border-right: 1px solid #2a2a2a;
    width: calc((100%-20px) / 7);
    font-size: 10px;
  }
  &.cellMinute {
    font-size: 10px;
    width: 10px;
  }

  &.cellHour {
    width: 10px;
  }
`;
