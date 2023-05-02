import {makeAutoObservable, runInAction} from 'mobx';
import {api} from '../api/api';

class TestStore {
  list: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchPosts = async (): Promise<void> => {
    try {
      const response = await api.getPostsList();
      if (response.status !== 200 || !response || !response.data) {
        return;
      }
      const data = response.data;
      runInAction(() => {
        this.list = data;
      });
    } catch (error) {
      console.log(error, ' : axios 에러');
    }
  };
}

export const testStore = new TestStore();
