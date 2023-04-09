import { TableRow, TableCell } from './RowsSchedule.styled';

//MUI
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem';

const RowsSchedule = ({ schedule, isMovedElement }) => {
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

                // onMouseOut={handlerTest}
                // onMouseOver={handlerTest}
              >
                {data}
                {/* <FormControl>
                  <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                  <Select defaultValue="" id="grouped-select" label="Grouping">
                    <MenuItem value="">
                      <em>{data}</em>
                    </MenuItem>
                    <ListSubheader>Category 1</ListSubheader>
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <ListSubheader>Category 2</ListSubheader>
                    <MenuItem value={3}>Option 3</MenuItem>
                    <MenuItem value={4}>Option 4</MenuItem>
                  </Select>
                </FormControl> */}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </>
  );
};

export default RowsSchedule;
