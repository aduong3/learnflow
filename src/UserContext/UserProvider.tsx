import React, { useState } from "react";
import { UserContext, User } from "./UserContext";


export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

return (
    <UserContext.Provider value ={{user, setUser}}>
        {children}
    </UserContext.Provider>
);
};