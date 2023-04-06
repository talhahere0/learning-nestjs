import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { InsertDataModule } from './insert-data/insert-data.module';

@Module({
  imports: [InsertDataModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
