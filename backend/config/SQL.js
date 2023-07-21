import mysql from "promise-mysql";


import {config} from "dotenv";

config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USUARIO,
    password: process.env.PASSWORD
});

const getConnection = () =>{
    return connection;
};

export default getConnection;