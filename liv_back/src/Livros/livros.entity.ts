import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Carrinho } from 'src/Carrinhos/carrinhos.entity';

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

  @OneToMany(() => Carrinho, (carrinho) => carrinho.livro)
  carrinhos: Carrinho[];
}
