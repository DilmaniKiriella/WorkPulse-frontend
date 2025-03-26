export interface TaskData {
  id: string
  title: string
  description: string
  assignedTo: string
  priority: string
  status: string
  deadline: string
  created: Date;
  createdBy: string;
  modified?: Date | null;
  modifiedBy?: string | null;
}

