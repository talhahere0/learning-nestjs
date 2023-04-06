import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class InsertDataService {
  constructor(private prisma: PrismaService) {}

  async insertData(data): Promise<User> {
    const result = await this.prisma.user.create({ data: data });
    return result;
  }
}
