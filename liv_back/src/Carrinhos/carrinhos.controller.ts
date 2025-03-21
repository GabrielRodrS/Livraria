import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Delete,
  Param,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
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

  @Patch('quantidade')
  async alterarQuantidade(
    @Body('idCarrinho') idCarrinho: number,
    @Body('valor') valor: number,
  ): Promise<number> {
    const alterar = await this.carrinhosService.alterarQuantidade(
      idCarrinho,
      valor,
    );

    return alterar;
  }

  @Delete('excluir/:idCarrinho')
  @HttpCode(204)
  async excluirItem(
    @Param('idCarrinho', ParseIntPipe) idCarrinho: number,
  ): Promise<void> {
    await this.carrinhosService.excluirItem(idCarrinho);
  }

  @Delete('excluir/:userEmail')
  @HttpCode(204)
  async deletarCarrinhos(
    @Param('usuarioEmail') usuarioEmail: string,
  ): Promise<void> {
    await this.carrinhosService.deletarCarrinhos(usuarioEmail);
  }
}
