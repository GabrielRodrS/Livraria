import { IsEmail } from 'class-validator';
import { Carrinho } from 'src/Carrinhos/carrinhos.entity';
import { Pedido } from 'src/Pedidos/pedidos.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity()
export class Usuario {
  @Column()
  nome: string;

  @Column()
  telefone: string;

  @IsEmail()
  @PrimaryColumn({ unique: true })
  email: string;

  @Column()
  senha: string;

  @OneToMany(() => Carrinho, (carrinho) => carrinho.usuario)
  carrinhos: Carrinho[];

  @OneToMany(() => Pedido, (pedido) => pedido.usuario)
  pedidos: Pedido[];
}
