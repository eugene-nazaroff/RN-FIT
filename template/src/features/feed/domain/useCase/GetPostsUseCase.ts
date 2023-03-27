import {FeedRepository} from 'src/features/feed/domain/repository/FeedRepository';

class GetPostsUseCase {
    constructor(private readonly repository: FeedRepository) {}

    async execute() {
        return await this.repository.getPosts();
    }
}

export default GetPostsUseCase;
