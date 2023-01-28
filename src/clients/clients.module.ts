/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ClientsService } from "./clients.service";
import { ClientsController } from "./clients.controller";
import { ClientSchema } from "./clients.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "clients", schema: ClientSchema }]),
  ],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
