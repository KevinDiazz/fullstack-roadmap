import { RoleSystem,UserStatusSystem } from "./types";
export interface UserSystem {
  readonly id: number;
  name: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
  avatar?: string;
  role: RoleSystem;
  status:UserStatusSystem
}
export interface AdminUserSystem extends UserSystem {
  permissions: string[];
}
export interface ApiResponseSystem<T> {
  success: boolean;
  data: T;
  message: string;
}
