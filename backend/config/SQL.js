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
/*  select Creyente.*,
Barrio.nombreBarrio,Barrio.idComuna,
Comuna.nombreComuna,Comuna.idMunicipio,
Municipio.NombreMunicipio,Municipio.idDepartamento,
Departamento.nombreDepartamento
from Creyente,Barrio,Comuna,Municipio,Departamento 
where Creyente.idBarrio = Barrio.idBarrio AND 
Barrio.idComuna = Comuna.idComuna AND 
Municipio.idMunicipio=Comuna.idMunicipio AND 
Departamento.idDepartamento=Municipio.idDepartamento;   */