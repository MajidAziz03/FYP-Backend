/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ContainerSchema = new mongoose.Schema(
  {
    containerId: String,
  },
  {
    timestamps: true,
  },
);

export interface Container {
  containerId: string;
}
