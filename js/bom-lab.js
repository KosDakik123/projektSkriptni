/**
 * @fileoverview BOM vježba (html/bom-lab.html): navigator, screen, location,
 *     history, sessionStorage, online/offline na window.
 */
(function () {
  "use strict";

  var SESSION_KEY = "projekt_seminar_bom_posjete";

  var navEl = document.getElementById("navigator-info");
  var screenEl = document.getElementById("screen-info");
  var locEl = document.getElementById("location-info");
  var onlineStatus = document.getElementById("online-status");
  var histLen = document.getElementById("hist-len");
  var visitEl = document.getElementById("visit-count");
  var btnBack = document.getElementById("btn-back");
  var btnForward = document.getElementById("btn-forward");
  var btnRefresh = document.getElementById("btn-refresh-bom");
  var btnResetSession = document.getElementById("btn-reset-session");

  /**
   * Ispunjava <dl> parovima dt/dd iz mapiranja ključ → string vrijednost.
   * @param {?HTMLElement} container Korijen liste (npr. prazan <dl>).
   * @param {!Object<string, string>} pairs Objekt s labelama i vrijednostima.
   */
  function fillDefinitionList(container, pairs) {
    if (!container) {
      return;
    }
    container.innerHTML = "";
    Object.keys(pairs).forEach(function (key) {
      var dt = document.createElement("dt");
      dt.textContent = key;
      var dd = document.createElement("dd");
      dd.textContent = pairs[key];
      container.appendChild(dt);
      container.appendChild(dd);
    });
  }

  /** Čita sve BOM panele i upisuje u DOM (bez reload-a stranice). */
  function refreshBomPanels() {
    // navigator — user agent, jezik, platforma.
    fillDefinitionList(navEl, {
      "navigator.userAgent": navigator.userAgent,
      "navigator.language": navigator.language,
      "navigator.languages": (navigator.languages || []).join(", "),
      "navigator.platform": navigator.platform || "—",
      "navigator.cookieEnabled": String(navigator.cookieEnabled),
    });

    fillDefinitionList(screenEl, {
      "screen.width": String(screen.width),
      "screen.height": String(screen.height),
      "screen.availWidth": String(screen.availWidth),
      "screen.availHeight": String(screen.availHeight),
      "devicePixelRatio": String(window.devicePixelRatio || 1),
    });

    fillDefinitionList(locEl, {
      "location.href": location.href,
      "location.pathname": location.pathname,
      "location.search": location.search || "(prazno)",
      "location.hash": location.hash || "(prazno)",
    });

    if (histLen) {
      histLen.textContent = String(history.length);
    }

    updateOnlineBadge();
    // Brojač samo prikazujemo; povećanje je u incrementVisitOnce().
    displayVisitCount();
  }

  /** Postavlja badge „Na mreži“ / „Izvan mreže“ prema navigator.onLine. */
  function updateOnlineBadge() {
    if (!onlineStatus) {
      return;
    }
    var ok = navigator.onLine;
    onlineStatus.textContent = ok ? "Na mreži" : "Izvan mreže";
    onlineStatus.classList.toggle("offline", !ok);
  }

  /**
   * Čita sessionStorage i prikazuje broj posjeta (bez povećanja).
   */
  function displayVisitCount() {
    if (!visitEl) {
      return;
    }
    var n = parseInt(sessionStorage.getItem(SESSION_KEY), 10) || 0;
    visitEl.textContent = String(n);
  }

  /**
   * Povećava brojač za jedan pri svakom učitavanju ove stranice u sesiji.
   */
  function incrementVisitOnce() {
    var current = parseInt(sessionStorage.getItem(SESSION_KEY), 10) || 0;
    sessionStorage.setItem(SESSION_KEY, String(current + 1));
    displayVisitCount();
  }

  /** Briše ključ i resetira prikaz brojača. */
  function resetVisitCount() {
    sessionStorage.removeItem(SESSION_KEY);
    displayVisitCount();
  }

  incrementVisitOnce();

  window.addEventListener("online", updateOnlineBadge);
  window.addEventListener("offline", updateOnlineBadge);

  if (btnBack) {
    btnBack.addEventListener("click", function () {
      history.back();
    });
  }
  if (btnForward) {
    btnForward.addEventListener("click", function () {
      history.forward();
    });
  }
  if (btnRefresh) {
    btnRefresh.addEventListener("click", refreshBomPanels);
  }
  if (btnResetSession) {
    btnResetSession.addEventListener("click", resetVisitCount);
  }

  refreshBomPanels();
})();
