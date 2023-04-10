import cloneDeep from 'lodash.clonedeep';

const changeSchedule = (oldSchedule, row, column, data) => {
  const newObj = cloneDeep(oldSchedule);

  newObj[row].days[column].data = data;

  return newObj;
};

export default changeSchedule;
