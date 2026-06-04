import { deleteUser,setStatus } from "./functions.js";
const app = document.querySelector("#app") as HTMLDivElement;
app.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("btnDelete")) {
    const id = target.dataset.id;
    if (!id) return;
    deleteUser(parseInt(id));
  }
    if (target.classList.contains("btnChange")) {
    const id = target.dataset.id;
    if (!id) return;
    setStatus(parseInt(id));
  }
});
