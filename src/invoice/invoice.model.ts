// /* eslint-disable prettier/prettier */

// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';

// export type InvoiceDocument = HydratedDocument<Invoice>;

// @Schema({ timestamps: true })
// export class Invoice {
//   @Prop({
//     required: true,
//     type: String,
//   })
//   containerId: string;

//   @Prop({
//     required: true,
//     type: Object,
//   })
//   booking: {
//     booking: string;
//     //   bookingDate: {
//     //     type: Date,
//     //     default: Date.now()
//     // }
//     bookingBy: string;
//     statusOfBooking: string;
//     approvedBy: string;
//     ref: number;
//     agentPol: string;
//     contactPerson: string;
//     quantity: number;
//     containerSize: string;
//     containerType: string;
//     portOfLoading: string;
//     portOfFinal: string;
//     commodity: string;
//     dg: string;
//     dgClass: string;
//   };

//   @Prop({
//     required: true,
//     type: Object,
//   })
//   repair: {
//     repairType: string;
//     billNo: number;
//     dateOfIssue: {
//       type: Date;
//       default: Date.now;
//     };
//     containerNo: number;
//     haulierRefusal: number;
//     repairEstimate: {
//       type: number;
//       jobA: number;
//       jobB: number;
//       jobC: number;
//     };
//     repairEstimateAttachment: {
//       RepairApprovalEsl: number;
//       jobANetAmount: number;
//       jobATaxAmount: number;
//       jobAGrossAmount: number;
//       jobBNetAmount: number;
//       jobBTaxAmount: number;
//       jobBGrossAmount: number;
//     };
//     taxAmount: number;
//     totalAmount: number;
//     repairApprovalAttachment: {
//       DamagePicturesUpload: string;
//       postRepairPicturesUpload: string;
//     };
//   };

//   @Prop({
//     required: true,
//     type: Object,
//   })
//   sentToShipper: {
//     booking: number;
//     //   bookingDate: {
//     //     type: Date,
//     //     default: Date.now(),
//     // }
//     statusOfBooking: string;
//     sentToShipperDoc: string;
//     // sentToShipperDate: {
//     //   type: Date,
//     //   default : ()=> Date.now(),
//     // };
//     statusOfStsDoc: string;
//     HaulierRefusal: boolean;
//     agentPol: string;
//     contactPerson: string;
//     freeDays: number;
//     postOfLoading: string;
//   };
// }

// export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
