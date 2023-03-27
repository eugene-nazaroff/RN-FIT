import {ApiResponse} from 'apisauce';
import {IFeedPost} from 'src/domain/entities/Feed/IFeedPost';
import {FeedRepository} from 'src/features/feed/domain/repository/FeedRepository';
import APIService from 'src/service/APISerivce';

class FeedRepositoryImpl implements FeedRepository {
    async getPosts() {
        const res: ApiResponse<IFeedPost[]> = await APIService.get('/posts?_limit=200');
        return res.data;
    }
}

export default new FeedRepositoryImpl();
