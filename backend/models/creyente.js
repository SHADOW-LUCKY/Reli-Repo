import mongoose from "mongoose";

const creyenteSchema = new mongoose.Schema(
{
    ministerio: {
        type: String,
        required: true,
        enum: ["Adoracion", "Mujeres", "jovenes", "Hombres"]
    },
    nivelFormacion: {
        type: String,
        required: true,
        enum: ["Liderazgo", "Anciano"]
    },
    nivelRuta: {
        type: String,
        required: true,
        enum: ["nuevo", "consolidado", "enviado"]
    },
    nombreCreyente: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
)

const belief = mongoose.model("creyentes", creyenteSchema)

export default belief