import axios from "axios";
import { IPost } from "../domain/IPost";
import { IPostsRepository } from "../domain/IPostsRepository";
import { injectable } from "inversify";

@injectable()
export class PostRepositoryImpl implements IPostsRepository {
    getPost = async (id: string): Promise<IPost> => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        const res = await axios.get<IPost>(url)
        return res.data
    };
    getPosts = async (): Promise<Array<IPost>> => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const res = await axios.get<Array<IPost>>(url)
        return res.data
    }
}