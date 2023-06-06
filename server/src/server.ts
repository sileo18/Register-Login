import express  from "express";
import bodyParser from "body-parser";
import { routes } from "./routes";

const cors = require('cors')
const corsOptions = {
  origin: true, //Permite acesso de qualquer endereço frontend
  optionsSuccessStatus: 200, //Status quando a req for bem suscedida
};

const app = express()

app.get('/', (req, res) => {
  res.send('Ok')
})

app.listen(3333, () => {
  console.log("Server is running on localhost://3333 🚀")
})

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(routes)
