import { ProductsService } from './products.service';
import { Product } from 'shared-orm/dist/models/product';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<Product[]>;
}
