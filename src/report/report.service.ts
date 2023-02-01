/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientDocument } from 'src/clients/clients.model';
import { Container } from 'src/containers/container.model';

@Injectable()
export class ReportService {
  constructor(
    @InjectModel('containers') private containerModel: Model<Container>,
    @InjectModel('clients') private readonly clientModel: Model<ClientDocument>,
  ) {}

  async generateWeeklyReport(): Promise<any[]> {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const containersAdded = await this.containerModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: weekAgo,
            $lt: new Date(),
          },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          ContainersAdded: { $sum: 1 },
        },
      },
    ]);

    return containersAdded;
  }

  async generateMonthlyReport(): Promise<any[]> {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 30);

    const containersAdded = await this.containerModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: weekAgo,
            $lt: new Date(),
          },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          ContainersAdded: { $sum: 1 },
        },
      },
    ]);

    return containersAdded;
  }

  // Client Report

  async generateWeeklyClientReport(): Promise<any[]> {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const clientsRegistered = await this.clientModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: weekAgo,
            $lt: new Date(),
          },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          ClientsRegistered: { $sum: 1 },
        },
      },
    ]);

    return clientsRegistered;
  }

  async generateMonthlyClientReport(): Promise<any[]> {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 30);

    const clientsRegistered = await this.clientModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: weekAgo,
            $lt: new Date(),
          },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          ClientsRegistered: { $sum: 1 },
        },
      },
    ]);

    return clientsRegistered;
  }
}
