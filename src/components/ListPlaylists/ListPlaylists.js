import { getListPlaylists } from 'API/apiMpc';
import { allDays } from 'constants/days';

//MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarBorder from '@mui/icons-material/StarBorder';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

const allPlayLists = getListPlaylists();

const ListPlaylists = ({ dataCell, handlerChosePlaylist }) => {
  return (
    <Container pd="sm">
      <Typography variant="h4">{allDays[dataCell.numDay].name}</Typography>
      <Divider />
      <Typography variant="h6">{`Початок: ${dataCell.hour.padStart(
        2,
        '0'
      )}:${dataCell.minutes.padStart(2, '0')}`}</Typography>

      <List>
        {allPlayLists.map(playList => {
          return (
            <ListItem
              key={playList.key}
              disablePadding
              sx={{
                backgroundColor: playList.color,
                borderRadius: '20px',
                padding: '2px',
                marginBottom: 1,
              }}
            >
              <ListItemButton
                onClick={() =>
                  handlerChosePlaylist({
                    ...dataCell,
                    chosePlayList: playList,
                  })
                }
                data-checken-play-list={playList}
              >
                <ListItemIcon>
                  {playList.name === dataCell.namePlayList && <StarBorder />}
                </ListItemIcon>

                <ListItemText primary={playList.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default ListPlaylists;
