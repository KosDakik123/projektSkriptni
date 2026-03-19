/**
 * common.js — zajednička skripta za sve stranice
 *
 * Svrha: označiti u glavnom izborniku stranicu na kojoj se korisnik trenutačno nalazi.
 * Koristimo BOM svojstvo window.location.pathname kako bismo usporedili putanju s href-om
 * poveznica u navigaciji.
 */
(function () {
  "use strict";

  /**
   * Ime trenutačne HTML datoteke (npr. index.html).
   * Na Windows file:// putanja može sadržavati i / i \, zato normaliziramo.
   */
  var path = window.location.pathname.replace(/\\/g, "/");
  var currentFile = path.split("/").filter(Boolean).pop() || "";

  var links = document.querySelectorAll(".main-nav a");

  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href) return;
    try {
      var linkUrl = new URL(href, window.location.href);
      var linkFile = linkUrl.pathname.replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      if (linkFile && linkFile === currentFile) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    } catch (e) {
      /* Nevažeći URL — preskoči */
    }
  });
})();
