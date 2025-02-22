import { createContext,useState } from "react"

export const Context_captain_data = createContext();

function Context_captain({children}) {

    const [captain,setCaptain] = useState(null);
    const [isloading,setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData)=>{
        setCaptain(captainData);
    }

    const value = {
        captain,
        setCaptain,
        isloading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    }


    return (
        
            // Wrap the children components with the Provider
            <Context_captain_data.Provider value={value}>
                {children}
            </Context_captain_data.Provider>
        
    )
}

export default Context_captain
