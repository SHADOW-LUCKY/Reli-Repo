import getConnection from "../config/SQL.js";

const getAll = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Barrio;");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const add = async(req, res) =>{
    try {
        const {nombreBarrio,idComuna} = req.body;
        const datos = {nombreBarrio,idComuna};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Barrio SET ?", datos);
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
      const result = await connection.query("DELETE FROM Barrio WHERE idBarrio=?", id);
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
      const result = await connection.query("SELECT * FROM Barrio WHERE idBarrio=?", id);
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
      const {nombreBarrio,idComuna} = req.body;
      const datos = {nombreBarrio,idComuna};
      const connection = await getConnection();
      const result = await connection.query("UPDATE Barrio SET ? WHERE idBarrio=?", [datos, id]);
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