import { formatTime } from './timeFunction';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';

const createJsonSchedule = schedule => {
  const arrayTime = [];
  for (let i = 0; i < 7; i++) {
    arrayTime[i] = schedule
      .filter(({ days }) => {
        return days[i].namePlaylist.startPlayLists;
      })
      .map(({ days, hour, minutes }) => {
        return { hour, minutes, namePlaylist: days[i].namePlaylist.name };
      })
      .reduce(
        (previousValue, element) => {
          return (previousValue = {
            ...previousValue,
            [`${formatTime(element.hour, element.minutes)}`]:
              element.namePlaylist,
          });
        },
        { '00:00': 'defaulPlaylists' }
      );
  }

  const objResult = arrayTime.reduce((previousValue, element, index) => {
    return { ...previousValue, [index]: element };
  }, {});

  return objResult;
};

export const saveScheduleToStorage = schedule => {
  const jsonSchedule = createJsonSchedule(schedule);

  saveToLocalStorage('ScheduleMPC', jsonSchedule);
};

export const loadScheduleFromStorage = () => {
  return loadFromLocalStorage('ScheduleMPC');
};
