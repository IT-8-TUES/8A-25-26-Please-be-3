



const btn = document.getElementById("Dark_light");


//main theme changer
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});



//CHANGING BETWEEN DARK AND LIGHT IN THE BUTTON
btn.addEventListener("click", () => {
    if (btn.textContent === "LIGHT") {
        btn.textContent = "DARK";
    } else {
        btn.textContent = "LIGHT";
    }
});



