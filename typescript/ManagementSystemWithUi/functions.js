import { users } from "./models.js";
export function renderUser(users) {
    const app = document.querySelector("#app");
    app.innerHTML = "";
    users.forEach((user) => {
        const div = document.createElement("div");
        const pName = document.createElement("p");
        const buttonDelete = document.createElement("button");
        const buttonChangeStatus = document.createElement("button");
        pName.textContent = user.name + " - " + user.status;
        buttonDelete.textContent = "Eliminar";
        buttonChangeStatus.textContent =
            user.status === "activo" ? "Inactivar" : "activar";
        div.classList.add("card");
        if (user.status == "activo") {
            div.classList.add("active");
        }
        else {
            div.classList.add("inactive");
        }
        buttonDelete.classList.add("btnDelete");
        buttonDelete.setAttribute("data-id", user.id.toString());
        buttonChangeStatus.classList.add("btnChange");
        buttonChangeStatus.setAttribute("data-id", user.id.toString());
        pName.classList.add("nameStatus");
        app.appendChild(div);
        div.appendChild(pName);
        div.appendChild(buttonDelete);
        div.appendChild(buttonChangeStatus);
    });
}
export function deleteUser(id) {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1)
        return;
    users.splice(index, 1);
    renderUser(users);
}
export function setStatus(id) {
    const user = users.find((user) => user.id === id);
    if (!user)
        return;
    user.status = user?.status == "activo" ? "inactivo" : "activo";
    renderUser(users);
}
