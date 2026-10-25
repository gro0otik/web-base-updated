export interface PostDTO {
    userId: number
    id: number
    title: string
    body: string
};

export interface CommentDTO {
    postId: number
    id: number
    name: string 
    email: string
    body: string
};

export interface UserDTO {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
};

export class Api {
    basePath = "";
    constructor() {
        this.basePath = "https://jsonplaceholder.typicode.com/";
    }
    async baseFetch<T> (
        url: string,
        method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'GET',
        body?: Record<string, unknown>
    ): Promise<T> {
        let fetchParams: RequestInit = { method };
        if (body) fetchParams.body = JSON.stringify(body);
        const response = await fetch(`${this.basePath}${url}`, fetchParams);
        if (!response.ok) {
            throw new Error(`Ошибка запроса: ${response.status}`);
        } 
        return response.json() as Promise<T>;
    } 
    getPosts(): Promise<PostDTO[]> {
        return this.baseFetch<PostDTO[]>('posts');
    };
    getPostByPostId(postId: number): Promise<PostDTO> {
        return this.baseFetch<PostDTO>(`posts/${postId}`);
    };
    createPost(post: PostDTO): Promise<{id: number}> {
        return this.baseFetch<{id: number}>('posts', 'POST', post as unknown as Record<string, unknown>);
    };
    getComments(): Promise<CommentDTO[]> {
        return this.baseFetch<CommentDTO[]>('comments');
    };
    getCommentByCommentId(commentId: number): Promise<CommentDTO> {
        return this.baseFetch<CommentDTO>(`comments/${commentId}`);
    };
    getUsers(): Promise<UserDTO[]> {
        return this.baseFetch<UserDTO[]>('users');
    };
};
