import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './pedidos.entity';
import { UsuariosModule } from 'src/Usuarios/usuarios.module';
import { LivrosModule } from 'src/Livros/livros.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido]), UsuariosModule, LivrosModule],
  controllers: [PedidosController],
  providers: [PedidosService],
  exports: [PedidosService],
})
export class PedidosModule {}
