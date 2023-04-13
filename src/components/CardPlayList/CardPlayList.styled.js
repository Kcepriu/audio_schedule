import styled from 'styled-components';

export const MyCard = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;

  width: calc(100% - 8px);

  align-items: center;

  /* height: calc(100% * 10); */
  top: 4px;
  left: 4px;

  border-radius: 20px;

  z-index: 999;
  pointer-events: none;
`;
