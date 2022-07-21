import { Table, Column, Model, HasMany } from 'sequelize-typescript'

@Table
export class Networks extends Model {
  @Column({primaryKey: true})
  id: Number 

  @Column
  name: string

  @Column
  description: string

  @Column
  createdate: string;

  @Column
  updateddate: string

  @Column
  createdBy: string;

  @Column
  updatedBy: string;
  
}