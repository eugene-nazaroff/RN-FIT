import {makeAutoObservable} from 'mobx';

interface Step {
    index: number;
    text: string;
}

class ViewModel {
    constructor() {
        makeAutoObservable(this);
    }

    steps: Array<Step> = [
        {index: 1, text: 'Настроить api-клиент (services/APIService)'},
        {
            index: 2,
            text: 'Настроить тему react-navigation (presentation/navigation/theme)',
        },
        {index: 3, text: 'Настроить тему native-base (presentation/theme)'},
    ];
}

export default new ViewModel();
