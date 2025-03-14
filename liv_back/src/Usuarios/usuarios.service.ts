import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuarios.entity';

@Injectable()
export class usuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
  ) {}

  async criarUsuarios(
    nome: string,
    telefone: string,
    email: string,
    senha: string,
  ): Promise<Usuario> {
    const usuario = this.usuariosRepository.create({
      nome,
      telefone,
      email,
      senha,
    });

    return this.usuariosRepository.save(usuario);
  }

  async deletarUsuarios(email: string) {
    const usuario = await this.usuariosRepository.findOne({
      where: { email },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    const resultado = await this.usuariosRepository.delete({ email });

    if (resultado.affected === 0) {
      throw new NotFoundException('Erro ao deletar usuário!');
    }
  }
}
