import {makeAutoObservable} from 'mobx';
import {TodoType} from '../types/todoType';
import {listStore} from './listStore';
import {setStorage} from '../lib/storage';

class TodoStore {
  id: number = 0;
  title: string = '';
  text: string = '';
  state: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setTodo = (todo: TodoType) => {
    this.id = todo.id;
    this.title = todo.title;
    this.text = todo.text;
    this.state = todo.state;
  };

  deleteTodo = async () => {
    let list = listStore.originTodoList;
    list = list.filter(i => {
      return i.id !== this.id;
    });
    listStore.setTodoList(list);
    await setStorage('list', list);
  };
  completeTodo = async () => {
    let list = listStore.originTodoList;
    list = list.map(i => {
      if (i.id === this.id) {
        return {...i, state: '완료'};
      } else {
        return {...i};
      }
    });
    listStore.setTodoList(list);
    await setStorage('list', list);
  };
}

export const todoStore = new TodoStore();
