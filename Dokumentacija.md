# Tehnička dokumentacija projekta

## 1. DOM (Document Object Model)

**DOM** je stablo objekata koje preglednik gradi iz HTML-a. JavaScriptom možete:
- tražiti čvorove (`querySelector`, `getElementById`),
- mijenjati tekst (`textContent`),
- dodavati i uklanjati elemente (`createElement`, `appendChild`, `remove`),
- mijenjati klase (`classList`) za stilove.

**Datoteka:** `js/dom-lab.js`  
**Stranica:** `html/dom-lab.html`  

Primjer toka: korisnik upiše tekst → klik na „Dodaj“ → skripta stvara `<li>` → dodaje ga u `<ul>` → bez ponovnog učitavanja stranice.

---

## 2. BOM (Browser Object Model)

**BOM** su objekti koje preglednik nudi za komunikaciju s „okolinom“ (prozor, povijest, zaslon, podaci o sustavu), a nisu striktno sadržaj dokumenta.

| Objekt / API | Uloga u projektu |
|--------------|------------------|
| `window` | Globalni kontekst; `innerWidth` / `innerHeight`; događaj `resize`; `setInterval` za sat |
| `navigator` | `userAgent`, `language`, `onLine` — informacije o pregledniku i jeziku |
| `screen` | `width`, `height`, `availWidth` — dimenzije zaslona |
| `location` | `href`, `pathname` — trenutačni URL i putanja |
| `history` | `back()`, `forward()`, `length` — navigacija kroz povijest sesije |
| `sessionStorage` | Spremanje broja posjeta stranice unutar jedne sesije (kartica) |

**Datoteke:** `js/index.js`, `js/bom-lab.js`

---

## 3. CSS (`css/style.css`)

Jedna datoteka stilova za sve stranice: varijable (`:root`), tamna/svijetla tema na `dom-lab.html` mijenja klasu na `<body>` iz JavaScripta.

---

## 4. Putanje datoteka

Iz `html/*.html` resursi se učitavaju relativno:
- `../css/style.css`
- `../js/...`
- `../slike/logo.png`, `../slike/favicon.png`

Ako premjestite stranice, trebate prilagoditi te putanje.

---

## 5. Pristupačnost i testiranje

- Gumbi i polja imaju povezane oznake (`<label for="...">`).
- Prije predaje: provjerite sve tri stranice u Chrome/Firefox/Edge, promijenite veličinu prozora na `index.html` i testirajte gumb „Natrag“ na `bom-lab.html` nakon što ste otvorili druge stranice u istoj kartici.
