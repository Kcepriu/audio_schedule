import cloneDeep from 'lodash.clonedeep';

const replaceInOtherTime = (
  newObj,
  oldPlayLists,
  newPlayLists,
  row,
  column
) => {
  //Code replace old play list to new, in next cells, curent column
  //Replace when not went to  list end  or went to element as not equal oldPlayLists

  console.log('replaceInOtherTime', newObj.length, row);

  for (let numRow = row; numRow < newObj.length; numRow++) {
    console.log('numRow', numRow);

    if (
      newObj[numRow].days[column].data &&
      newObj[numRow].days[column].data !== oldPlayLists
    )
      break;

    newObj[numRow].days[column].data = newPlayLists;
  }
};

const changeSchedule = (oldSchedule, row, column, newPlayLists) => {
  const numRow = Number(row);
  const numColumn = Number(column);

  const newObj = cloneDeep(oldSchedule);

  const oldPlayLists = newObj[numRow].days[numColumn].data;

  newObj[numRow].days[numColumn].data = newPlayLists;

  replaceInOtherTime(newObj, oldPlayLists, newPlayLists, numRow + 1, numColumn);

  return newObj;
};

export default changeSchedule;
