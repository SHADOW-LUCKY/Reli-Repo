import mongoose from "mongoose";

const DBconnection = async () => {
    try {
        await mongoose.connect(process.env.MANGOS_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
}

export default DBconnection