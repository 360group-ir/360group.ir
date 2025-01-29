document
    .getElementById("selectCityButton")
    .addEventListener("click", function() {
        document.getElementById("modalOverlay").style.display = "block";
        document.getElementById("cityModal").style.display = "block";
    });

document
    .getElementById("closeModalButton")
    .addEventListener("click", function() {
        document.getElementById("modalOverlay").style.display = "none";
        document.getElementById("cityModal").style.display = "none";
    });