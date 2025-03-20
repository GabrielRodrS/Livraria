import { Usuario } from 'src/Usuarios/usuarios.entity';
import { Livro } from 'src/Livros/livros.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Carrinho {
  @PrimaryGeneratedColumn()
  idCarrinho: number;

  @Column()
  nome: string;

  @Column('decimal')
  preco: number;

  @Column()
  quantidade: number;

  @Column()
  source: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.carrinhos)
  usuario: Usuario;

  @ManyToOne(() => Livro, (livro) => livro.carrinhos)
  livro: Livro;
}
