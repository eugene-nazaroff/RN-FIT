import {makeAutoObservable} from 'mobx';
import {IFeedPost} from 'src/domain/entities/Feed/IFeedPost';

export default class FeedCellViewModel {
    constructor(feedPost: IFeedPost) {
        this._id = feedPost.id;
        this._title = feedPost.title;
        this._body = feedPost.body;
        this._rating = 0;
        makeAutoObservable(this);
    }

    private maxRating = 10;
    private minRating = -10;

    private _id: string;
    private _body: string;
    private _title: string;
    private _rating: number;

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
