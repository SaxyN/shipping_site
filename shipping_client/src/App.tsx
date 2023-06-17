import { useEffect, useState } from 'react'
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";
import './App.css'

import { ICustomer } from './types/ICustomer';

export default function App() {

    const [customers, setCustomers] = useState<ICustomer[]>([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            fetch("/api/getCustomers")
                .then(res => res.json())
                .then(res => {
                    setCustomers(res);
                    console.log(res);
                });
        }
        fetchCustomers().catch(console.error);
    }, [])

    return (
        <div>
            {customers.map(((customer: ICustomer, index: number) => {
                return (
                    <div key={index} style={{ textAlign: 'left' }}>
                        <Typography
                            variant="h6"
                            fontFamily={"Roboto"}
                            fontSize={32}
                        >{customer.name}</Typography>
                        <Typography
                            variant="body1"
                            fontFamily={"Roboto"}
                            fontSize={16}
                        >
                            {customer.ssn + " " + customer.location}
                        </Typography>
                    </div>
                )
            }))}
            <Outlet />
        </div>
    )
}