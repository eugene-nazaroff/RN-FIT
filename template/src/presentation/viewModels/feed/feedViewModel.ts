import {makeAutoObservable, runInAction} from 'mobx';
import FeedRepositoryImpl from 'src/data/repository/feed/FeedRepositoryImpl';
import GetPostsUseCase from 'src/domain/useCases/feed/GetPostsUseCase';
import FeedCellViewModel from 'src/presentation/viewModels/feed/feedCellViewModel';

class FeedViewModel {
    constructor() {
        makeAutoObservable(this);
    }
    private readonly getPostsUseCase = new GetPostsUseCase(FeedRepositoryImpl);

    posts: Array<FeedCellViewModel> = [];

    getPosts = async () => {
        const posts = await this.getPostsUseCase.execute();
        runInAction(() => {
            this.posts = posts ? posts?.map(post => new FeedCellViewModel(post)) : [];
        });
    };
}

export default new FeedViewModel();
