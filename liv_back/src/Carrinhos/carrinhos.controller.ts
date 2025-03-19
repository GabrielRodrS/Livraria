import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CarrinhosService } from './carrinhos.service';
import { CreateCarrinhoDto } from './create-carrinho.dto';
import { Carrinho } from './carrinhos.entity';

@Controller('carrinhos')
export class CarrinhosController {
  constructor(private readonly carrinhosService: CarrinhosService) {}

  @Post('novo')
  async novoCarrinho(
    @Body() createCarrinhoDto: CreateCarrinhoDto,
  ): Promise<Carrinho> {
    return await this.carrinhosService.novoCarrinho(createCarrinhoDto);
  }

  @Get('buscar/:usuarioEmail')
  async buscarCarrinhos(
    @Param('usuarioEmail') usuarioEmail: string,
  ): Promise<Carrinho[]> {
    return await this.carrinhosService.buscarCarrinhos(usuarioEmail);
  }
}
