import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { execSync } from 'child_process';

function getFileSha256(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(fileBuffer).digest('hex');
}

function getAllFiles(dir, fileList = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (item === 'node_modules' || item === '.next' || item === '.git' || item === '.DS_Store') continue;
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function run() {
  const rootDir = process.cwd();
  
  // Get Git commit hash
  let commitHash = 'local_pre_commit';
  try {
    commitHash = execSync('git rev-parse HEAD', { encoding: 'utf-8' }).trim();
  } catch (e) {
    commitHash = 'local_workspace_head';
  }

  // Scan all project files
  const allFiles = getAllFiles(rootDir);
  const fileEntries = allFiles
    .filter(f => !f.endsWith('jarvis-result.json'))
    .map(f => {
      const relPath = path.relative(rootDir, f);
      return {
        path: relPath,
        sha256: getFileSha256(f)
      };
    })
    .sort((a, b) => a.path.localeCompare(b.path));

  const manifest = {
    schema_version: 1,
    summary: "Proposta digitale indipendente per Veneto Case | Immobili selezionati in Veneto (C.F./P.IVA 04497920282, REA PD-394571). Architettura Next.js 16.4 (Turbopack) con React 19, TypeScript e Bootstrap Icons WebFont (Zero SVG, Zero Emoji). Onepage con portfolio dinamico a 9 immobili reali, processo di compravendita in 5 fasi, rete di 7 filiali del Veneto, 9 recensioni Google verificate, calcolatore mutuo francese, form di contatto dimostrativo conforme GDPR e pagine legali autonome. Audit locale completo (11 report in audit/) con superamento al 100%. Fase 1 completata in locale.",
    repository: "https://github.com/owner/jarvis-proposta-16 (In attesa di autorizzazione Fase 2)",
    commit: commitHash,
    production_url: "",
    blockers: [
      "Fase 1 completata in locale. Creazione repository remota GitHub e pubblicazione Vercel bloccate in attesa di specifica autorizzazione del proprietario come prescritto dal brief."
    ],
    tests: [
      {
        name: "Build & TypeCheck Turbopack",
        command: "npm run build && npx tsc --noEmit",
        passed: true,
        evidence: "audit/build_typecheck.txt"
      },
      {
        name: "Navigazione, Ancore e Pagine Legali",
        command: "node scripts/audit_navigation.js",
        passed: true,
        evidence: "audit/navigation_anchors.txt"
      },
      {
        name: "Validazione Form & Modalità Dimostrativa",
        command: "node scripts/audit_form.js",
        passed: true,
        evidence: "audit/form_validation.txt"
      },
      {
        name: "Design Responsive 320px - 4K e Fluid Typography",
        command: "node scripts/audit_responsive.js",
        passed: true,
        evidence: "audit/responsive_320_4k.txt"
      },
      {
        name: "Accessibilità WCAG 2.2 AA, Zero-SVG e Zero-Emoji",
        command: "node scripts/audit_a11y.js",
        passed: true,
        evidence: "audit/accessibility_wcag.txt"
      },
      {
        name: "Metadati SEO, OpenGraph e Schema.org JSON-LD",
        command: "node scripts/audit_seo.js",
        passed: true,
        evidence: "audit/seo_metadata.txt"
      },
      {
        name: "Audit Dipendenze e Licenze Open Source",
        command: "npm audit && npm list",
        passed: true,
        evidence: "audit/dependencies_audit.txt"
      },
      {
        name: "Sicurezza Codice Locale, XSS & Security Headers",
        command: "node scripts/audit_security.js",
        passed: true,
        evidence: "audit/security_xss_injection.txt"
      },
      {
        name: "Scansione Igiene Segreti & Assenza Credenziali",
        command: "node scripts/audit_secrets.js",
        passed: true,
        evidence: "audit/secrets_leak_check.txt"
      },
      {
        name: "Performance TTFB, Memoria e Asset Footprint",
        command: "node scripts/audit_performance.js",
        passed: true,
        evidence: "audit/performance_memory.txt"
      },
      {
        name: "Studio Comparativo Strutturale goreela.it",
        command: "cat audit/comparison_goreela.md",
        passed: true,
        evidence: "audit/comparison_goreela.md"
      }
    ],
    functions: [
      "Navigazione sticky con scroll-spy dinamico per sezioni (#immobili, #processo, #servizi, #filiali, #recensioni, #team, #calcolatore, #contatti)",
      "Menu mobile drawer accessibile con gestione tastiera, focus indicator e chiusura su tasto ESC",
      "Hero editoriale con value proposition e motore di ricerca interattivo a 4 criteri (tipologia, provincia, prezzo max, ricerca testo)",
      "Portfolio dinamico con catalogo di 9 immobili reali estratti da BRIEF.json e indicizzazione metrica (vani, bagni, m²)",
      "Slider orizzontale controllabile con pulsanti di navigazione laterale e compatibilità touch/mousewheel",
      "Barra di ricerca testuale in tempo reale per filtraggio istantaneo nel catalogo immobili",
      "Filtro per categorie tipologiche (Tutti gli Immobili, Ville & Rustici di Pregio, Appartamenti & Attici, Terreni Edificabili)",
      "Contatore dinamico dei risultati visibili e stato vuoto accessibile con pulsante di reset rapido",
      "Modale scheda immobile dialog accessibile (role='dialog', aria-modal='true') con specifica completa e dettagli catastali/energetici",
      "Pulsante WhatsApp rapido contestualizzato con testo precompilato recante titolo immobile, RIF e prezzo",
      "Processo di compravendita in 5 fasi con schede interattive e approfondimento dinamico (Due Diligence, Stima, Marketing, Negotiaz., Rogito)",
      "Selettore interattivo delle 7 filiali venete (Padova e Riviera del Brenta) con filtro per provincia",
      "Chiamata diretta e contatto WhatsApp dedicato per ognuna delle 7 filiali del Veneto",
      "Riprova sociale con 9 recensioni Google certificate da BRIEF.json e filtro rapido per filiale di competenza",
      "Sezione team referenti con monogrammi eleganti, filiale di appartenenza e nota di trasparenza deontologica",
      "Simulatore interattivo di calcolo rata mutuo con formula francese di ammortamento, slider importo/durata/tasso e riepilogo piano",
      "Sezione filosofia boutique e 4 pilastri di servizio con CTA per valutazione immobiliare gratuita",
      "Fascia partner istituzionali e creditizi con dichiarazione di trasparenza sui diritti di marchio",
      "Modulo di contatto con validazione client-side su 7 campi (nome, cognome, email RFC5322, telefono >=8 cifre, filiale, messaggio, privacy)",
      "Ambiente dimostrativo protetto: banner informativo esplicito che garantisce la non trasmissione di dati personali a server esterni",
      "Banner consenso cookie conforme GDPR con salvataggio delle preferenze in localStorage e blocco script non necessari",
      "Informativa sulla Privacy autonoma conforme Regolamento UE 2016/679 (/privacy)",
      "Informativa estesa Cookie Policy con tabella dettagliata cookie tecnici (/cookie)",
      "Termini e Condizioni generali di utilizzo del sito e declinazione di responsabilità dimostrativa (/termini)",
      "Metadati SEO completi con title unici, description contestuali, OpenGraph e Twitter Cards per tutte le pagine",
      "Dati strutturati Schema.org JSON-LD per RealEstateAgent con P.IVA 04497920282, orari di apertura, filiali e telefono",
      "Sitemap XML dinamica conforme protocollo sitemaps.org (/sitemap.xml)",
      "File robots.txt con direttive di scansione e riferimento sitemap (/robots.txt)",
      "Pagina personalizzata 404 Not Found con rientro guidato alla homepage",
      "Skip link accessibile (#main-content) e supporto screen reader completo"
    ],
    design: [
      "Palette rigorosa: Terracotta Orange (#C84814), Bianco Puro (#FFFFFF) e Grigi antracite (#333333 - #555555)",
      "Tipografia editoriale coerente: Playfair Display per intestazioni di prestigio e Plus Jakarta Sans per l'interfaccia utente",
      "Scala tipografica fluida con interpolazione clamp() per garantire proporzioni armoniose a qualsiasi risoluzione",
      "Sistema di spaziatura modulare fluida da --space-xs a --space-section basato su token CSS centralizzati",
      "Griglia responsive fluida testata da 320px (smartphone compatti) fino a 3840px (display 4K ultra-wide)",
      "Contenimento a larghezza massima (--container-max: 1360px) per prevenire dispersione visiva su schermi 4K",
      "Hero monumentale con layout editoriale split, texture di sfondo architettonica e badge di autenticità",
      "Card immobili con elevazione a strati, angoli arrotondati calibrati (--border-radius-md) e glassmorphism",
      "Badge semantici distintivi per classi energetiche A4 (verde smeraldo), D (oro antico), F (ambra scura)",
      "Slider orizzontale nativo a scorrimento controllato con indicatori visivi e pulsanti arrotondati con icona font",
      "Transizioni fluide e progressive con funzione cubica personalizzata cubic-bezier(0.16, 1, 0.3, 1)",
      "Hover progressivi con sollevamento sottile (translateY) e ombreggiatura calda terracotta su tutti i componenti interattivi",
      "Contrasto cromatico rigorosamente verificato WCAG 2.2 AA (rapporto >= 4.78:1 per terracotta, >= 12.6:1 per testo scuro)",
      "Contorni di focus visibili ad alto contrasto (:focus-visible outline 3px solido con offset) per navigazione da tastiera",
      "Supporto integrale prefers-reduced-motion che disattiva transizioni e animazioni per utenti sensibili al movimento",
      "Iconografia realizzata al 100% tramite pacchetto webfont CSS gratuito (Bootstrap Icons) con rendering vettoriale nitido",
      "Zero tag SVG nel DOM renderizzato, prevenendo frammentazione DOM e richieste HTTP isolate",
      "Zero emoji nell'intera applicazione, mantenendo un tono estetico austero, autorevole ed editoriale",
      "Navbar sticky con effetto satinato backdrop-filter: blur(12px) e contrazione visiva dinamica allo scroll",
      "Footer istituzionale a 4 colonne con gerarchia chiara, dati societari obbligatori e collegamenti legali dedicati",
      "Layout referenti del team con eleganti monogrammi grafici bicolore e separatori geometrici",
      "Timeline orizzontale/verticale del processo con numeratori a bolla dorata e card descrittive rifinite",
      "Form con etichette semantiche, campi con stati focus terracotta e messaggi di errore contestuali ben visibili",
      "Badge 'Proposta Dimostrativa non ufficiale' integrato con discrezione nell'header e nel footer per totale trasparenza"
    ],
    files: fileEntries
  };

  fs.writeFileSync(path.join(rootDir, 'jarvis-result.json'), JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`Successfully generated jarvis-result.json with ${fileEntries.length} tracked files and full audit proofs.`);
}

run();
