import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { Category } from './entities/category.entity.js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category)
  private readonly repo: Repository<Category>) {}
  create(dto: CreateCategoryDto) { return this.repo.save(this.repo.create(dto)); }
  findAll() { return this.repo.find({ relations: { products: true } }); }
  async findOne(id: number) {
    const c = await this.repo.findOne({ 
      where: { id },
      relations: { products: true } 
    });
    if (!c) throw new NotFoundException('Categorie introuvable');
    return c;
  }
}