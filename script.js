const form = document.getElementById("form");
const desktop = document.getElementById("desktop-background");
const mobile = document.getElementById("mobile-background");

form.style.marginTop = `-${form.offsetHeight / 2}px`;

desktop.style.marginTop = `-${desktop.offsetHeight}px`;
mobile.style.marginTop = `-${mobile.offsetHeight}px`;

window.addEventListener("resize", () => {
  form.style.marginTop = `-${form.offsetHeight / 2}px`;
  desktop.style.marginTop = `-${desktop.offsetHeight}px`;
  mobile.style.marginTop = `-${mobile.offsetHeight}px`;
});
