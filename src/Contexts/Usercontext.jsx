import { createContext,useState } from "react";

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [UserInfo, Setuserinfo] = useState(null)

    return (
        <UserContext.Provider value={{UserInfo,Setuserinfo}}>
            {children}
        </UserContext.Provider>
    )
}