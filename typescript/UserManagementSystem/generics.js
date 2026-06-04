export function identity(value) {
    return value;
}
export function getFirtsItem(value) {
    return value[0];
}
export function createResponse(value) {
    return { success: true, data: value, message: "API RESPONDIENDO" };
}
export function getProperty(user, key) {
    return user[key];
}
export function getActiveUsers(users) {
    return users.filter((user) => user.isActive);
}
export function findUserByEmail(users, email) {
    return users.find((user) => user.email === email);
}
export function updateUser(user, update) {
    return { ...user, ...update };
}
export function changeUserStatus(user, status) {
    return { ...user, status: status };
}
export function printUserInfo(user) {
    return user;
}
export function getUserDictionary(users) {
    const result = {};
    for (const user of users) {
        if (result[user.role]) {
            result[user.role].push(user);
        }
        else {
            result[user.role] = [];
            result[user.role].push(user);
        }
    }
    return result;
}
