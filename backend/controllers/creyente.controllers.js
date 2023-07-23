import getConnection from "../config/SQL.js";

const getAll = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT creyente.*, Barrio.nombreBarrio, Barrio.idComuna, Comuna.nombreComuna, Comuna.idMunicipio, Municipio.NombreMunicipio, Municipio.idDepartamento, Departamento.nombreDepartamento FROM creyente, Barrio, Comuna, Municipio, Departamento WHERE creyente.idBarrio = Barrio.idBarrio AND Barrio.idComuna = Comuna.idComuna AND Municipio.idMunicipio = Comuna.idMunicipio AND Departamento.idDepartamento = Municipio.idDepartamento;");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const add = async(req, res) =>{
    try {
        const {ididentificacion,nombres,email,NroCelular,dirección,IdBarrio} = req.body;
        const datos = {ididentificacion,nombres,email,NroCelular,dirección,IdBarrio};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO creyente SET ?", datos);
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
      const result = await connection.query("DELETE FROM creyente WHERE ididentificacion=?", id);
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
      const result = await connection.query(`SELECT creyente.*, Barrio.nombreBarrio, Barrio.idComuna, Comuna.nombreComuna, Comuna.idMunicipio, Municipio.NombreMunicipio, Municipio.idDepartamento, Departamento.nombreDepartamento
      FROM creyente, Barrio, Comuna, Municipio, Departamento
      WHERE creyente.idBarrio = Barrio.idBarrio 
        AND Barrio.idComuna = Comuna.idComuna 
        AND Municipio.idMunicipio = Comuna.idMunicipio 
        AND Departamento.idDepartamento = Municipio.idDepartamento 
        AND creyente.idBarrio = ?;
      `, id);
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
      const {ididentificacion,nombres,email,NroCelular,dirección,IdBarrio} = req.body;
      const datos = {ididentificacion,nombres,email,NroCelular,dirección,IdBarrio};
      const connection = await getConnection();
      const result = await connection.query("UPDATE creyente SET ? WHERE ididentificacion=?", [datos, id]);
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