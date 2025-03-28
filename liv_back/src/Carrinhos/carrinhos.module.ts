import { Module } from '@nestjs/common';
import { CarrinhosService } from './carrinhos.service';
import { CarrinhosController } from './carrinhos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrinho } from './carrinhos.entity';
import { LivrosModule } from 'src/Livros/livros.module';
import { UsuariosModule } from 'src/Usuarios/usuarios.module';
import { PedidosModule } from 'src/Pedidos/pedidos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Carrinho]),
    LivrosModule,
    UsuariosModule,
    PedidosModule,
  ],
  providers: [CarrinhosService],
  controllers: [CarrinhosController],
  exports: [TypeOrmModule],
})
export class CarrinhosModule {}
