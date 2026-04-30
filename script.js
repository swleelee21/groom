(function () {
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var header = document.querySelector(".site-header");
  var reduceMotionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

  function setReducedMotion() {
    document.documentElement.classList.toggle(
      "reduced-motion",
      reduceMotionMq.matches,
    );
  }

  reduceMotionMq.addEventListener("change", setReducedMotion);
  setReducedMotion();

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    var sr = toggle.querySelector(".sr-only");
    if (sr) sr.textContent = "메뉴 열기";
  }

  function openNav() {
    if (!nav || !toggle) return;
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    var sr = toggle.querySelector(".sr-only");
    if (sr) sr.textContent = "메뉴 닫기";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) {
        closeNav();
      } else {
        openNav();
      }
    });

    nav.addEventListener("click", function (e) {
      var t = e.target;
      if (t.closest && t.closest("a[href^=\"#\"]")) {
        closeNav();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  if (header) {
    var lastY = window.scrollY;
    function onScroll() {
      var y = window.scrollY;
      header.classList.toggle("header-scrolled", y > 12);
      lastY = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (!reduceMotionMq.matches) {
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -48px 0px", threshold: 0.12 },
      );
      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      var target = document.querySelector(hash);
      if (!target || reduceMotionMq.matches) return;
      e.preventDefault();
      var hdr = document.querySelector(".site-header");
      var oh = hdr ? hdr.offsetHeight : 0;
      var gap = 14;
      var top =
        target.getBoundingClientRect().top + window.scrollY - oh - gap;
      window.scrollTo({ top: top, behavior: "smooth" });
      if (history.replaceState) history.replaceState(null, "", hash);
    });
  });
})();
