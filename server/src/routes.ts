import { Router } from "express";
import productController from "./controllers/productController";

const routes = Router();

routes.post("/product", productController.create);
routes.get("/product/:id", productController.list);
routes.put("/product", productController.update);
routes.delete("/product/:id", productController.delete);

export default routes;
