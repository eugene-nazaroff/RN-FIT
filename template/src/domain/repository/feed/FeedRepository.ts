import {FeedPostDTO} from 'src/domain/entities/Feed/FeedPost';

export interface FeedRepository {
    getPosts(): Promise<FeedPostDTO[] | undefined>;
}
