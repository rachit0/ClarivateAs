import { Injectable } from '@nestjs/common';
import { Product } from 'shared-orm/dist/models/product';

@Injectable()
export class ProductsService {
  async findAll(): Promise<Product[]> {
    return Product.findAll({ include: [{ association: 'category' }] });
  }
}