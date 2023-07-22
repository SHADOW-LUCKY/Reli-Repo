import getConnection from "../config/SQL.js";

const getAll = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Comuna;");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const add = async(req, res) =>{
    try {
        const {nombreComuna,idDepartamento} = req.body;
        const datos = {nombreComuna,idDepartamento};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Comuna SET ?", datos);
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
      const result = await connection.query("DELETE FROM Comuna WHERE idComuna=?", id);
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
      const result = await connection.query("SELECT * FROM Comuna WHERE idComuna=?", id);
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
      const {nombreComuna,idDepartamento} = req.body;
      const datos = {nombreComuna,idDepartamento};
      const connection = await getConnection();
      const result = await connection.query("UPDATE Comuna SET ? WHERE idComuna=?", [datos, id]);
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