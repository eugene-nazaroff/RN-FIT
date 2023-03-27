import IFeedPost from 'src/features/feed/domain/entities/FeedPost';

export interface FeedRepository {
    getPosts(): Promise<Array<IFeedPost> | undefined>;
}
