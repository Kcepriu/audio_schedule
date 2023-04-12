import { nanoid } from 'nanoid';

import { allDays, startHourWork } from 'constants/days';

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

const generateSchedule = () => {
  const allTime = generatorAllTime();
  const schedule = [];

  for (const time of allTime) {
    const row = {
      id: nanoid(),
      hour: time.hour,
      minutes: time.minutes,

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
  }

  return schedule;
};
export default generateSchedule;
