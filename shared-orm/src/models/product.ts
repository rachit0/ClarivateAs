import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Category } from './category';

@Table({ tableName: 'products', timestamps: true })
export class Product extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  productName!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description!: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  price!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  stockQuantity!: number;

  @Column({ type: DataType.INTEGER })
  categoryId!: number;

  category?: Category;
}