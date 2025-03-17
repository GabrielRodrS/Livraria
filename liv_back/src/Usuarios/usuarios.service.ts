import { Repository } from 'typeorm';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuarios.entity';
import { User } from './user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
    private readonly jwtService: JwtService,
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

  async deletarUsuarios(email: string): Promise<void> {
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

  async LogarUsuarios(email: string, senha: string): Promise<Usuario | null> {
    const usuario = await this.usuariosRepository.findOne({ where: { email } });

    if (usuario && senha === usuario.senha) {
      return usuario;
    }

    throw new UnauthorizedException('Credenciais inválidas!');
  }

  async altNome(email: string, nome: string): Promise<string> {
    const usuario = await this.usuariosRepository.findOne({ where: { email } });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    usuario.nome = nome;
    await this.usuariosRepository.save(usuario);

    return usuario.nome;
  }
}
