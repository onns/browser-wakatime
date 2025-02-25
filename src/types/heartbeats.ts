export interface Heartbeat {
  branch?: string | null;
  category?: Category | null;
  entity: string;
  id: string;
  language?: string | null;
  plugin?: string | null;
  project?: string | null;
  time: string;
  type: EntityType;
}

export enum Category {
  browsing = 'browsing',
  code_reviewing = 'code reviewing',
  coding = 'coding',
  communicating = 'communicating',
  debugging = 'debugging',
  designing = 'designing',
  meeting = 'meeting',
  learning = 'learning',
}

export enum EntityType {
  app = 'app',
  domain = 'domain',
  file = 'file',
  url = 'url',
}

export interface ProjectDetails {
  [key: string]: string;
  category: string;
  editor: string;
  language: string;
  project: string;
}

export type HeartbeatsBulkResponse = { error?: string; responses?: HeartbeatResponse[] };

export type HeartbeatResponse = [{ data?: { id: string }; error?: string }, number];
