const btn = document.getElementById("popoverBtn");
const popover = document.getElementById("popover");

btn.addEventListener("click", () => {
  popover.classList.toggle("hidden");
});
