import belief from "../models/creyente.js";

const getAll = async (req, res) => {
    try {
        const creyente = await belief.find();
        res.json(creyente);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const postCre = async (req, res) => {
    try {
        const creyente = await belief.create(req.body);
        res.json({message: "creyente creado"}, creyente);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const delCre = async (req, res) => {
    try {
        const creyente = await belief.findByIdAndDelete(req.params.id);
        res.json(creyente);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updCre = async (req, res) => {
    try {
        const creyente = await belief.findByIdAndUpdate(req.params.id, req.body);
        res.json(creyente);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const meth = {
    getAll,
    postCre,
    delCre,
    updCre
}