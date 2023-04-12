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

  // console.log('replaceInOtherTime', newObj.length, row);

  for (let numRow = row; numRow < newObj.length; numRow++) {
    if (
      newObj[numRow].days[column].namePlaylist.name &&
      newObj[numRow].days[column].namePlaylist.name !== oldPlayLists.name
    )
      break;

    newObj[numRow].days[column].namePlaylist = { ...newPlayLists };
  }
};

const changeSchedule = (oldSchedule, row, column, newPlayLists) => {
  console.log('newPlayLists', newPlayLists);

  const numRow = Number(row);
  const numColumn = Number(column);

  const newSchedule = cloneDeep(oldSchedule);

  const oldPlayLists = newSchedule[numRow].days[numColumn].namePlaylist;

  newSchedule[numRow].days[numColumn].namePlaylist = newPlayLists;

  replaceInOtherTime(
    newSchedule,
    oldPlayLists,
    newPlayLists,
    numRow + 1,
    numColumn
  );

  return newSchedule;
};

export default changeSchedule;
