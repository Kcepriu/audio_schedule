import { useRef, useState } from 'react';
import Draggable from 'react-draggable';

import { allDays } from 'constants/days';
import generateSchedule from 'services/generateSchedule';
import changeSchedule from 'services/changeSchedule';

import RowsSchedule from 'components/RowsSchedule/RowsSchedule';

import { Table, ContainerTable, Card, Tbody } from './Schedule.styled';
import { Button } from '@mui/material';

const Schedule = () => {
  const [isMovedElement, setIsMovedElement] = useState(false);
  const [schedule, setSchedule] = useState(() => generateSchedule());

  const nodeRef = useRef(null);

  // // * Handler
  // const hadlerMouseMove = event => {
  //   console.log(event.target);
  // };
  // const handlerStartMoved = event => {
  //   setIsMovedElement(true);
  //   console.log('onStart');
  // };
  // const handlerStopMoved = event => {
  //   setIsMovedElement(false);
  //   console.log('onStop');
  // };

  return (
    <>
      <ContainerTable>
        <Table>
          <thead>
            <tr>
              <th colSpan="2">Час</th>

              {allDays.map((element, index) => {
                return <th key={index}>{element.name}</th>;
              })}
            </tr>
          </thead>
          <Tbody>
            <RowsSchedule
              schedule={schedule}
              setSchedule={setSchedule}
              isMovedElement={isMovedElement}
            />
          </Tbody>
        </Table>
        {/* <Draggable
          bounds="parent"
          nodeRef={nodeRef}
          onStart={handlerStartMoved}
          onStop={handlerStopMoved}
          // onDrag={e => console.log('onDrag', e)}
        >
          <Card ref={nodeRef}>test</Card>
        </Draggable> */}
      </ContainerTable>
    </>
  );
};

export default Schedule;
