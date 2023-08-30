import { createContext,useState } from "react";

export const CartmembersContext = createContext({})

export function CartmembersContextProvider ({children}) {
    const [cartmembers, SetCartmembers] = useState(null)

    return(
    <CartmembersContext.Provider value={{cartmembers,SetCartmembers}}>
          {children}
    </CartmembersContext.Provider>
    )
}