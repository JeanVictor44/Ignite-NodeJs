import { Entity, PrimaryGeneratedColumn,Column, CreateDateColumn } from 'typeorm'

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: number

  @Column({type:"varchar"})
  name: string

  @Column({type: "varchar"})
  description: string

  @CreateDateColumn({name: "created_at"})
  createdAt: Date
}

export { Category }