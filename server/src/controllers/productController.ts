import { Request, Response } from "express";
import productModel from "../entities/product";

export default new (class productController {
    async create(request: Request, response: Response) {
        try {
            const { name, description, url } = request.body;

            const product = productModel.create({
                name,
                description,
                url,
            });

            await product.save();

            return response.json(product);
        } catch (error) {
            return response.status(404).json(error);
        }
    }

    async list(request: Request, response: Response) {
        try {
            let numberProductsList = request.params.id;

            const maxProducts = await productModel.count()
            const numberProductsListFormatted = Number(numberProductsList)

            const products = await productModel.find({
                take: 5,
                skip: (numberProductsListFormatted - 1) * 5
            });


            return response.json({products, limit: maxProducts});
        } catch (error) {
            return response.status(404).json(error);
        }
    }

    async update(request: Request, response: Response) {
        try {
            const { update, id } = request.body;

            const product = await productModel.findOne({ id });
            productModel.merge(product, {
                name: update.name,
                description: update.description,
                url: update.url,
            });

            await productModel.save(product);
            return response.json(product);
        } catch (error) {
            return response.status(404).json(error);
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const id = request.params.id;

            await productModel.delete({ id: Number(id) });

            return response.json({ message: "ok" });
        } catch (error) {
            return response.status(404).json(error);
        }
    }
})
