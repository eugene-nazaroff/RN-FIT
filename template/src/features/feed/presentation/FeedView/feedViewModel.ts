import {makeAutoObservable, runInAction} from 'mobx';
import FeedRepositoryImpl from 'src/features/feed/data/repository/FeedRepositoryImpl';
import GetPostsUseCase from 'src/features/feed/domain/useCase/GetPostsUseCase';

import FeedPost from '../../domain/entities/FeedPost';

class FeedViewModel {
    constructor() {
        makeAutoObservable(this);
        this.getPosts();
    }
    private readonly getPostsUseCase = new GetPostsUseCase(FeedRepositoryImpl);

    posts: Array<FeedPost> = [];
    isLoading = false;

    getPosts = async () => {
        runInAction(() => {
            this.isLoading = true;
        });
        const posts = await this.getPostsUseCase.execute();

        runInAction(() => {
            this.posts = posts ?? [];
            this.isLoading = false;
        });
    };
}

export default FeedViewModel;
