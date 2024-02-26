var cat = document.querySelector (".cat");
var button = document.querySelector (".show-cat");

button.addEventListener("click", function () {
if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.classList.add("disappear");
    button.innerText = "Wait, come back!";}
else {cat.classList.add("show");
    button.classList.remove("disappear");
    button.innerText = "Shoo, cat!";};
});
