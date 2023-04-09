const copyObject = oldObj => {
  return [...oldObj];
};
const changeSchedule = (oldSchedule, row, column, data) => {
  const newObj = copyObject(oldSchedule);
  console.log(newObj);

  newObj[row].days[column].data = data;

  return newObj;
};

export default changeSchedule;
