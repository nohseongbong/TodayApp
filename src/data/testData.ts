import {random} from 'lodash';

export const dummyData = function () {
  let arr = [];
  for (let index = 0; index < 40; index++) {
    arr.push({
      id: index,
      title: '제목이다',
      text: '할일 이다~~~~eqweqweqeqweqweqw',
      state: random(0, 100) % 2 == 0 ? '진행중' : '완료',
    });
  }
  return arr;
};
