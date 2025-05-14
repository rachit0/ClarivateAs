import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Product } from './product';

@Table({ tableName: 'categories', timestamps: true })
export class Category extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  categoryName!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description!: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive!: boolean;

  products?: Product[];
}