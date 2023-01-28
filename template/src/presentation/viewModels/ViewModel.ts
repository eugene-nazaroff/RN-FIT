import {makeAutoObservable} from 'mobx';

export default class ViewModel {
    constructor() {
        makeAutoObservable(this);
    }
}
