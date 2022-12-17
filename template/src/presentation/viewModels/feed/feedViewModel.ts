import {makeAutoObservable, runInAction} from 'mobx';
import FeedRepositoryImpl from 'src/data/repository/feed/FeedRepositoryImpl';
import FeedPost from 'src/domain/entities/Feed/FeedPost';
import GetPostsUseCase from 'src/domain/useCases/feed/GetPostsUseCase';

class FeedViewModel {
    constructor() {
        makeAutoObservable(this);
    }
    private readonly getPostsUseCase = new GetPostsUseCase(FeedRepositoryImpl);

    posts: FeedPost[] = [];

    getPosts = async () => {
        const posts = await this.getPostsUseCase.execute();
        runInAction(() => {
            this.posts = posts
                ? posts?.map(dto => makeAutoObservable(new FeedPost(dto)))
                : [];
        });
    };
}

export default new FeedViewModel();
