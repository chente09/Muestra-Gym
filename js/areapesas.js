document.addEventListener("DOMContentLoaded", function () {
    var joinButton = document.getElementById("joinButton");
    var modal = document.getElementById("modal");
    var closeModalButton = document.getElementById("closeModalButton");
    var submitFormButton = document.getElementById("submitFormButton");

    joinButton.addEventListener("click", function () {
        modal.style.display = "block";
        // Agregar animación de entrada para el modal (opcional)
        modal.classList.add("fadeIn");
    });

    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    submitFormButton.addEventListener("click", function () {
        alert("¡Gracias por inscribirte en nuestro gimnasio! Te contactaremos pronto.");
        modal.style.display = "none";
    });
});


