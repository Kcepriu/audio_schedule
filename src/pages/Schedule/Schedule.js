import { useRef, useState } from 'react';

import { allDays } from 'constants/days';

import generateSchedule from 'services/generateSchedule';

import RowsSchedule from 'components/RowsSchedule/RowsSchedule';

import { Table, ContainerTable, Tbody, TableCell } from './Schedule.styled';

const Schedule = () => {
  const [schedule, setSchedule] = useState(() => generateSchedule());
  const refTbody = useRef(null);

  return (
    <>
      <ContainerTable>
        <Table>
          <thead>
            <tr>
              <TableCell colSpan="2">Час</TableCell>

              {allDays.map((element, index) => {
                return <TableCell key={index}>{element.name}</TableCell>;
              })}
            </tr>
          </thead>

          <Tbody ref={refTbody}>
            <RowsSchedule
              schedule={schedule}
              setSchedule={setSchedule}
              refTbody={refTbody}
              on
            />
          </Tbody>
        </Table>
      </ContainerTable>
    </>
  );
};

export default Schedule;
