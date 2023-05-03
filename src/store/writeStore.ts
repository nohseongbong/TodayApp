import {makeAutoObservable, runInAction} from 'mobx';
import {api} from '../api/api';
import {getStorage, setStorage} from '../lib/storage';
import {TodoType} from '../types/todoType';
import {listStore} from './listStore';

class WriteStore {
  titleText: string = '';
  contentText: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setTitleText = (text: string) => {
    this.titleText = text;
  };
  setContentText = (text: string) => {
    this.contentText = text;
  };

  get checkWriteButton(): boolean {
    let state = false;
    state = this.titleText !== '' && this.contentText !== '';
    return state;
  }

  createTodo = async () => {
    let list = listStore.originTodoList;
    let todo: TodoType = {
      id: 1,
      title: this.titleText,
      text: this.contentText,
      state: '진행중',
    };
    if (list.length !== 0) {
      const lastTodo = list[list.length - 1];
      todo = {
        id: lastTodo.id + 1,
        title: this.titleText,
        text: this.contentText,
        state: '진행중',
      };
    }
    list.push(todo);
    listStore.setTodoList(list);
    await setStorage('list', list);
    this.clearWrite();
  };

  private clearWrite = () => {
    this.titleText = '';
    this.contentText = '';
  };
}

export const writeStore = new WriteStore();
