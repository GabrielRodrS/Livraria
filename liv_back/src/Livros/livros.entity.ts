import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Livro {
  @PrimaryColumn()
  codigo: number;

  @Column()
  titulo: string;

  @Column()
  disponiveis: number;

  @Column()
  autor: string;

  @Column('simple-array')
  genero: string[];

  @Column('decimal')
  preco: number;

  @Column()
  paginas: number;

  @Column()
  publicacao: Date;

  @Column({ default: 0 })
  vendas: number;

  @Column()
  source: string;
}
