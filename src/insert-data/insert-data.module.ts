import { Module } from '@nestjs/common';
import { InsertDataService } from './insert-data.service';
import { InsertDataController } from './insert-data.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [InsertDataController],
  providers: [InsertDataService, PrismaService],
})
export class InsertDataModule {}
