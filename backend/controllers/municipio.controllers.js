import getConnection from "../config/SQL.js";

const getAll = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Municipio;");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const add = async(req, res) =>{
    try {
        const {NombreMunicipio,idDepartamento} = req.body;
        const datos = {NombreMunicipio,idDepartamento};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Municipio SET ?", datos);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};
const del = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await getConnection();
      const result = await connection.query("DELETE FROM Municipio WHERE idMunicipio=?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

const getOne = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await getConnection();
      const result = await connection.query("SELECT * FROM Municipio WHERE idMunicipio=?", id);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};

const upd = async (req, res) => {
    try {
      const {id} = req.params;
      const {nombreMunicipio,idDepartamento} = req.body;
      const datos = {nombreMunicipio,idDepartamento};
      const connection = await getConnection();
      const result = await connection.query("UPDATE Municipio SET ? WHERE idMunicipio=?", [datos, id]);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    };
};

export const methodHTTP = {
    getAll,
    add,
    del,
    getOne,
    upd
}