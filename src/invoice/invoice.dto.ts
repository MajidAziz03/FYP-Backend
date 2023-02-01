/* eslint-disable prettier/prettier */
export interface Invoice {
  booking: {
    booking: string;
    bookingDate: Date;
    bookingBy: string;
    statusOfBooking: string;
    approvedBy: string;
    ref: number;
    agentPol: string;
    contactPerson: string;
    quantity: number;
    containerSize: string;
    containerType: string;
    portOfLoading: string;
    portOfFinal: string;
    commodity: string;
    dg: string;
    dgClass: string;
  };

  repair: {
    repairType: string;
    billNo: number;
    dateOfIssue: Date;
    containerNo: number;
    haulierRefusal: number;
    repairEstimate: {
      type: number;
      jobA: number;
      jobB: number;
      jobC: number;
    };
    repairEstimateAttachment: {
      RepairApprovalEsl: number;
      jobANetAmount: number;
      jobATaxAmount: number;
      jobAGrossAmount: number;
      jobBNetAmount: number;
      jobBTaxAmount: number;
      jobBGrossAmount: number;
    };
    taxAmount: number;
    totalAmount: number;
    repairApprovalAttachment: {
      DamagePicturesUpload: string;
      postRepairPicturesUpload: string;
    };
  };

  sentToShipper: {
    booking: number;
    bookingDate: Date;
    statusOfBooking: string;
    sentToShipperDoc: string;
    sentToShipperDate: Date;
    statusOfStsDoc: string;
    HaulierRefusal: boolean;
    agentPol: string;
    contactPerson: string;
    freeDays: number;
    postOfLoading: string;
  };
}
