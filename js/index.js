/**
 * index.js — logika naslovnice (html/index.html)
 *
 * Demonstracija BOM-a:
 * - window + setInterval (periodično ažuriranje sata)
 * - window + događaj resize (dimenzije prozora)
 * - localStorage (trajno spremanje imena u pregledniku)
 *
 * U svemu tome koristimo i DOM API (querySelector, textContent, addEventListener).
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
   * Formatira Date objekt u čitljiv niz (hr-HR lokal).
   * Date je ugrađeni konstruktor u JavaScriptu; često se koristi zajedno s BOM timerima.
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

  function tickClock() {
    if (clockEl) {
      clockEl.textContent = formatClock(new Date());
    }
  }

  /**
   * Prikaz unutarnjih dimenzija viewporta — svojstva window.innerWidth / innerHeight.
   */
  function updateWindowSize() {
    if (winW && winH) {
      winW.textContent = String(window.innerWidth);
      winH.textContent = String(window.innerHeight);
    }
  }

  /**
   * Čita ime iz localStorage i ispisuje pozdrav u DOM.
   */
  function refreshGreeting() {
    var ime = localStorage.getItem(LS_KEY);
    if (!greetingEl) return;
    if (ime && ime.trim()) {
      greetingEl.textContent = "Bok, " + ime.trim() + "! Lijepo vas vidjeti na projektu.";
      if (nameInput) nameInput.value = ime.trim();
    } else {
      greetingEl.textContent = "Unesite ime ispod i kliknite Spremi — zapamtit će ga preglednik (localStorage).";
    }
  }

  // ----- Pokretanje sata: setInterval vraća ID timera (pripada window okolini) -----
  tickClock();
  window.setInterval(tickClock, 1000);

  // ----- Dimenzije prozora pri učitavanju i pri svakom resize -----
  updateWindowSize();
  window.addEventListener("resize", updateWindowSize);

  // ----- Spremanje imena u localStorage -----
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
