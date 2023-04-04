const textInput = document.querySelector("input");
const addBtn = document.querySelector(".addBtn");
const taskContainer = document.querySelector(".taskContainer");
const completed = document.querySelector(".completed");

function addNewTask() {
  addBtn.addEventListener("click", () => {
    if (textInput.value !== "") {
      const addTask = document.createElement("li");
      addTask.classList.add("list");
      taskContainer.appendChild(addTask);

      const addP = document.createElement("p");
      addP.textContent = `${textInput.value}`;
      addP.classList.add("p");
      addTask.appendChild(addP);

      const comBtn = document.createElement("button");
      comBtn.innerHTML = `<i class="fa-solid fa-check-double"></i>`;
      comBtn.classList.add("btn");
      addTask.appendChild(comBtn);

      const delBtn = document.createElement("button");
      delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
      delBtn.classList.add("btn");
      addTask.appendChild(delBtn);

      textInput.value = "";

      delBtn.addEventListener("click", () => {
        // const parent = this.parentNode;
        delBtn.parentNode.remove();
        if(list.length = 0){
          h3.remove()
        }
      });
      comBtn.addEventListener("click", () => {
        comBtn.parentNode.remove();
        // const h3 = document.createElement("h3")
        // h3.textContent= "COMPLETED TASK"
        // h3.classList.add("h3")
        // completed.append(h3)
        completed.appendChild(comBtn.parentNode);
        comBtn.parentElement.style.background = "green";
        addP.style.textDecoration = "line-through";
        comBtn.remove()
      });
    }
  });
}
addNewTask();
