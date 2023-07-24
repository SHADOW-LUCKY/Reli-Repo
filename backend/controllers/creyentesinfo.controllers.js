import belief from "../models/creyente.js";

const getAll = async (req, res) => {
    try {
        const creyente = await belief.find(req.params.id);
        res.json(creyente);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
const getOne = async (req, res) => {
    try {
        const creyente = await belief.find({ididentificacion:req.params.id});
        res.json(creyente);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const postCre = async (req, res) => {
    try {
        const creyente = await belief.create(req.body);
        res.json(creyente);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const delCre = async (req, res) => {
    try {
        const creyente = await belief.findOneAndDelete({ididentificacion:req.params.id})
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
    getOne,
    postCre,
    delCre,
    updCre
}