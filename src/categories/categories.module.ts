import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service.js';
import { CategoriesController } from './categories.controller.js';
import { Category } from './entities/category.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}


