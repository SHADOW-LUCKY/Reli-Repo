/* inicio del sql */
import express from "express";
import departamentoRoutes from "./routes/departamento.routes.js"
import cors from "cors";

const app = express();

app.set("port", process.env.PORT);


const configCors = {
    method:["GET", "POST", "PUT", "DELETE"]
};

app.use(express.json());

app.use(cors(configCors));

app.use("/api/departamento", departamentoRoutes);


export default app;
const main = () =>{
    app.listen(app.get("port"));
}
main();