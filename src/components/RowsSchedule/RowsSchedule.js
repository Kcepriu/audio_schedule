import { useState } from 'react';

import { TableRow, TableCell } from './RowsSchedule.styled';
import ListPlaylists from 'components/ListPlaylists/ListPlaylists';

import changeSchedule from 'services/changeSchedule';

//MUI
import Popover from '@mui/material/Popover';

const RowsSchedule = ({ schedule, setSchedule }) => {
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

  //namePlaylist

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

          {days.map(({ id, namePlaylist }, indexColumn) => {
            return (
              <TableCell
                key={id}
                className="cellDay"
                data-index-row={indexRow}
                data-index-column={indexColumn}
                data-name-play-list={namePlaylist.name}
                data-color-play-list={namePlaylist.color}
                data-hour={hour}
                data-minutes={minutes}
                data-num-day={indexColumn}
                onClick={handleShowPopover}
                style={{
                  backgroundColor: namePlaylist.color,
                }}
              >
                {namePlaylist.name}
              </TableCell>
            );
          })}
        </TableRow>
      ))}

      {/* TODO Add width Popover */}
      <Popover
        id={idPopover}
        open={isOpenPopover}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        // sx={{ backgroundColor: 'red' }}
      >
        {isOpenPopover && (
          <ListPlaylists
            dataCell={{ ...anchorEl.dataset }}
            handlerChosePlaylist={handlerChosePlaylist}
            wifthCell={anchorEl.offsetWidth}
          />
        )}
      </Popover>
    </>
  );
};

export default RowsSchedule;
