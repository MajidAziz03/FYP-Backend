/* eslint-disable prettier/prettier */

import * as mongoose from 'mongoose';

export const InvoiceSchema = new mongoose.Schema({
  booking: {
    type: Object,
    required: true,
    booking: String,
    bookingDate: {
      type: Date,
      default: Date.now(),
    },
    bookingBy: String,
    statusOfBooking: String,
    approvedBy: String,
    ref: Number,
    agentPol: String,
    contactPerson: String,
    quantity: Number,
    containerSize: String,
    containerType: String,
    portOfLoading: String,
    portOfFinal: String,
    commodity: String,
    dg: String,
    dgClass: String,
  },

  repair: {
    type: Object,
    required: true,
    repairType: String,
    billNo: Number,
    dateOfIssue: {
      type: Date,
      default: Date.now,
    },
    containerNo: Number,
    haulierRefusal: Number,
    repairEstimate: {
      jobA: Number,
      jobB: Number,
      jobC: Number,
    },
    repairEstimateAttachment: {
      RepairApprovalEsl: Number,
      jobANetAmount: Number,
      jobATaxAmount: Number,
      jobAGrossAmount: Number,
      jobBNetAmount: Number,
      jobBTaxAmount: Number,
      jobBGrossAmount: Number,
    },
    taxAmount: Number,
    totalAmount: Number,
    repairApprovalAttachment: {
      DamagePicturesUpload: String,
      postRepairPicturesUpload: String,
    },
  },

  sentToShipper: {
    type: Object,
    required: true,
    booking: Number,
    bookingDate: {
      type: Date,
      default: Date.now(),
    },
    statusOfBooking: String,
    sentToShipperDoc: String,
    sentToShipperDate: {
      type: Date,
      default: Date.now(),
    },
    statusOfStsDoc: String,
    HaulierRefusal: Boolean,
    agentPol: String,
    contactPerson: String,
    freeDays: Number,
    postOfLoading: String,
  },
});
