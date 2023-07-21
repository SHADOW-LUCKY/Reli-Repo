import getConnection from "../config/SQL.js";

const getAll = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Departamento;");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const add = async(req, res) =>{
    try {
        const {nombreDepartamento} = req.body;
        const datos = {nombreDepartamento};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Departamento SET ?", datos);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};
/* select Creyente.*,Barrio.*  from Creyente,Barrio where Creyente.idBarrio = Barrio.idBarrio; */
const del = async (req, res) => {
    try {
      const {id} = req.params;
      const connection = await getConnection();
      const result = await connection.query("DELETE FROM Departamento WHERE idDepartamento=?", id);
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
      const result = await connection.query("SELECT * FROM Departamento WHERE idDepartamento=?", id);
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
      const {nombreDepartamento} = req.body;
      const datos = {nombreDepartamento};
      const connection = await getConnection();
      const result = await connection.query("UPDATE Departamento SET ? WHERE idDepartamento=?", [datos, id]);
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