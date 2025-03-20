import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsuariosModule } from './Usuarios/usuarios.module';
import { LivrosModule } from './Livros/livros.module';
import { CarrinhosModule } from './Carrinhos/carrinhos.module';
import { PedidosModule } from './Pedidos/pedidos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Permite acessar as variáveis de qualquer lugar
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),

    UsuariosModule,
    LivrosModule,
    CarrinhosModule,
    PedidosModule,
  ],
})
export class AppModule {}
