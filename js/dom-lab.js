/**
 * @fileoverview DOM vježba (html/dom-lab.html): dinamička lista, tema na body,
 *     događaji bez reload-a.
 */
(function () {
  "use strict";

  var body = document.body;
  var btnTheme = document.getElementById("btn-theme-toggle");
  var taskInput = document.getElementById("task-input");
  var btnAdd = document.getElementById("btn-add-task");
  var taskList = document.getElementById("task-list");
  var taskCountEl = document.getElementById("task-count");

  /**
   * Broji <li> elemente i ažurira natpis (uz aria-live u HTML-u).
   */
  function updateCount() {
    if (!taskList || !taskCountEl) {
      return;
    }
    var n = taskList.querySelectorAll("li").length;
    taskCountEl.textContent = "Zadataka: " + n;
  }

  /**
   * Dodaje jedan zadatak: span + gumbi Gotovo / Obriši.
   * @param {string} text Tekst stavke.
   */
  function addTask(text) {
    if (!taskList) {
      return;
    }
    var li = document.createElement("li");

    var span = document.createElement("span");
    span.textContent = text;

    var btnDone = document.createElement("button");
    btnDone.type = "button";
    btnDone.className = "secondary";
    btnDone.textContent = "Gotovo";
    btnDone.addEventListener("click", function () {
      li.classList.toggle("done");
    });

    var btnDel = document.createElement("button");
    btnDel.type = "button";
    btnDel.className = "danger";
    btnDel.textContent = "Obriši";
    btnDel.addEventListener("click", function () {
      li.remove();
      updateCount();
    });

    li.appendChild(span);
    li.appendChild(btnDone);
    li.appendChild(btnDel);
    taskList.appendChild(li);
    updateCount();
  }

  function tryAddFromInput() {
    if (!taskInput) {
      return;
    }
    var t = taskInput.value.trim();
    if (!t) {
      return;
    }
    addTask(t);
    taskInput.value = "";
    taskInput.focus();
  }

  // Tema: classList na document.body; CSS reagira na .theme-light.
  if (btnTheme) {
    btnTheme.addEventListener("click", function () {
      body.classList.toggle("theme-light");
    });
  }

  if (btnAdd) {
    btnAdd.addEventListener("click", tryAddFromInput);
  }

  if (taskInput) {
    taskInput.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter") {
        ev.preventDefault();
        tryAddFromInput();
      }
    });
  }

  updateCount();
})();
