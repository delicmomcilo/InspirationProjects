export interface Invoice {
  id: number;
  invoiceNo: number;
  dueDate: string;
  invoiceDate: string;
  bankAccountNumber: string;
  customerIdentificationId: string;
  invoiceTypeId: string;
  invoiceTypeDescription: string;
  invoiceDeliveryType: string;
  dateBblDebtCollection: string;
  statusBblDebtCollection: string;
  clientNo: number;
  clientName: string;
  nameNo: number;
  nameId: string;
  status: string;
  sumOriginalAmount: number;
  sumUnpaidAmount: number;
  housingUnitId: string;
}

export interface InvoiceLine {
  id: number;
  invoiceId: number;
  lineNo: number;
  lineText: string;
  extraText: string;
  amount: number;
  balance: number;
}

export interface InvoiceDetails {
  id: number;
  invoiceNo: number;
  dueDate: string;
  invoiceDate: string;
  bankAccountNumber: string;
  customerIdentificationId: string;
  invoiceTypeId: string;
  invoiceTypeDescription: string;
  invoiceDeliveryType: string;
  dateBblDebtCollection: string;
  statusBblDebtCollection: string;
  clientNo: number;
  clientName: string;
  nameNo: number;
  nameId: string;
  status: string;
  sumOriginalAmount: number;
  sumUnpaidAmount: number;
  housingUnitId: string;
  invoiceLines: Array<InvoiceLine>;
}

export type InvoiceId = Invoice['id'];
