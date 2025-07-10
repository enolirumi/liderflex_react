import { createContext, useContext, useEffect, useState } from 'react';

const ScrollContext = createContext(0);

export function ScrollProvider({ children }) {
    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <ScrollContext.Provider value={scrollY}>
            {children}
        </ScrollContext.Provider>
    );
}

export function useScrollY() {
    return useContext(ScrollContext);
}