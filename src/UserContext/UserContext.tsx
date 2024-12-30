import { createContext } from 'react';

export interface User {
    id: string;
    name: string;
    isGuest: boolean;
}


export const UserContext = createContext<{
    user: User | null;
    setUser: (user: User | null) => void;
} | null>(null);