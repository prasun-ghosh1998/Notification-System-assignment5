import type { NotificationType } from "../type/type";

export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}


export interface NotificationState {
  notifications: Notification[];
}