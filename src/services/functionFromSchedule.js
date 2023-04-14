import { nanoid } from 'nanoid';

import { allDays, startHourWork } from 'constants/days';
import { formatTime } from './timeFunction';

const generatorAllTime = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const result = [];
  let seconds = 0;

  while (seconds < 86400) {
    const hour = today.getHours();
    const minutes = today.getMinutes();
    if (hour === 0 || hour >= startHourWork - 1) {
      result.push({
        hour,
        minutes,
      });
    }

    seconds += 15 * 60;
    today.setSeconds(today.getSeconds() + 15 * 60);
  }

  return result;
};

export const generateSchedule = () => {
  const allTime = generatorAllTime();
  const schedule = [];

  let index = 0;
  for (const time of allTime) {
    const row = {
      id: nanoid(),
      hour: time.hour,
      minutes: time.minutes,
      index,

      days: allDays.map(element => {
        return {
          id: nanoid(),
          namePlaylist: {
            name: '',
            color: '#ffffff',
          },
        };
      }),
    };
    schedule.push(row);
    index++;
  }

  return schedule;
};

export const loadSchedule = () => {
  const schedule = generateSchedule();
  //Load data fdrom JSON
  const loadSchedule = load('ScheduleMPC');

  //Add to schedule
  for (const day in loadSchedule) {
    console.log(typeof day, loadSchedule[day]);

    for (const time in loadSchedule[day]) {
      console.log(time, loadSchedule[day][time]);

      //day - в число

      //time - роззкласти на час і хвилини

      //   schedule.find(element => {
      //     return element.hour === 9 && element.minutes === 45;
      //   })

      // changeSchedule = (oldSchedule, row, column, newPlayLists)
    }
  }

  console.log(loadSchedule);

  return schedule;
};

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

  // save('ScheduleMPC', objResult);
};

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export const saveSchedule = schedule => {
  createJsonSchedule(schedule);
};
