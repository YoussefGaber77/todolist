import mongoose from "mongoose";
const DataBaseconnection = async() => {


    await mongoose.connect(
        "mongodb://"+process.env.IP+":27017/todos", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    );
    console.log("Connected to database.");

};
export default DataBaseconnection;
