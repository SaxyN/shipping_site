const express = require('express');
const myDb = require('./config/db');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.SRV_PORT;
app.use(cors());
app.use(express.json());

// Server Cache

// interface inventory_item {
//     serial: number,
//     item_id: number,
//     stored: Date,
// }

// const inventory: inventory_item[] = [];

app.get("/api/getCustomers", (req, res) => {
    const today = new Date();
    const time = today.getHours() + ":" + today
    console.log(time, "/api/getCustomers");
    myDb.query('SELECT * FROM Customers', (err, result) => {
        if (err) console.log(err);
        // console.log(req.originalUrl);
        res.send(result);
    });
});

app.get("/api/getActiveCustomers", (req, res) => {
    const today = new Date();
    const time = today.getHours() + ":" + today
    console.log(time, "/api/getActiveCustomers");
    myDb.query('SELECT COUNT(*) as count FROM Customers', (err, result) => {
        if (err) console.log(err);
        // console.log(req.originalUrl);
        res.send(result);
    });
});

app.get("/api/getActiveOrders", (req, res) => {
    const today = new Date();
    const time = today.getHours() + ":" + today
    console.log(time, "/api/getActiveOrders");
    myDb.query('SELECT COUNT(*) as count FROM Orders', (err, result) => {
        if (err) console.log(err);
        // console.log(req.originalUrl);
        res.send(result);
    });
});

app.get("/api/getTotalSales", (req, res) => {
    const today = new Date();
    const time = today.getHours() + ":" + today
    console.log(time, "/api/getTotalSales");
    myDb.query('SELECT SUM(order_cost) as sum FROM Orders', (err, result) => {
        if (err) console.log(err);
        // console.log(req.originalUrl);
        res.send(result);
    });
});

app.get("/api/getOverviewData", (req, res) => {
    const today = new Date();
    const time = today.getHours() + ":" + today
    console.log(time, "/api/getOverviewData");
    myDb.query('SELECT * FROM overviewData', (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.send(result);
        }
    })
})

app.post("/api/createCustomer", (req, res) => {
    console.log(req.body);
    myDb.query(`INSERT INTO Customers (name, location) VALUES ('${req.body.name}', '${req.body.location}')`, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.post("/api/updateCustomer", (req, res) => {
    myDb.query(`UPDATE Customers SET name = ?, location = ? WHERE id = ?`,
        [

            req.body.name,
            req.body.location,
            req.body.id.id

        ], (err, result) => {
            if (err != null) {
                // console.log(err);
                res.send({ statusText: "DB Error" });
            }
            else {
                res.status(201).send("Success");
            }
        })
})

app.post("/api/deleteCustomer", (req, res) => {
    myDb.query(`DELETE FROM customers WHERE id = ?`, req.body.id, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.get("/api/getProducts", (req, res) => {
    const today = new Date();
    const time = today.getHours() + ":" + today
    console.log(time, "/api/getProducts");
    myDb.query('SELECT * FROM products', (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

const fetchCustomers = (id_limit) => {
    if (id_limit > 0) {
        myDb.query("SELECT * FROM customers", (err, result) => {
            if (err) console.log(err);
            else return result;
        })
    } else {
        myDb.query("SELECT * FROM customers WHERE id < ?", id_limit, (err, result) => {
            if (err) {
                console.log(err);

            }
            else return result;
        })
    }
}