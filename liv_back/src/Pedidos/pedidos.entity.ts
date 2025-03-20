import { Usuario } from 'src/Usuarios/usuarios.entity';
import { Livro } from 'src/Livros/livros.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  idPedido: number;

  @Column()
  titulo: string;

  @Column('decimal')
  preco: number;

  @Column()
  codigo: number;

  @Column()
  paginas: number;

  @Column()
  autor: string;

  @Column()
  data: Date;

  @Column()
  quantidade: number;

  @Column()
  status: string;

  @Column()
  source: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.pedidos)
  usuario: Usuario;

  @ManyToOne(() => Livro, (livro) => livro.pedidos)
  livro: Livro;
}
