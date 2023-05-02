import {makeAutoObservable, runInAction} from 'mobx';

class ListStore {
  tabType: string = '전체';

  constructor() {
    makeAutoObservable(this);
  }

  setTabType = (type: string) => {
    this.tabType = type;
  };
}

export const listStore = new ListStore();
