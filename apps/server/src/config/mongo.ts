import pkg, { connect } from "mongoose";

const { connection } = pkg;

const password = encodeURIComponent("k3NFgvnsmMjRwwrE");
const uri = `mongodb+srv://jcfatjo:${password}@clusterjcts.knfdpkp.mongodb.net/pcBudgetsDB?retryWrites=true&w=majority`;

const connectDB = async (): Promise<void> => {
    try {
        await connect(uri);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }

    connection.once("open", () => {
        console.log("Connected to MongoDB");
    });

    connection.on("error", error => {
        console.error(`Connection error: ${error}`);
    });
};

export default connectDB;
