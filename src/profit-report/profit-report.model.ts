/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ProfitReportSchema = new mongoose.Schema({
  quarter: {
    type: String,
    required: true,
  },
  profit: {
    type: Number,
    required: true,
  },
});

export interface ProfitReport {
  quarter: string;
  profit: number;
}
