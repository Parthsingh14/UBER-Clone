import { createContext, useState,} from 'react';

export const Captain_Data_Context = createContext();

const CaptainContext = ({ children }) => {
    const [ captain, setCaptain ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    // const value = {
    //     captain,
    //     setCaptain,
    //     isLoading,
    //     setIsLoading,
    //     error,
    //     setError,
    //     updateCaptain
    // };

    return (
        <Captain_Data_Context.Provider value={{captain,setCaptain,isLoading,setIsLoading,error,setError,updateCaptain}}>
            {children}
        </Captain_Data_Context.Provider>
    );
};

export default CaptainContext;