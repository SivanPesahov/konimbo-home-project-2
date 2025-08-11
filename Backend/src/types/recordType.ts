export interface AirtableRecordInput {
  fullName: string;
  email: string;
  message: string;
}

export type TaskRecord = {
  id: string;
  createdTime: string;
  fields: {
    "Full Name": string;
    Email: string;
    Message: string;
  };
};
