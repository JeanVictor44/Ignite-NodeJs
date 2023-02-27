import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn} from 'typeorm'

@Entity("specifications") 
class Specification {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({type: "varchar"})
  name: string

  @Column({type: 'varchar'})
  description: string

  @CreateDateColumn({name:'created_at'})
  createdAt: Date
}

export { Specification }