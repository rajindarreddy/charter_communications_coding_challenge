import { Table, Column, Model, HasMany } from 'sequelize-typescript'

@Table
export class Packages extends Model {
  
  @Column({primaryKey: true})
  id: number

  @Column
  name: string

  @Column
  networks: string

  @Column
  price: number

  @Column
  createdate: string;

  @Column
  updateddate: string

  @Column
  createdBy: string;

  @Column
  updatedBy: string;
  
}