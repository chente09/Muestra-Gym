document.addEventListener("DOMContentLoaded", () => {
    const joinButton = document.getElementById("joinButton");
    const modal = document.getElementById("modal");
    const closeModalButton = document.getElementById("closeModalButton");
    const submitFormButton = document.getElementById("submitFormButton");

    joinButton.addEventListener("click", () => {
        modal.style.display = "block";
        modal.classList.add("fadeIn");
    });

    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    submitFormButton.addEventListener("click", () => {
        alert("¡Gracias por mostrar interés en nuestro área de cardio! Te contactaremos pronto.");
        modal.style.display = "none";
    });
});
