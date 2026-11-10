import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service.js';
import { ClientsController } from './clients.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
