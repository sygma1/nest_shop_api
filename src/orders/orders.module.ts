import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service.js';
import { OrdersController } from './orders.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerOrder } from './entities/order.entity.js';
import { OrderItem } from './entities/order-item.entity.js';
import { Product } from '../products/entities/product.entity.js';
import { Client } from '../clients/entities/client.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerOrder, OrderItem, Product, Client, OrderItem])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
