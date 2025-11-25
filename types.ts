export interface ServiceItem {
  id: string;
  title: string;
  code: string;
  description: string;
  icon: 'shield' | 'terminal' | 'lock' | 'cpu' | 'eye' | 'globe';
}

export enum BootState {
  OFFLINE,
  BOOTING,
  LOGIN,
  ONLINE
}