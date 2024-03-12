import { makeAutoObservable, runInAction } from "mobx";
import { IPost } from "../domain/IPost";
import { GetPostsUseCase } from "../domain/useCase/getPostsUseCase";
import { inject, injectable } from "inversify";

@injectable()
export class PostsViewModel {
    constructor(@inject('GetPostsUseCase') private useCase: GetPostsUseCase) {
        makeAutoObservable(this)
    }
    posts: Array<IPost> = []

    isLoading = false

    getPosts = async () => {
        this.isLoading = true
        const posts = await this.useCase.execute()
        runInAction(() => {
            this.posts = posts
            this.isLoading = false
        })
    }
}