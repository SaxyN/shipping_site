import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack'
import { AnimatePresence } from "framer-motion";
import { RecoilRoot } from 'recoil';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.tsx';
import Overview from './pages/Dashboard/components/Overview/Overview.tsx';
import Shipments from './pages/Dashboard/components/Shipments/Shipments.tsx';
import Billing from './pages/Dashboard/components/Billing/Billing.tsx';
import Orders from './pages/Dashboard/components/Orders/Orders.tsx';
import Products from './pages/Dashboard/components/Products/Products.tsx';
import Customers from './pages/Dashboard/components/Customers/Customers.tsx';
import fbData from "./fbData.json";

// import { initializeApp } from 'firebase/app';
// import { getAuth, connectAuthEmulator, signInWithEmailAndPassword } from 'firebase/auth';

const app = initializeApp({
    apiKey: fbData.apiKey,
    authDomain: fbData.authDomain,
    projectId: fbData.projectId,
    storageBucket: fbData.storageBucket,
    messagingSenderId: fbData.messagingSenderId,
    appId: fbData.appId
});

// const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:5173");

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Settings from './pages/Dashboard/components/Settings/Settings.tsx';
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);
// const app = initializeApp({
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGIN_SENDER_ID,
//     appId: import.meta.env.VITE_FIREBASE_APP_ID,
// })

export const auth = getAuth(app);
export default app;

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/dashboard/*",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Overview />,
                errorElement: <ErrorPage />,
                loader: async () => {
                    return fetch("/api/getOverviewData").then(res => res.json())
                },

            },
            {
                path: "orders",
                element: <Orders />,
                errorElement: <ErrorPage />,
            },
            {
                path: "shipments",
                element: <Shipments />,
                errorElement: <ErrorPage />,
            },
            {
                path: "products",
                element: <Products />,
                errorElement: <ErrorPage />,
                loader: async () => {
                    return fetch("/api/getProducts").then(res => res.json())
                }
            },
            {
                path: "customers",
                element: <Customers />,
                errorElement: <ErrorPage />,
                loader: async () => {
                    return fetch("/api/getCustomers").then(res => res.json())
                }
            },
            {
                path: "billing",
                element: <Billing />,
                errorElement: <ErrorPage />,
            },
            {
                path: "settings",
                element: <Settings />,
                errorElement: <ErrorPage />,
            }
        ]
    },
    {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />,
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AnimatePresence>
            <SnackbarProvider
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                style={{ fontFamily: "Roboto" }}
            >
                <RecoilRoot>
                    <RouterProvider router={router} />
                </RecoilRoot>
            </SnackbarProvider>
        </AnimatePresence>
    </React.StrictMode>,
)
