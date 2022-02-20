let count = 0;
const number = document.getElementById("number");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", (e) => {
        const className = e.target.classList;

        if (className.contains("decrease")) {
            count--;
        } else if (className.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            number.style.color = "green";
        } else if (count < 0) {
            number.style.color = "red";
        } else {
            number.style.color = "#000";
        }
        number.innerHTML = count;
    })
});