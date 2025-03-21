import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './create-pedidos.dto';
import { Pedido } from './pedidos.entity';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post('novo')
  async novoPedido(@Body() createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    return await this.pedidosService.novoPedido(createPedidoDto);
  }

  @Get('buscar/:userEmail')
  async buscarPedidos(
    @Param('userEmail') userEmail: string,
  ): Promise<Pedido[]> {
    return await this.pedidosService.buscarPedidos(userEmail);
  }

  @Patch('cancelar/:idPedido')
  async pedidoCancelamento(@Param('idPedido') idPedido: number): Promise<void> {
    const pedido = await this.pedidosService.pedidoCancelamento(idPedido);
    return pedido;
  }
}
