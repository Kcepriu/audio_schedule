import { getListPlaylists } from 'API/apiMpc';

//MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarBorder from '@mui/icons-material/StarBorder';

const allPlayLists = getListPlaylists();

const ListPlaylists = ({ dataCell, handlerChosePlaylist }) => {
  return (
    <>
      {/* TODO Add corect header */}
      <Typography>{`Day: ${dataCell.numDay} ${dataCell.hour}:${dataCell.minutes}`}</Typography>

      {/* TODO Add width list */}
      <List>
        {allPlayLists.map((elem, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() =>
                  handlerChosePlaylist({ ...dataCell, chosePlayList: elem })
                }
                data-checken-play-list={elem}
              >
                <ListItemText primary={elem} />

                {elem === dataCell.playList && (
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ListPlaylists;
