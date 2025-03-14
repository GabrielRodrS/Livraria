import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Livro } from './livros.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LivrosService {
  constructor(
    @InjectRepository(Livro)
    private readonly livrosRepository: Repository<Livro>,
  ) {}

  async incluirLivros(
    codigo: number,
    titulo: string,
    disponiveis: number,
    autor: string,
    genero: string[],
    preco: number,
    paginas: number,
    publicacao: Date,
    vendas: number,
    source: string,
  ): Promise<Livro> {
    const novoLivro = this.livrosRepository.create({
      codigo,
      titulo,
      disponiveis,
      autor,
      genero,
      preco,
      paginas,
      publicacao,
      vendas,
      source,
    });
    return this.livrosRepository.save(novoLivro);
  }

  async deletarLivros(codigo: number): Promise<void> {
    const buscarLivro = await this.livrosRepository.findOne({
      where: { codigo },
    });

    if (!buscarLivro) {
      throw new NotFoundException('Livro não encontrado!');
    }

    const resultado = await this.livrosRepository.delete({ codigo });

    if (resultado.affected === 0) {
      throw new NotFoundException('Problema ao deletar livro!');
    }
  }
}
