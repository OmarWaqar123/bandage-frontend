import { createContext,useState } from "react";

export const SinglecategoryContext = createContext({})

export function SinglecategoryContextProvider ({children}) {
    const storedSinglecatproduct = JSON.parse(localStorage.getItem('Singlecatproduct'));
    const[Singlecatproduct, Setsinglecatproduct] = useState(storedSinglecatproduct || null)

    return(
    <SinglecategoryContext.Provider value={{Singlecatproduct,Setsinglecatproduct}}>
          {children}
    </SinglecategoryContext.Provider>
    )
}