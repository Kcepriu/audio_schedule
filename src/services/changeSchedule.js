import cloneDeep from 'lodash.clonedeep';

const replaceInOtherTimeDown = (
  newObj,
  oldPlayLists,
  newPlayLists,
  row,
  column
) => {
  //Code replace old play list to new, in next cells, curent column
  //Replace when not went to  list end  or went to element as not equal oldPlayLists

  let count = 1;
  for (let numRow = row; numRow < newObj.length; numRow++) {
    if (
      newObj[numRow].days[column].namePlaylist.name &&
      newObj[numRow].days[column].namePlaylist.name !== newPlayLists.name &&
      newObj[numRow].days[column].namePlaylist.name !== oldPlayLists.name
    )
      break;

    newObj[numRow].days[column].namePlaylist = {
      ...newPlayLists,
      startPlayLists: false,
      hightPlayList: 0,
    };
    count++;
  }
  return count;
};

const replaceInOtherTimeUp = (newObj, newPlayLists, row, column) => {
  //This Code change prev play List. Find it length

  if (row < 0 || !newObj[row].days[column].namePlaylist.name) return;

  const namePlayList = newObj[row].days[column].namePlaylist.name;

  let count = 1;

  for (let numRow = row; numRow >= 0; numRow--) {
    if (
      numRow - 1 < 0 ||
      newObj[numRow - 1].days[column].namePlaylist.name !== namePlayList ||
      !newObj[numRow - 1].days[column].namePlaylist.name
    ) {
      newObj[numRow].days[column].namePlaylist.hightPlayList = count;
      break;
    }
    count++;
  }
};

const changeSchedule = (oldSchedule, row, column, newPlayLists) => {
  const numRow = Number(row);
  const numColumn = Number(column);

  const newSchedule = cloneDeep(oldSchedule);

  const oldPlayLists = newSchedule[numRow].days[numColumn].namePlaylist;

  newSchedule[numRow].days[numColumn].namePlaylist = newPlayLists;
  newSchedule[numRow].days[numColumn].namePlaylist.startPlayLists = true;

  newSchedule[numRow].days[numColumn].namePlaylist.hightPlayList =
    replaceInOtherTimeDown(
      newSchedule,
      oldPlayLists,
      newPlayLists,
      numRow + 1,
      numColumn
    );

  replaceInOtherTimeUp(newSchedule, newPlayLists, numRow - 1, numColumn);

  return newSchedule;
};

export default changeSchedule;
