import { nanoid } from 'nanoid';
import cloneDeep from 'lodash.clonedeep';

import { getListPlaylists } from 'API/apiMpc';
import { allDays } from 'constants/days';
import changeSchedule from './changeSchedule';
import {
  saveScheduleToStorage,
  loadScheduleFromStorage,
} from './scheduleLoadSave';

import { generatorAllTime } from './timeFunction';

const allPlayLists = getListPlaylists();

export const copySchedule = schedule => {
  return cloneDeep(schedule);
};

export const generateEmptySchedule = () => {
  //Generate Empty Schedule
  const allTime = generatorAllTime();
  const schedule = [];
  const defaultPlayList = allPlayLists.find(
    element => element.name === 'defaulPlaylists'
  );

  let index = 0;

  for (const time of allTime) {
    const numRow = index;
    const row = {
      id: nanoid(),
      hour: time.hour,
      minutes: time.minutes,
      index,

      days: allDays.map(element => {
        const dataCell = {
          id: nanoid(),
          namePlaylist: cloneDeep(defaultPlayList),
        };

        dataCell.namePlaylist.hightPlayList = numRow === 0 ? 64 : 0;
        dataCell.namePlaylist.startPlayLists = numRow === 0;

        return dataCell;
      }),
    };
    schedule.push(row);
    index++;
  }

  return schedule;
};

export const loadSchedule = schedule => {
  let newSchedule = copySchedule(schedule);

  //Load data fdrom JSON
  const loadSaveSchedule = loadScheduleFromStorage();

  //Add to schedule
  for (const day in loadSaveSchedule) {
    for (const time in loadSaveSchedule[day]) {
      //Find PlayList
      const namePlayList = loadSaveSchedule[day][time];
      const playList = allPlayLists.find(
        element => element.name === namePlayList
      );

      // find where put new playlisr
      const [hour, minutes] = time.split(':');
      const column = Number(day);

      const row = newSchedule.find(element => {
        return (
          element.hour === Number(hour) && element.minutes === Number(minutes)
        );
      }).index;
      newSchedule = changeSchedule(newSchedule, row, column, playList);
    }
  }

  return newSchedule;
};

export const saveSchedule = schedule => {
  saveScheduleToStorage(schedule);
};
