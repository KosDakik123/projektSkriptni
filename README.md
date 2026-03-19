# Projektni zadatak — DOM i BOM u pregledniku

**Predmet:** Web tehnologije (SJV)  
**Tema:** Demonstracija rada s **DOM-om** (Document Object Model) i **BOM-om** (Browser Object Model) u čistom JavaScriptu.

**Autori:** David Kos, Leon Ermakora, Mihael Jakšić

## Struktura projekta

```
Projekt seminar/
├── index.html          ← preusmjerava na html/index.html (GitHub Pages, korijen stranice)
├── .nojekyll           ← isključuje Jekyll na GitHub Pagesu (čisti statički projekt)
├── README.md           ← ovaj dokument (opis za predaju)
├── Dokumentacija.md    ← detaljnije: što koji dio koda radi
├── html/               ← HTML stranice
│   ├── index.html
│   ├── dom-lab.html
│   └── bom-lab.html
├── css/
│   └── style.css
├── js/
│   ├── common.js       ← zajednička logika (npr. aktivna stavka u izborniku)
│   ├── index.js        ← naslovnica: sat, dimenzije prozora, ime korisnika
│   ├── dom-lab.js      ← dinamička lista zadataka (DOM)
│   └── bom-lab.js      ← navigator, screen, location, history, sessionStorage
└── slike/
    ├── logo.png        ← logo u zaglavlju
    └── favicon.png     ← ikona u kartici preglednika
```

## Kako pokrenuti

1. Otvorite mapu projekta u pregledniku **preko lokalnog poslužitelja** (preporučeno) ili dvoklikom na `html/index.html` (neke BOM značajke rade i bez poslužitelja).
2. Za lokalni poslužitelj (Python 3): u korijenu projekta pokrenite  
   `python -m http.server 8080`  
   zatim u pregledniku idite na `http://localhost:8080/` (korijenski `index.html` preusmjerava na `html/`).

## Objava na GitHub Pages

Stranica koristi **relativne putanje** (`../css/`, `../js/` itd.), pa radi kao **project site**.

**Javna adresa projekta (nakon uključenja Pages):**  
[https://kosdakik123.github.io/projektSkriptni/](https://kosdakik123.github.io/projektSkriptni/)

Repozitorij: [github.com/KosDakik123/projektSkriptni](https://github.com/KosDakik123/projektSkriptni)

### Koraci

1. Repozitorij je: `https://github.com/KosDakik123/projektSkriptni.git` (može biti prazan pri prvom pushu).
2. U mapi projekta u PowerShellu:

   ```powershell
   cd "c:\Users\kosda\Documents\Kod\SJV\Projekt seminar"
   git init
   git add .
   git commit -m "Initial commit: DOM/BOM projekt"
   git branch -M main
   git remote add origin https://github.com/KosDakik123/projektSkriptni.git
   git push -u origin main
   ```

   Ako `git remote add` javi da origin već postoji: `git remote set-url origin https://github.com/KosDakik123/projektSkriptni.git`

3. Na GitHubu: **Settings** → **Pages** → **Source**: **Deploy from a branch** → branch **`main`**, folder **`/ (root)`** → **Save**.
4. Pričekaj oko minute. Stranica: **https://kosdakik123.github.io/projektSkriptni/** (korijenski `index.html` preusmjerava na `html/index.html`).

Ako koristiš **privatni** repozitorij, GitHub Pages na besplatnom računu može biti ograničen — tada ili učini repo **public** za predaju, ili koristi lokalni / drugi hosting.

Više u [GitHub dokumentaciji za Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Što projekt ispunjava (prema uputama)

| Zahtjev | Gdje je ostvareno |
|--------|-------------------|
| ≥3 povezane HTML stranice | `html/index.html`, `dom-lab.html`, `bom-lab.html` |
| JavaScript + DOM | `dom-lab.js` — dodavanje/brisanje elemenata, `textContent`, klase |
| BOM objekti/metode | `index.js`, `bom-lab.js` — `window`, `navigator`, `screen`, `location`, `history`, `sessionStorage` |
| Dinamika bez osvježavanja | `addEventListener`, promjena sadržaja i stilova u hodu |

## Vanjski resursi

- **Google Fonts** — font [DM Sans](https://fonts.google.com/specimen/DM+Sans) (učitava se s CDN-a; potrebna internetska veza pri prvom otvaranju).

## Napomena za prezentaciju

Svaki član grupe treba znati objasniti: razliku DOM vs BOM, zašto se koristi `addEventListener`, što je `localStorage`/`sessionStorage` i kako `history.pushState` mijenja ponašanje „natrag“ u pregledniku na `bom-lab.html`.
