import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     console.log("CaptainContext mounted");
    //     return () => {
    //         console.log("CaptainContext unmounted");
    //     };
    // }, []);

    // useEffect(() => {
    //     console.log("Captain state changed:", captain);
    // }, [captain]);

    if (captain) {
        console.log("Captain data arrived at line 11:", captain);
    }

    if (!captain) {
        console.log("Captain data is gone at line 15");
    }

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain: (data) => {
            console.log("Updating captain data:", data);
            setCaptain(data);
        }
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

CaptainContext.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CaptainContext;