import {makeAutoObservable} from 'mobx';

class ViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  steps: string[] = [
    'Настроить api-клиент (services/APIService)',
    'Настроить тему react-navigation (presentation/navigation/theme)',
    'Настроить тему native-base (presentation/theme)',
  ];
}

export default new ViewModel();
