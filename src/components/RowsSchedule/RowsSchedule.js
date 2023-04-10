import { useState } from 'react';

import { TableRow, TableCell } from './RowsSchedule.styled';
import ListPlaylists from 'components/ListPlaylists/ListPlaylists';

import changeSchedule from 'services/changeSchedule';

//MUI
import Popover from '@mui/material/Popover';

const RowsSchedule = ({ schedule, setSchedule, isMovedElement }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlerChosePlaylist = ({ chosePlayList, indexRow, indexColumn }) => {
    setSchedule(prev =>
      changeSchedule(prev, indexRow, indexColumn, chosePlayList)
    );
    setAnchorEl(null);
  };

  const handleShowPopover = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const isOpenPopover = Boolean(anchorEl);
  const idPopover = isOpenPopover ? 'simple-popover' : undefined;

  return (
    <>
      {schedule.map(({ id, hour, minutes, days }, indexRow) => (
        <TableRow key={id} className={`row${minutes}`}>
          {minutes === 0 && (
            <TableCell rowSpan="4" className="cellHour">
              {hour}
            </TableCell>
          )}

          <TableCell className="cellMinute">{minutes}</TableCell>

          {days.map(({ id, data }, indexColumn) => {
            return (
              <TableCell
                key={id}
                className="cellDay"
                data-index-row={indexRow}
                data-index-column={indexColumn}
                data-play-list={data}
                data-hour={hour}
                data-minutes={minutes}
                data-num-day={indexColumn}
                onClick={handleShowPopover}

                // onMouseOut={handlerTest}
                // onMouseOver={handlerTest}
              >
                {data}
              </TableCell>
            );
          })}
        </TableRow>
      ))}

      <Popover
        id={idPopover}
        open={isOpenPopover}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        width="100%"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {isOpenPopover && (
          <ListPlaylists
            dataCell={{ ...anchorEl.dataset }}
            handlerChosePlaylist={handlerChosePlaylist}
          />
        )}
      </Popover>
    </>
  );
};

export default RowsSchedule;
