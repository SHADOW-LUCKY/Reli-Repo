/* inicio del sql */
import express from "express";
import DBconnection from "./config/MongoDB.js";
import departamentoRoutes from "./routes/departamento.routes.js"
import municipioRoutes from "./routes/municipio.routes.js"
import comunaRoutes from "./routes/comuna.routes.js"
import barrioRoutes from "./routes/barrio.routes.js"
import creyenteRoutes from "./routes/creyente.routes.js"
import infoRoutes from "./routes/creyenteinfo.routes.js"
import cors from "cors";

const app = express();

app.set("port", process.env.PORT);


const configCors = {
    method:["GET", "POST", "PUT", "DELETE"]
};

app.use(express.json());

app.use(cors(configCors));

app.use("/departamento", departamentoRoutes);
app.use("/municipio", municipioRoutes);
app.use("/comuna", comunaRoutes);
app.use("/barrio", barrioRoutes);
app.use("/creyente", creyenteRoutes);
app.use("/info", infoRoutes);

const main = async () => {
    await app.listen(app.get("port"));
    console.log("Server on port", app.get("port"));
    await DBconnection();
}

main();