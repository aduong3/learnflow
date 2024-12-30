import { createContext, ReactNode, useState } from 'react';

interface User {
    id: string;
    name: string;
    isGuest: boolean;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<{
    user: User | null;
    setUser: (user: User | null) => void;
} | null>(null);