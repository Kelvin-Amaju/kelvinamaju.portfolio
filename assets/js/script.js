

document.addEventListener("DOMContentLoaded", () => {
      const text = "KELVIN AMAJU";
      const container = document.getElementById("animatedText");  
      
      // Create spans for each letter
text.split("").forEach(char => {
  const span = document.createElement("span");
  span.className = "letter";
  span.innerHTML = char === " " ? "&nbsp;" : char; // Use &nbsp; for spaces
  container.appendChild(span);
});

      const letters = document.querySelectorAll(".letter");
      const totalLetters = letters.length;
      const delayIncrement = 100; // Delay in milliseconds

      function easeInOutQuart(t) {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
      }

      function animateLetters(forward = true) {
          letters.forEach((letter, index) => {
              // const delay = Math.max(index, totalLetters - index) * delayIncrement;
            
              const normalizedIndex = Math.max(index, totalLetters - 1 - index) / (totalLetters - 1);
              const easedDelay = easeInOutQuart(normalizedIndex);
              const delay = easedDelay * (totalLetters - 1) * delayIncrement;
            
              setTimeout(() => {
                  letter.style.setProperty("--wght", forward ? 700 : 100);
                  letter.style.setProperty("--wdth", forward ? 400 : 150);
                  letter.style.setProperty("--opacity", forward ? 1 : 0.25);
                  letter.style.setProperty("--letter-spacing", forward ? '0.05em' : '0em');
                  // letter.style.setProperty("--font-size", forward ? '12vw' : '10vw');
              }, delay);
          });

        setTimeout(() => animateLetters(!forward), 4000);
      }

      animateLetters();
  });

  // JavaScript to handle the loader
  window.onload = function() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    // Fade out the loader after 3 seconds
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.style.display = 'block';
        }, 500); // Wait for the fade-out transition to complete
    }, 3000); // 3 seconds
};


"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const tabbar = new TabBar("nav");
});
class TabBar {
    /**
     * @param el CSS selector for the tab bar
     */
    constructor(el) {
        var _a, _b;
        this.el = document.querySelector(el);
        (_a = this.el) === null || _a === void 0 ? void 0 : _a.setAttribute("data-pristine", "true");
        (_b = this.el) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.switchTab.bind(this));
    }
    /**
     * Make the clicked tab active.
     * @param e Click event
     */
    switchTab(e) {
        var _a, _b;
        // allow animations, which were prevented on load
        (_a = this.el) === null || _a === void 0 ? void 0 : _a.removeAttribute("data-pristine");
        const target = e.target;
        const href = target.getAttribute("href");
        // target should be a link before assigning the “current” state
        if (href) {
            // remove the state from the current page…
            const currentPage = (_b = this.el) === null || _b === void 0 ? void 0 : _b.querySelector(`[aria-current="page"]`);
            if (currentPage) {
                currentPage.ariaCurrent = null;
            }
            // …and apply it to the next
            target.ariaCurrent = "page";
        }
    }
}