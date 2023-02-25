import {makeAutoObservable, runInAction} from 'mobx';
import {createContext} from 'react';
import FeedRepositoryImpl from 'src/data/repository/feed/FeedRepositoryImpl';
import GetPostsUseCase from 'src/domain/useCases/feed/GetPostsUseCase';
import FeedCellViewModel from 'src/presentation/viewModels/feed/feedCellViewModel';

class FeedViewModel {
    constructor() {
        makeAutoObservable(this);
    }
    private readonly getPostsUseCase = new GetPostsUseCase(FeedRepositoryImpl);

    posts: Array<FeedCellViewModel> = [];
    isLoading = false;

    getPosts = async () => {
        runInAction(() => {
            this.isLoading = true;
        });
        const posts = await this.getPostsUseCase.execute();

        runInAction(() => {
            this.posts = posts ? posts?.map(post => new FeedCellViewModel(post)) : [];
            this.isLoading = false;
        });
    };
}

export default createContext(new FeedViewModel());
