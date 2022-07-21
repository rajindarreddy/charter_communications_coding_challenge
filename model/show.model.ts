import { Table, Column, Model, HasMany } from 'sequelize-typescript'

@Table
export class Shows extends Model {

  @Column({primaryKey: true})
  id: number
  
  @Column
  name: string

  @Column
  title: string

  @Column
  network: string

  @Column
  imdbRating: number

  @Column
  createdate: string;

  @Column
  updateddate: string

  @Column
  createdBy: string;

  @Column
  updatedBy: string;
  
}