/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

