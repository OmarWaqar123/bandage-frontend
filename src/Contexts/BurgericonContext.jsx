import { createContext,useState } from "react";

export const BurgerContext = createContext({})

export function BurgerContextProvider ({children}) {
    const [burgerOpen, SetburgerOpen] = useState(false)

    return(
    <BurgerContext.Provider value={{burgerOpen,SetburgerOpen}}>
          {children}
    </BurgerContext.Provider>
    )
}