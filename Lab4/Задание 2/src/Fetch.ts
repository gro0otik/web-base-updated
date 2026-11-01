import { Api, CommentDTO, PostDTO } from "./Api";

const api = new Api();

export async function getOddPosts(): Promise<PostDTO[]> {
    return (await api.getPosts())
        .filter((post) => post.id % 2 !== 0)
        .slice(0, 5);
};

export async function getEvenComments(): Promise<CommentDTO[]> {
    return (await api.getComments())
        .filter((comment) => comment.id % 2 === 0)
        .slice(0, 5);
};
