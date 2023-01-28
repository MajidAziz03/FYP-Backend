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
} from '@nestjs/common';
import { ContainerService } from './container.service';

@Controller('containers')
export class ContainerController {
  constructor(private userService: ContainerService) { }

  @Post('')
  createContainer(@Body() reqBody: any) {
    return this.userService.addContainer(reqBody);
  }

  @Post('updateContainer')
  updateContainer(@Body() reqBody: any) {
    console.log({ reqBody: reqBody })
    return this.userService.updateContainer(reqBody);
  }


  @Get("getAllContainers")
  getAllContainers() {
    return this.userService.getAllContainers()
  }




  @Get('createMultiple')
  async createMultipleClients() {
    console.log("requesting multiple containers")

    for (let index = 658; index < 881; index++) {
      let cleintId = 1634280331
      if (index > 672) {
        cleintId = 9759349106
      }
      if (index > 680) {
        cleintId = 3800912965
      }
      if (index > 684) {
        cleintId = 5600038301
      }

      if (index > 693) cleintId = 1402895967
      if (index > 697) cleintId = 4375041011
      if (index > 708) cleintId = 3078636554

      if (index > 713) cleintId = 6059718101
      if (index > 718) cleintId = 8540605039
      if (index > 727) cleintId = 9560446898
      if (index > 736) cleintId = 4935940588
      if (index > 746) cleintId = 6556359615
      if (index > 757) cleintId = 2724766590
      if (index > 758) cleintId = 4886198264
      if (index > 760) cleintId = 5715379643
      if (index > 763) cleintId = 6421357322
      if (index > 767) cleintId = 9707804317
      if (index > 772) cleintId = 7001446009
      if (index > 778) cleintId = 2115091149
      if (index > 785) cleintId = 2360177763
      if (index > 793) cleintId = 9133879690
      if (index > 802) cleintId = 4629164765
      if (index > 812) cleintId = 1034639607
      if (index > 822) cleintId = 9951086784
      if (index > 831) cleintId = 7329421324
      if (index > 839) cleintId = 6728176608
      if (index > 846) cleintId = 4302069172
      if (index > 852) cleintId = 3064570574
      if (index > 857) cleintId = 5958308840
      if (index > 861) cleintId = 1260911881
      if (index > 864) cleintId = 5727880176
      if (index > 866) cleintId = 4704837799
      if (index > 867) cleintId = 2085663631
      if (index > 869) cleintId = 4220473458
      if (index > 870) cleintId = 8520053333
      if (index > 871) cleintId = 5118879418
      if (index > 872) cleintId = 4350852256
      if (index > 873) cleintId = 2563508659
      if (index > 874) cleintId = 1753625841
      if (index > 875) cleintId = 3252687953
      if (index > 876) cleintId = 2902527478
      if (index > 877) cleintId = 5806614171
      if (index > 878) cleintId = 1343057852
      if (index > 879) cleintId = 7276303111

      await this.userService.addContainer({ id: "EISU3956" + index, clientId: cleintId })
    }

  }

}
