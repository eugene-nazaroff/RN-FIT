import dayjs from 'dayjs';
import {makeAutoObservable} from 'mobx';
import FeedPost from 'src/features/feed/domain/entities/FeedPost';

export default class FeedCellViewModel {
    constructor(feedPost: FeedPost) {
        this._id = feedPost.id;
        this._title = feedPost.title;
        this._body = feedPost.body;
        this._rating = 0;
        this._date = new Date(Math.random() * 9 ** 13);
        makeAutoObservable(this);
    }

    private maxRating = 10;
    private minRating = -10;

    private _date: Date;
    private _id: string;
    private _body: string;
    private _title: string;
    private _rating: number;

    get tags() {
        return ['Авто', 'Мото', 'Транспорт', 'Авторское'];
    }

    get dateString() {
        return dayjs(this._date).format('DD.MM.YYYY, HH:mm');
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get rating(): number {
        return this._rating;
    }

    changeRating = (mode: 'add' | 'subtract') => {
        if (mode === 'subtract') {
            this._rating !== this.minRating && this._rating--;
        } else {
            this._rating !== this.maxRating && this._rating++;
        }
    };
}
