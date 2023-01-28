/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import {
  Controller,
  Put,
  Req,
  UseGuards,
  Patch,
  Query,
  Post,
  Get,
  Header,
  Res,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './clients.model';
import { ClientUpdateDTO } from './client-update.dto';

@Controller('clients')
export class ClientsController {
  constructor(private clientService: ClientsService) {}

  @Post('')
  createClient(@Body() reqBody: any) {
    return this.clientService.addClient(reqBody);
  }

  @Get('findAll')
  getAllClients() {
    return this.clientService.getAllClients();
  }

  @Get(':id')
  getClient(@Param('id') userId: string) {
    return this.clientService.getClient(userId);
  }

  @Delete(':id')
  deleteClient(@Param('id') userId: string) {
    return this.clientService.deleteClient(userId);
  }

  @Put(':id')
  updateClient(
    @Param('id') userId: string,
    @Body() data: ClientUpdateDTO,
  ) {
    return this.clientService.updateClient(userId, data);
  }

  //   @Post('updateClient')
  //   updateClient(@Body() reqBody: any) {
  //     console.log({ reqBody: reqBody })
  //     return this.clientService.updateClient(reqBody);
  //   }

  //     @Get('createMultiple')
  //     async createMultipleClients() {
  //         console.log("requesting multiple clients")
  //         const data = [
  //             { 'name': 'Abdul Baqi', 'id': 5807724076 },
  //             { 'name': 'Muhammad Ibrahim', 'id': 1407762333 },
  //             { 'name': 'Zakia Nasreen', 'id': 5515395340 },
  //             { 'name': 'Razia Raheed', 'id': 4029225797 },
  //             { 'name': 'Muhammad Saleem', 'id': 1634280331 },
  //             { 'name': 'Abdul Hannan', 'id': 9759349106 },
  //             { 'name': 'Muhammad Haris', 'id': 3800912965 },
  //             { 'name': 'Muhammad Hassan', 'id': 5600038301 },
  //             { 'name': 'Anas', 'id': 1402895967 },
  //             { 'name': 'Hamza', 'id': 4375041011 },
  //             { 'name': 'Muhammad Yaqoob', 'id': 3078636554 },
  //             { 'name': 'Abdul Wajid', 'id': 6059718101 },
  //             { 'name': 'Zainab', 'id': 8540605039 },
  //             { 'name': 'Iqra', 'id': 9560446898 },
  //             { 'name': 'Haniya Khan', 'id': 4935940588 },
  //             { 'name': 'Fatima tuz Zehra', 'id': 6556359615 },
  //             { 'name': 'Muhammad Atif Azmi', 'id': 2724766590 },
  //             { 'name': 'Fahar Muhammad', 'id': 4886198264 },
  //             { 'name': 'Adie Muhammad', 'id': 5715379643 },
  //             { 'name': 'Muhammad Shafique', 'id': 6421357322 },
  //             { 'name': 'Aqsa', 'id': 9707804317 },
  //             { 'name': 'Muhammad Nadeem khan', 'id': 7001446009 },
  //             { 'name': 'Muhammad Usama Ali', 'id': 2115091149 },
  //             { 'name': 'Muhammad Furqan', 'id': 2360177763 },
  //             { 'name': 'Haseeb Samo', 'id': 9133879690 },
  //             { 'name': 'Rahil Abdul Rasheed', 'id': 4629164765 },
  //             { 'name': 'Zammar', 'id': 1034639607 },
  //             { 'name': 'Afnan Baig', 'id': 9951086784 },
  //             { 'name': 'Nasir Khan', 'id': 7329421324 },
  //             { 'name': 'Muhammad Shahid', 'id': 6728176608 },
  //             { 'name': 'Muhammad Zahid', 'id': 4302069172 },
  //             { 'name': 'Zulfiqar Ali', 'id': 3064570574 },
  //             { 'name': 'Hassan Raheem', 'id': 5958308840 },
  //             { 'name': 'Muhammad Shuja', 'id': 1260911881 },
  //             { 'name': 'Muhammad Hanzala', 'id': 5727880176 },
  //             { 'name': 'Abdullah', 'id': 4704837799 },
  //             { 'name': 'Naqi Rizvi', 'id': 2085663631 },
  //             { 'name': 'Hamza Farooqui', 'id': 4220473458 },
  //             { 'name': 'Abdul Basit', 'id': 8520053333 },
  //             { 'name': 'Karim Muhammad', 'id': 5118879418 },
  //             { 'name': 'Muhammad haisam', 'id': 4350852256 },
  //             { 'name': 'Furqan Ahmed', 'id': 2563508659 },
  //             { 'name': 'Saim ul Haq', 'id': 1753625841 },
  //             { 'name': 'Qasim tanoli', 'id': 3252687953 },
  //             { 'name': 'Muhammad Umir', 'id': 2902527478 },
  //             { 'name': 'Abdul Rasheed', 'id': 5806614171 },
  //             { 'name': 'Muhammad Raheel', 'id': 1343057852 },
  //             { 'name': 'Muhammad Adeel', 'id': 7276303111 },
  //             { 'name': 'ESL', "id": 1010101111 },
  //         ]

  //         for (let index = 0; index < data.length; index++) {
  //             await this.clientService.addClient(data[index])
  //         }
  //     }
}
