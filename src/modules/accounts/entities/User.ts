import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column({type: "varchar"})
  name: string
  
  @Column({type: "varchar", unique: true})
  username: string
  
  @Column({type: "varchar"})
  email: string
  
  @Column({type: "varchar"})
  password: string
  
  @Column({name:"driver_license",type: "varchar"})
  driverLicense: string
  
  @Column({type:"boolean", default: false})
  isAdmin: boolean

  @CreateDateColumn({name: "created_at"})
  createdAt: Date
}