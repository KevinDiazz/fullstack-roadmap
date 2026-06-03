import { ApiResponseSystem, UserSystem } from "./interfaces";
import { UserStatusSystem, UserSystemDictionary } from "./types";
export function identity<T>(value: T): T {
  return value;
}

export function getFirtsItem<T>(value: T[]): T {
  return value[0];
}

export function createResponse<T>(value: T): ApiResponseSystem<T> {
  return { success: true, data: value, message: "API RESPONDIENDO" };
}

export function getProperty<T, K extends keyof T>(user: T, key: K): T[K] {
  return user[key];
}

export function getActiveUsers(users: UserSystem[]): UserSystem[] {
  return users.filter((user) => user.isActive);
}

export function findUserByEmail(
  users: UserSystem[],
  email: string,
): UserSystem | undefined {
  return users.find((user) => user.email === email);
}

export function updateUser(
  user: UserSystem,
  update: Partial<UserSystem>,
): UserSystem {
  return { ...user, ...update };
}

export function changeUserStatus(
  user: UserSystem,
  status: UserStatusSystem,
): UserSystem {
  return { ...user, status: status };
}

export function printUserInfo(user: UserSystem): UserSystem {
  return user;
}

export function getUserDictionary(users: UserSystem[]): UserSystemDictionary {
  const result = {} as UserSystemDictionary;

  for (const user of users) {
    if (result[user.role]) {
      result[user.role].push(user);
    } else {
      result[user.role] = [];
      result[user.role].push(user);
    }
  }

  return result;
}
