import { useEffect, useRef, useState } from 'react';

import { allDays } from 'constants/days';

import {
  generateEmptySchedule,
  loadSchedule,
  saveSchedule,
  // copySchedule,
} from 'services/functionFromSchedule';

import RowsSchedule from 'components/RowsSchedule/RowsSchedule';
import Spinner from 'components/Spinner/Spinner';
import { Table, ContainerTable, Tbody, TableCell } from './Schedule.styled';

const Schedule = () => {
  const [schedule, setSchedule] = useState(() => generateEmptySchedule());
  const [firstRender, setFirstRender] = useState(true);
  const [isLoadSchedule, setIsLoadSchedule] = useState(false);
  // const [forceReRender, setForceReRender] = useState(false);

  const refTbody = useRef(null);

  useEffect(() => {
    if (isLoadSchedule) saveSchedule(schedule);
  }, [schedule, isLoadSchedule]);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      setSchedule(prev => loadSchedule(prev));
      setIsLoadSchedule(true);
      //   setForceReRender(prev => !prev);
    }
  }, [firstRender]);

  // useEffect(() => {
  //   setSchedule(prev => copySchedule(prev));
  // }, [forceReRender]);

  return (
    <>
      {firstRender && <Spinner />}
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
