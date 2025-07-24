// Form Validation
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    if (!name || !email || !phone) {
        alert("Please fill in all required fields.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email.");
    } else {
        alert("Form submitted successfully!");
    }
});

// To-Do List Functions
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => li.remove();
    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

// Image Gallery Functions
function addImage() {
    const url = document.getElementById("imgUrl").value.trim();
    if (!url) return;

    const img = document.createElement("img");
    img.src = url;
    img.alt = "User uploaded image";
    document.getElementById("images").appendChild(img);
    document.getElementById("imgUrl").value = "";
}