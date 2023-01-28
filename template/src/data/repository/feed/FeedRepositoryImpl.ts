import {ApiResponse} from 'apisauce';
import {FeedPostDTO} from 'src/domain/entities/Feed/FeedPost';
import {FeedRepository} from 'src/domain/repository/feed/FeedRepository';
import APIService from 'src/service/APISerivce';

class FeedRepositoryImpl implements FeedRepository {
    async getPosts(): Promise<FeedPostDTO[] | undefined> {
        const res: ApiResponse<FeedPostDTO[]> = await APIService.get('/posts?_limit=200');
        return res.data;
    }
}

export default new FeedRepositoryImpl();
