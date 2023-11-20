export interface Comment {
    id: number | string;
    email: string;
    name: string;
    body: string;
}export interface PostData {
    id: number | string;
    title: string;
    body: string;
    user: {
        id: number;
        name: string;
    };
    comments?: {
        data: Comment[];
    };
}
export interface PostsPaginated {
    data?: PostData[];
    meta?: {
        totalCount: number;
    };
    links?: {
        first: {
            page: number;
            limit: number;
        };
        prev?: {
            page: number;
            limit: number;
        };
        next?: {
            page: number;
            limit: number;
        };
        last: {
            page: number;
            limit: number;
        };
    };
}
