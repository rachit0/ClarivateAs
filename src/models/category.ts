import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'categories', timestamps: true })
export class Category extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  categoryName!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description!: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive!: boolean;
}