import { Product } from 'shared-orm/dist/models/product';
export declare class ProductsService {
    findAll(): Promise<Product[]>;
}
