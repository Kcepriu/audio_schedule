import { startHourWork } from 'constants/days';

export const formatTime = (hour, minutes) => {
  return `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

export const addMinutes = (hour, minutes, count) => {
  const today = new Date();
  today.setHours(hour, minutes, 0, 0);

  today.setSeconds(today.getSeconds() + 15 * 60 * count - 60);
  //We don't see all time.
  //Example, startHourWork=10, we see 0,9,10...
  if (hour < startHourWork - 1) {
    today.setSeconds(today.getSeconds() + (startHourWork - 2) * 60 * 60);
  }

  return { hour: today.getHours(), minutes: today.getMinutes() };
};

export const generatorAllTime = () => {
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
