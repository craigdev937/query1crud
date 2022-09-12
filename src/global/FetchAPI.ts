import { IUser } from "../models/Interfaces";
const URL = "https://reqres.in/api/users";

class FetchAPI {
    FetchAll = async (): Promise<IUser[] | undefined> => {
        try {
            const res: Response = await fetch(URL);
            if (!res.ok) throw new Error(res.statusText);
            const data: IUser[] = await res.json();
            return [...data];
        } catch (error) {
            console.log(error);
        }
    };

    GetOne = async (id: number): Promise<IUser | undefined> => {
        try {
            const res: Response = 
                await fetch(`${URL}/${id}`);
            if (!res.ok) throw new Error(res.statusText);
            const data: IUser = await res.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    Create = async (payload: IUser): Promise<IUser | undefined> => {
        try {
            const res: Response = await fetch(URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    first_name: payload.first_name,
                    last_hame: payload.last_name,
                    email: payload.email
                }),
            });
            if (!res.ok) throw new Error(res.statusText);
            const data: IUser = await res.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    Update = async (payload: IUser): Promise<IUser | undefined> => {
        try {
            const res: Response = 
            await fetch(`${URL}/${payload.id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    first_name: payload.first_name,
                    last_hame: payload.last_name,
                    email: payload.email
                }),
            });
            if (!res.ok) throw new Error(res.statusText);
            const data: IUser = await res.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    Delete = async ({id}: IUser): Promise<IUser | undefined> => {
        try {
            const res: Response = 
            await fetch(`${URL}/${id}`, {
                method: "DELETE"
            });
            if (!res.ok) throw new Error(res.statusText);
            return res.json();
        } catch (error) {
            console.log(error);
        }
    };
};

export const API: FetchAPI = new FetchAPI();



