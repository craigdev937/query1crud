export interface IUser {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
};

export interface UserState {
    page: number,
    per_page: number,
    total_pages: number,
    data: IUser[],
    support: {
        url: string,
        text: string
    }
};



