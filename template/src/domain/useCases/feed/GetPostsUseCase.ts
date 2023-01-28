import {FeedRepository} from 'src/domain/repository/feed/FeedRepository';

class GetPostsUseCase {
    constructor(private readonly repository: FeedRepository) {}

    async execute() {
        return await this.repository.getPosts();
    }
}

export default GetPostsUseCase;
