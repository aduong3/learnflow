import { createContext } from 'react';

interface User {
    id: string;
    name: string;
    isGuest: boolean;
}


export const UserContext = createContext<{
    user: User | null;
    setUser: (user: User | null) => void;
} | null>(null);