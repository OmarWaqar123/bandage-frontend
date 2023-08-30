import { createContext,useState } from "react";

export const CheckoutContext = createContext({})

export function CheckoutProvider({children}) {
    const [Productselected, Setproductselected] = useState(null)

    return (
        <CheckoutContext.Provider value={{Productselected,Setproductselected}}>
            {children}
        </CheckoutContext.Provider>
    )
}