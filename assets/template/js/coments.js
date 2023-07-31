document.addEventListener("DOMContentLoaded", function() {
    const comentariosToggle = document.getElementById("comentariosToggle");
    const comentariosSection = document.getElementById("comentariosSection");
  
    comentariosToggle.addEventListener("click", function() {
      if (comentariosSection.style.display === "none") {
        comentariosSection.style.display = "block";
      } else {
        comentariosSection.style.display = "none";
      }
    });
  });
  