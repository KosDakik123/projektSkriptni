/**
 * @fileoverview Označava aktivnu stavku glavnog izbornika usporedbom imena
 *     trenutačne HTML datoteke s ciljem svake poveznice (window.location + URL API).
 */
(function () {
  "use strict";

  // Normalizacija putanje: na Windowsu file:// može miješati \ i /.
  var path = window.location.pathname.replace(/\\/g, "/");
  var currentFile = path.split("/").filter(Boolean).pop() || "";

  var links = document.querySelectorAll(".main-nav a");

  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href) {
      return;
    }
    try {
      var linkUrl = new URL(href, window.location.href);
      var linkFile =
        linkUrl.pathname.replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      if (linkFile && linkFile === currentFile) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    } catch (e) {
      // Nevažeći href — ignoriraj, ostatak stranice mora raditi.
    }
  });
})();
