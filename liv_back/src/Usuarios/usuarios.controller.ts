import {
  Controller,
  Body,
  Post,
  Delete,
  Param,
  HttpCode,
} from '@nestjs/common';
import { usuariosService } from './usuarios.service';
import { Usuario } from './usuarios.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: usuariosService) {}

  @Post()
  async criarUsuarios(
    @Body('nome') nome: string,
    @Body('telefone') telefone: string,
    @Body('email') email: string,
    @Body('senha') senha: string,
  ): Promise<Usuario> {
    return this.usuariosService.criarUsuarios(nome, telefone, email, senha);
  }

  @Delete('deletar/:email')
  @HttpCode(204)
  async deletarUsuarios(@Param('email') email: string): Promise<void> {
    await this.usuariosService.deletarUsuarios(email);
  }
}
