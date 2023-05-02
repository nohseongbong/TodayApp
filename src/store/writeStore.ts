import {makeAutoObservable, runInAction} from 'mobx';
import {api} from '../api/api';

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
}

export const writeStore = new WriteStore();
