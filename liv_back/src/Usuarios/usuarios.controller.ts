import {
  Controller,
  Body,
  Post,
  Get,
  Delete,
  Patch,
  Param,
  HttpCode,
  UseGuards,
  UnauthorizedException,
  Req,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuarios.entity';
import { User } from './user.interface';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

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

  @Post('login')
  async logarUsuarios(@Body() body: { email: string; senha: string }) {
    const resultado = await this.usuariosService.LogarUsuarios(
      body.email,
      body.senha,
    );

    const payload = {
      email: resultado.email,
      nome: resultado.nome,
      telefone: resultado.telefone,
    };
    const token = this.jwtService.sign(payload);

    return { token };
  }

  @Get('auth')
  async autenticar(@Req() req) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('Token não fornecido!');
    }

    try {
      const decoded = this.jwtService.verify(token);
      return decoded;
    } catch (error) {
      throw new UnauthorizedException('Token inválido!');
    }
  }

  @Patch('nome')
  async altNome(@Body('email') email: string, @Body('nome') nome: string) {
    const resultado = this.usuariosService.altNome(email, nome);

    return resultado;
  }
}
