const accordions = Array.from(document.getElementsByClassName("accordion"));

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");

    const panel = accordion.nextElementSibling;
    panel.style.display = panel.style.display === "none" ? "block" : "none";
    panel.style.maxHeight =
      panel.style.maxHeight === "none" ? "`${panel.scrollHeight}px`" : "none";

    // if (panel.style.maxHeight) {
    //   panel.style.maxHeight = null;
    // } else {
    //   panel.style.maxHeight = panel.scrollHeight + "px";
    // }
  });
});

// if (panel.style.display === "block") {
//     panel.style.display = "none";
//   } else {
//     panel.style.display = "block";
//   }
