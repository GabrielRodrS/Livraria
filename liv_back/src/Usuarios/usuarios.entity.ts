import { IsEmail } from 'class-validator';
import { Entity, Column, PrimaryColumn } from 'typeorm';

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
}
