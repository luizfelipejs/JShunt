import express from "express";
import { Connection, createConnection } from "typeorm";
import cors from "cors";
import routes from "./routes";


const port = process.env.PORT || 8080;

function startApp(connection: Connection) {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(routes);
  app.use(express.static('public'));

  app.listen(port, () =>
    console.log(`server running on http://localhost:${port}`)
  );  
}

createConnection().then(startApp);
