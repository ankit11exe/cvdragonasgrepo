const express = require ("express");
const dbConnect = require ("./config/db");

const dotenv = require ( "dotenv");
const cors = require ("cors"); //For fe to be connected

const userRoutes = require("./routes/userRoutes");

dotenv.config();
dbConnect();

const app = express();

const jsonParse = express.json();

app.use(cors({
    origin : "http://localhost:5173",
}));
app.use(jsonParse); 

app.use("/users", userRoutes);

const port =  process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`Server for backend listening to port ${port}`);
});