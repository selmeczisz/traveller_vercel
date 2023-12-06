import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom/dist/index.js'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Tours } from './pages/Tours.jsx'
import { Tour } from './pages/Tour.jsx'
import { Contact } from './pages/Contact.jsx'

import { RouterProvider } from 'react-router-dom/dist/index.js'

const router= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/tours",
                element:<Tours/>
            },
            {
                path:"/tour/:id",
                element:<Tour/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]

    }
])



ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
)