import {makeAutoObservable} from 'mobx';
import {TodoType} from '../types/todoType';

class ListStore {
  tabType: string = '전체';
  originTodoList: TodoType[] = [];
  todoList: TodoType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setTabType = (type: string) => {
    this.tabType = type;
    this.filterList();
  };

  setTodoList = (list: TodoType[]) => {
    this.originTodoList = list;
    this.todoList = list;
  };

  private filterList = () => {
    if (this.tabType === '전체') {
      this.todoList = this.originTodoList;
      return;
    }
    let list = this.originTodoList.filter(i => {
      return i.state === this.tabType;
    });
    this.todoList = list;
  };
}

export const listStore = new ListStore();
