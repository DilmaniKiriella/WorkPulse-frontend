export interface Announcement {
  id: number;
  title: string;
  description: string;
  tenantId: number;
  created: Date;
  createdBy: string;
  modified?: Date | null;
  modifiedBy?: string | null;
}
