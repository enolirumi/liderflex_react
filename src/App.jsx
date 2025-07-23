import React, { useEffect, useState } from 'react';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

//Import Contexts
import { ScrollProvider } from './Contexts/ScrollContext'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Doubts from './Pages/Doubts/Doubts'
import Contact from './Pages/Contact/Contact'
import LoadScreen from './Components/LoadScreen/LoadScreen'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sobre",
        element: <About />
    },
    {
        path: "/duvidas",
        element: <Doubts />
    },
    {
        path: "/contato",
        element: <Contact />
    },
])

export default function App() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.querySelector(".root")

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <ScrollProvider>
            {<LoadScreen loading={loading}></LoadScreen>}
            <RouterProvider router={router} />
        </ScrollProvider>
    );
}