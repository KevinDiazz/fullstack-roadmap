import { UserSystem } from "./interfaces";
export type RoleSystem = "admin" | "userSystem" | "moderator";
export type UserStatusSystem = "active" | "inactive" | "banned";
export type UserPreview = Pick<UserSystem, "id" | "name" | "email">;
export type CreateUserSystem = Omit<UserSystem, "id" | "createdAt">;
export type UpdateUserSystem = Partial<UserSystem>;
export type UserSystemDictionary = Record<RoleSystem, UserSystem[]>;
export type CurrentUser = UserSystem | null;