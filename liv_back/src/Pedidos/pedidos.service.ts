import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './pedidos.entity';
import { Repository } from 'typeorm';
import { Usuario } from 'src/Usuarios/usuarios.entity';
import { Livro } from 'src/Livros/livros.entity';
import { CreatePedidoDto } from './create-pedidos.dto';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidosRepository: Repository<Pedido>,

    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,

    @InjectRepository(Livro)
    private readonly livrosRepository: Repository<Livro>,
  ) {}

  async novoPedido(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const usuario = await this.usuariosRepository.findOne({
      where: { email: createPedidoDto.usuarioEmail },
    });
    const livro = await this.livrosRepository.findOne({
      where: { codigo: createPedidoDto.codigoLivro },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    if (!livro) {
      throw new NotFoundException('Livro não encontrado!');
    }

    const pedido = new Pedido();

    pedido.usuario = usuario;
    pedido.livro = livro;
    pedido.autor = livro.autor;
    pedido.codigo = livro.codigo;
    pedido.data = livro.publicacao;
    pedido.paginas = livro.paginas;
    pedido.preco = livro.preco;
    pedido.quantidade = createPedidoDto.quantidade;
    pedido.status = createPedidoDto.status;
    pedido.titulo = livro.titulo;
    pedido.source = livro.source;

    return this.pedidosRepository.save(pedido);
  }

  async buscarPedidos(usuarioEmail: string): Promise<Pedido[]> {
    const pedidos = await this.pedidosRepository.find({
      where: { usuario: { email: usuarioEmail } },
      relations: ['usuario'],
    });

    if (pedidos.length === 0) {
      throw new NotFoundException('Nenhum pedido foi encontrado!');
    }

    return pedidos;
  }
}
