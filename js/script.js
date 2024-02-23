var cat = document.querySelector (".cat");
var button = document.querySelector (".show-cat");

button.addEventListener("click", function () {
if (cat.classList.contains("show")) {
    cat.classList.remove("show");}
else {cat.classList.add("show");};
});
