import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies')
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  genre: string;

  @Column()
  studio: string;

  @Column()
  rate: number;
}
