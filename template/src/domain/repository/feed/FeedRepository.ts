import {IFeedPost} from 'src/domain/entities/Feed/IFeedPost';

export interface FeedRepository {
    getPosts(): Promise<IFeedPost[] | undefined>;
}
