import { Body, Controller, Post } from '@nestjs/common';
import { InsertDataService } from './insert-data.service';
import { User as UserModel } from '@prisma/client';

@Controller('insert')
export class InsertDataController {
  constructor(private readonly insertDataService: InsertDataService) {}

  @Post()
  async signupUser(
    @Body() userData: { name?: string; email: string; birthYear?: string },
  ): Promise<UserModel> {
    return this.insertDataService.insertData(userData);
  }
}
