/**
 * @fileoverview Logika naslovnice (html/index.html): BOM (timer, resize,
 *     localStorage) i osnovni DOM API.
 */
(function () {
  "use strict";

  var LS_KEY = "projekt_seminar_ime_korisnika";

  var clockEl = document.getElementById("clock-display");
  var winW = document.getElementById("win-w");
  var winH = document.getElementById("win-h");
  var greetingEl = document.getElementById("greeting-msg");
  var nameInput = document.getElementById("user-name");
  var btnSave = document.getElementById("btn-save-name");

  /**
   * Pretvara Date u lokalizirani string za prikaz sata.
   * @param {!Date} d Trenutačno vrijeme.
   * @return {string} Formatirani datum i vrijeme (hr-HR).
   */
  function formatClock(d) {
    return d.toLocaleString("hr-HR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  /** Ažurira tekstualni prikaz sata u DOM-u. */
  function tickClock() {
    if (clockEl) {
      clockEl.textContent = formatClock(new Date());
    }
  }

  /** Postavlja širinu i visinu viewporta (window.innerWidth / innerHeight). */
  function updateWindowSize() {
    if (winW && winH) {
      winW.textContent = String(window.innerWidth);
      winH.textContent = String(window.innerHeight);
    }
  }

  /**
   * Učitava ime iz localStorage i ispisuje pozdrav; prazan unos briše ključ.
   */
  function refreshGreeting() {
    var ime = localStorage.getItem(LS_KEY);
    if (!greetingEl) {
      return;
    }
    if (ime && ime.trim()) {
      greetingEl.textContent = "Bok, " + ime.trim() + "! Lijepo vas vidjeti na projektu.";
      if (nameInput) {
        nameInput.value = ime.trim();
      }
    } else {
      greetingEl.textContent =
        "Unesite ime ispod i kliknite Spremi — zapamtit će ga preglednik (localStorage).";
    }
  }

  // Sat: setInterval pripada window okolini (BOM).
  tickClock();
  window.setInterval(tickClock, 1000);

  // Dimenzije prozora: resize na window.
  updateWindowSize();
  window.addEventListener("resize", updateWindowSize);

  // Ime korisnika: localStorage (BOM).
  if (btnSave && nameInput) {
    btnSave.addEventListener("click", function () {
      var v = nameInput.value.trim();
      if (v) {
        localStorage.setItem(LS_KEY, v);
      } else {
        localStorage.removeItem(LS_KEY);
      }
      refreshGreeting();
    });
  }

  refreshGreeting();
})();
