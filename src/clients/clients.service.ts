import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity.js';

@Injectable()
export class ClientsService {
  constructor(@InjectRepository(Client)
    private readonly repo: Repository<Client>
  ) {}

  create(dto: CreateClientDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find(); 
  }

  async findOne(id: number) {
    const c = await this.repo.findOneBy({ id });
    if (!c) throw new NotFoundException('Client introuvable');
    return c;
  }
}