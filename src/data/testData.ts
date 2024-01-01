import {random} from 'lodash';

export const dummyData = function () {
  let arr = [];
  for (let index = 0; index < 40; index++) {
    arr.push({
      id: index,
      title: '',
      text: '',
      state: random(0, 100) % 2 === 0 ? '진행중' : '완료',
    });
  }
  return arr;
};
