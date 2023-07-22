/* inicio del sql */
import express from "express";
import departamentoRoutes from "./routes/departamento.routes.js"
import municipioRoutes from "./routes/municipio.routes.js"
import comunaRoutes from "./routes/comuna.routes.js"
import barrioRoutes from "./routes/barrio.routes.js"
import creyenteRoutes from "./routes/creyente.routes.js"
import cors from "cors";

const app = express();

app.set("port", process.env.PORT);


const configCors = {
    method:["GET", "POST", "PUT", "DELETE"]
};

app.use(express.json());

app.use(cors(configCors));

app.use("/api/departamento", departamentoRoutes);
app.use("/api/municipio", municipioRoutes);
app.use("/api/comuna", comunaRoutes);
app.use("/api/barrio", barrioRoutes);
app.use("/api/creyente", creyenteRoutes);


export default app;
const main = () =>{
    app.listen(app.get("port"));
}
main();