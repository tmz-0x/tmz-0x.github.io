export function applyMobileRuntime() {
  function updateLayout() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const isMobile = vw < 768;

    document.documentElement.style.setProperty("--vh", `${vh * 0.01}px`);

    if (isMobile) {
      document.body.classList.add("mobile-mode");
    } else {
      document.body.classList.remove("mobile-mode");
    }
  }

  updateLayout();
  window.addEventListener("resize", updateLayout);
  window.addEventListener("orientationchange", updateLayout);
}
