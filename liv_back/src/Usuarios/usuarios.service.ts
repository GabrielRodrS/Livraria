import { Repository } from 'typeorm';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuarios.entity';
import { JwtService } from '@nestjs/jwt';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

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

  async altTelefone(email: string, telefone: string): Promise<string> {
    const usuario = await this.usuariosRepository.findOne({ where: { email } });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    usuario.telefone = telefone;

    await this.usuariosRepository.save(usuario);

    return usuario.telefone;
  }

  async altEmail(
    novoEmail: string,
    email: string,
    senha: string,
  ): Promise<string> {
    const usuario = await this.usuariosRepository.findOne({ where: { email } });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    if (usuario.senha !== senha) {
      throw new UnauthorizedException('Senha incorreta!');
    }

    usuario.email = novoEmail;

    this.usuariosRepository.update({ email }, { email: novoEmail });

    return usuario.email;
  }

  async altSenha(email: string, senhaNova: string, senhaAtual: string) {
    const usuario = await this.usuariosRepository.findOne({ where: { email } });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    if (usuario.senha !== senhaAtual) {
      throw new UnauthorizedException('Senha incorreta!');
    }

    usuario.senha = senhaNova;

    await this.usuariosRepository.save(usuario);

    return { message: 'Senha alterada com sucesso!' };
  }
}
