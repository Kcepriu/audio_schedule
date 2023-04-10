import { useState } from 'react';

import { allDays } from 'constants/days';
import generateSchedule from 'services/generateSchedule';

import RowsSchedule from 'components/RowsSchedule/RowsSchedule';

import { Table, ContainerTable, Tbody } from './Schedule.styled';

const Schedule = () => {
  const [schedule, setSchedule] = useState(() => generateSchedule());

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
            <RowsSchedule schedule={schedule} setSchedule={setSchedule} />
          </Tbody>
        </Table>
      </ContainerTable>
    </>
  );
};

export default Schedule;
