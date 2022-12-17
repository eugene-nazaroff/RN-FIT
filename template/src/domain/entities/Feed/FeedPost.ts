export interface FeedPostDTO {
    id: string;
    title: string;
    body: string;
}

export default class FeedPost {
    private readonly _id: string;
    private readonly _title: string;
    private readonly _body: string;
    private _rating: number = 0;
    private readonly maxRating: number = 10;
    private readonly minRating: number = -10;

    get id(): string {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get body() {
        return this._body;
    }

    get isMaxRating() {
        return this._rating >= this.maxRating;
    }

    get isMinRating() {
        return this._rating <= this.minRating;
    }

    get rating() {
        if (this._rating >= this.maxRating) {
            return this.maxRating;
        }
        if (this._rating <= this.minRating) {
            return this.minRating;
        }
        return this._rating;
    }

    constructor(feedPostDTO: FeedPostDTO) {
        this._id = feedPostDTO.id;
        this._body = feedPostDTO.body;
        this._title = feedPostDTO.title;
    }

    increaseRating = () => {
        this._rating++;
    };

    decreaseRating = () => {
        this._rating--;
    };
}
