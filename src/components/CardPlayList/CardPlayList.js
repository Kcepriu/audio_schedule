import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';

import { formatTime, addMinutes } from 'services/timeFunction';

const CardPlayList = ({ namePlaylist, heightTbody, countRow, startTime }) => {
  const endTime = addMinutes(
    startTime.hour,
    startTime.minutes,
    namePlaylist.hightPlayList
  );

  return (
    <Box
      component="div"
      style={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: namePlaylist.color,
        width: `calc(100% - 8px)`,
        height: `${
          (heightTbody / countRow) * namePlaylist.hightPlayList - 8
        }px `,
        top: '4px',
        left: '4px',

        borderRadius: '20px',
        zIndex: 999,
        pointerEvents: 'none',
      }}
    >
      <Typography variant="h4">{namePlaylist.description}</Typography>

      <Divider flexItem sx={{ fullWidth: 1 }} />

      <CssBaseline />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {formatTime(startTime.hour, startTime.minutes)}-
        {formatTime(endTime.hour, endTime.minutes)}
      </Typography>
    </Box>
  );
};

export default CardPlayList;
