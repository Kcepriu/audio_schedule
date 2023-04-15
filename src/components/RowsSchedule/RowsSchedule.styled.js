import styled from 'styled-components';

export const TableRow = styled.tr`
  /* background-color: yellow; */

  &.row0 {
    border-top: 1px solid #e0e0e0;
  }
  &.row45 {
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const TableCell = styled.td`
  text-align: center;

  &.cellDay {
    position: relative;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    width: calc((100%-20px) / 7);
    font-size: 10px;
    max-height: 14px;
  }
  &.cellMinute {
    font-size: 10px;
    width: 10px;
  }

  &.cellHour {
    width: 10px;
  }
`;
