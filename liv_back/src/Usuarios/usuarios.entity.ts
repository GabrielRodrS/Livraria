import { IsEmail } from 'class-validator';
import { Carrinho } from 'src/Carrinhos/carrinhos.entity';
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
}
