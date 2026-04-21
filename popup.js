const GLOSSARY = [
  { phrase: "Ellen MacArthur Foundation", cat: "Organisations & Frameworks", def: "A global charity working to create a circular economy, providing thought leadership, education, and business engagement on CE topics." },
  { phrase: "Ellen MacArthur",            cat: "Organisations & Frameworks", def: "Founder of the Ellen MacArthur Foundation, which has become the world's leading circular economy organisation." },
  { phrase: "EMF",                        cat: "Organisations & Frameworks", def: "Ellen MacArthur Foundation — a global charity driving the transition to a circular economy." },
  { phrase: "circular economy network",   cat: "Organisations & Frameworks", def: "A community or group of organisations collaborating to advance circular economy principles and practice." },
  { phrase: "Butterfly Diagram",          cat: "Organisations & Frameworks", def: "The Ellen MacArthur Foundation's visual model showing how materials flow through biological and technical cycles in a circular economy." },
  { phrase: "ReSOLVE",                    cat: "Organisations & Frameworks", def: "An EMF framework of six circular economy business strategies: Regenerate, Share, Optimise, Loop, Virtualise, Exchange." },
  { phrase: "New Plastics Economy",       cat: "Organisations & Frameworks", def: "An EMF-led global initiative applying circular economy principles to rethink the future of plastics." },
  { phrase: "Make Fashion Circular",      cat: "Organisations & Frameworks", def: "An EMF initiative working with fashion industry leaders to build a circular fashion economy." },
  { phrase: "Cities and Circular Economy", cat: "Organisations & Frameworks", def: "An EMF programme exploring how circular economy principles can be applied at city level." },
  { phrase: "circular economy in cities", cat: "Organisations & Frameworks", def: "Applying circular economy principles at a city level to reduce waste, emissions and resource consumption." },
  { phrase: "Waste and Resources Action Programme",        cat: "Organisations & Frameworks", def: "A UK charity working to tackle climate change by helping businesses, governments and people reduce waste and use resources sustainably. Also known as WRAP." },
  { phrase: "Circle Economy",                              cat: "Organisations & Frameworks", def: "An Amsterdam-based circular economy consultancy that works with businesses and governments to accelerate the transition to a circular economy." },
  { phrase: "Cradle to Cradle Products Innovation Institute", cat: "Organisations & Frameworks", def: "A global non-profit organisation that promotes the Cradle to Cradle Certified product standard for safe, circular and responsibly made products." },
  { phrase: "World Economic Forum",                        cat: "Organisations & Frameworks", def: "An international organisation for public-private cooperation that regularly publishes research and initiatives on circular economy and sustainability." },
  { phrase: "WEF",                                         cat: "Organisations & Frameworks", def: "World Economic Forum — an international organisation for public-private cooperation, frequently publishing circular economy and sustainability research." },
  { phrase: "UNEP",                                        cat: "Organisations & Frameworks", def: "United Nations Environment Programme — the leading global environmental authority setting the environmental agenda and promoting sustainable development." },
  { phrase: "United Nations Environment Programme",        cat: "Organisations & Frameworks", def: "The leading global environmental authority within the UN system, setting the environmental agenda and promoting sustainable development." },
  { phrase: "European Environment Agency",                 cat: "Organisations & Frameworks", def: "An EU agency providing sound, independent information on the environment to support European policy on sustainability and the circular economy." },
  { phrase: "EEA",                                         cat: "Organisations & Frameworks", def: "European Environment Agency — an EU body providing independent environmental information to support policy on sustainability and circular economy." },
  { phrase: "Fairtrade",                                   cat: "Organisations & Frameworks", def: "An international certification and advocacy organisation promoting fair trading conditions and sustainable supply chains for producers in developing countries." },
  { phrase: "Carbon Trust",                                cat: "Organisations & Frameworks", def: "A UK-based organisation helping businesses, governments and the public sector to accelerate the move to a sustainable, low-carbon economy." },
  { phrase: "BSI",                                         cat: "Organisations & Frameworks", def: "British Standards Institution — the UK national standards body, publishing standards relevant to sustainability, product design and circular economy practices." },
  { phrase: "British Standards Institution",               cat: "Organisations & Frameworks", def: "The UK national standards body, publishing standards relevant to sustainability, product design and circular economy practices. Also known as BSI." },
  { phrase: "IEMA",                                        cat: "Organisations & Frameworks", def: "Institute of Environmental Management and Assessment — the professional body for environment and sustainability professionals in the UK." },
  { phrase: "Institute of Environmental Management and Assessment", cat: "Organisations & Frameworks", def: "The professional body for environment and sustainability professionals in the UK. Also known as IEMA." },
  { phrase: "Metabolic",                                   cat: "Organisations & Frameworks", def: "An Amsterdam-based circular economy consultancy and venture builder, frequently cited alongside the Ellen MacArthur Foundation in CE research." },
  { phrase: "Chatham House",                               cat: "Organisations & Frameworks", def: "The Royal Institute of International Affairs — a London-based policy institute that publishes influential research on sustainability, circular economy and resource policy." },

    { phrase: "circular economy",         cat: "Core Concepts",    def: "An economic system aimed at eliminating waste by keeping products, materials and resources in use for as long as possible." },
  { phrase: "circularity",              cat: "Core Concepts",    def: "The degree to which resources cycle back into the economy rather than becoming waste." },
  { phrase: "closed loop",              cat: "Core Concepts",    def: "A system where materials are continuously cycled back into production with no waste leaving the loop." },
  { phrase: "cradle to cradle",         cat: "Core Concepts",    def: "A design philosophy where all materials are either safely returned to nature or cycled back into industry indefinitely." },
  { phrase: "cradle to grave",          cat: "Core Concepts",    def: "A linear approach where materials are used once and then discarded — the opposite of circular thinking." },
  { phrase: "linear economy",           cat: "Core Concepts",    def: "The traditional take-make-waste model where resources are extracted, used, and disposed of." },
  { phrase: "take-make-waste",          cat: "Core Concepts",    def: "Shorthand for the linear economy model — extract, manufacture, discard." },
  { phrase: "regenerative",             cat: "Core Concepts",    def: "Systems that restore, renew or revitalise their own sources of energy and materials." },
  { phrase: "restorative",              cat: "Core Concepts",    def: "Designed to rebuild natural systems and replenish resources rather than deplete them." },
  { phrase: "resource efficiency",      cat: "Core Concepts",    def: "Using fewer natural resources to produce the same output, reducing environmental impact." },
  { phrase: "waste prevention",         cat: "Core Concepts",    def: "Reducing the amount of waste generated at source, before it needs to be managed." },
  { phrase: "waste hierarchy",          cat: "Core Concepts",    def: "A priority order for waste management: prevent, reduce, reuse, recycle, recover, dispose." },
  { phrase: "biological cycle",         cat: "Core Concepts",    def: "The loop in which biological materials safely re-enter nature through composting or anaerobic digestion." },
  { phrase: "technical cycle",          cat: "Core Concepts",    def: "The loop in which technical materials such as metals and plastics are recovered and reused in production." },
  { phrase: "systems thinking",         cat: "Core Concepts",    def: "Understanding how a system's components interrelate and work over time within larger systems." },
  { phrase: "product as a service",     cat: "Business Models",  def: "A model where customers pay for the use of a product rather than owning it, keeping the manufacturer responsible for its end of life." },
  { phrase: "performance economy",      cat: "Business Models",  def: "Selling the performance or outcome of a product rather than the product itself." },
  { phrase: "pay per use",              cat: "Business Models",  def: "A pricing model where customers are charged based on how much they use a product or service." },
  { phrase: "sharing economy",          cat: "Business Models",  def: "An economic system where assets or services are shared between private individuals, reducing the need for new production." },
  { phrase: "remanufacturing",          cat: "Business Models",  def: "Restoring used products to their original specifications, typically with a warranty comparable to new products." },
  { phrase: "refurbishment",            cat: "Business Models",  def: "Returning a used product to good working condition, often with cosmetic improvements." },
  { phrase: "take-back scheme",         cat: "Business Models",  def: "A programme where manufacturers collect used products at end of life for reuse, recycling or safe disposal." },
  { phrase: "deposit scheme",           cat: "Business Models",  def: "A system where consumers pay a deposit refunded when the item is returned for reuse or recycling." },
  { phrase: "extended producer responsibility", cat: "Business Models", def: "A policy approach where producers are given financial or physical responsibility for products at end of life." },
  { phrase: "reverse logistics",        cat: "Business Models",  def: "The process of moving goods from customers back to manufacturers for return, reuse or recycling." },
  { phrase: "servitisation",            cat: "Business Models",  def: "The shift from selling products to selling the services those products provide." },
  { phrase: "industrial symbiosis",     cat: "Business Models",  def: "A system where waste or by-products from one industry become inputs for another." },
  { phrase: "upcycling",                cat: "Materials & Waste", def: "Converting waste or used materials into something of higher quality or value." },
  { phrase: "downcycling",              cat: "Materials & Waste", def: "Recycling material into a lower-quality product, often losing value with each cycle." },
  { phrase: "composting",               cat: "Materials & Waste", def: "The controlled decomposition of organic matter into nutrient-rich material for soil." },
  { phrase: "anaerobic digestion",      cat: "Materials & Waste", def: "Breaking down organic materials without oxygen to produce biogas and digestate." },
  { phrase: "biodegradable",            cat: "Materials & Waste", def: "Capable of being decomposed by bacteria or other living organisms." },
  { phrase: "bio-based",                cat: "Materials & Waste", def: "Derived from biological resources such as plants, animals or microorganisms." },
  { phrase: "biobased",                 cat: "Materials & Waste", def: "Derived from biological resources such as plants, animals or microorganisms." },
  { phrase: "secondary raw material",   cat: "Materials & Waste", def: "Material recovered from waste that can be reintroduced into the production process." },
  { phrase: "waste stream",             cat: "Materials & Waste", def: "The complete flow of waste from its source through to recovery, recycling or disposal." },
  { phrase: "by-product",               cat: "Materials & Waste", def: "A secondary product derived from a manufacturing process, which may have value in another context." },
  { phrase: "virgin material",          cat: "Materials & Waste", def: "New, unprocessed raw material extracted directly from natural sources." },
  { phrase: "end of life",              cat: "Materials & Waste", def: "The stage at which a product or material can no longer be used for its intended purpose." },
  { phrase: "end-of-life",              cat: "Materials & Waste", def: "The stage at which a product or material can no longer be used for its intended purpose." },
  { phrase: "landfill",                 cat: "Materials & Waste", def: "Disposal of waste by burying it — the least preferred option in the waste hierarchy." },
  { phrase: "design for disassembly",   cat: "Design Principles", def: "Designing products so components can be easily separated at end of life for reuse or recycling." },
  { phrase: "design for longevity",     cat: "Design Principles", def: "Creating products built to last, reducing the frequency of replacement." },
  { phrase: "design for repair",        cat: "Design Principles", def: "Ensuring products can be easily fixed, with available spare parts and accessible components." },
  { phrase: "modular design",           cat: "Design Principles", def: "Designing products in interchangeable components so parts can be upgraded, replaced or repurposed." },
  { phrase: "ecodesign",                cat: "Design Principles", def: "Integrating environmental considerations into product design to reduce impact throughout the lifecycle." },
  { phrase: "eco-design",               cat: "Design Principles", def: "Integrating environmental considerations into product design to reduce impact throughout the lifecycle." },
  { phrase: "durability",               cat: "Design Principles", def: "The ability of a product to remain functional and in good condition over an extended period." },
  { phrase: "repairability",            cat: "Design Principles", def: "How easily a product can be fixed when it breaks." },
  { phrase: "product lifecycle",        cat: "Design Principles", def: "The stages a product goes through from raw material extraction through manufacture, use, and end of life." },
  { phrase: "lifecycle assessment",     cat: "Design Principles", def: "A technique to assess the environmental impact of a product through all stages of its life." },
  { phrase: "right to repair",          cat: "Design Principles", def: "A movement ensuring consumers can fix their own products or have them repaired affordably." },
  { phrase: "planned obsolescence",     cat: "Design Principles", def: "Deliberately designing products with a limited lifespan to encourage repeat purchases." },
  { phrase: "EPR",                      cat: "Policy & Systems",  def: "Extended Producer Responsibility — policy requiring producers to manage their products at end of life." },
  { phrase: "net zero",                 cat: "Policy & Systems",  def: "Balancing the amount of greenhouse gas emitted with the amount removed from the atmosphere." },
  { phrase: "carbon footprint",         cat: "Policy & Systems",  def: "The total amount of greenhouse gases generated by human actions, expressed as CO₂ equivalent." },
  { phrase: "decarbonisation",          cat: "Policy & Systems",  def: "The process of reducing or eliminating carbon dioxide emissions from energy generation and industry." },
  { phrase: "green economy",            cat: "Policy & Systems",  def: "An economy that results in improved human wellbeing while significantly reducing environmental risk." },
  { phrase: "sustainability",           cat: "Policy & Systems",  def: "Meeting the needs of the present without compromising the ability of future generations to meet their own needs." },
  { phrase: "supply chain",             cat: "Policy & Systems",  def: "The network of organisations involved in producing and delivering a product to the end consumer." },
  { phrase: "value chain",              cat: "Policy & Systems",  def: "The full range of activities that businesses go through to bring a product to market." },
  { phrase: "scope 3",                  cat: "Policy & Systems",  def: "Indirect greenhouse gas emissions in a company's value chain, including suppliers and product use." },
  { phrase: "plastic pollution",        cat: "Policy & Systems",  def: "The accumulation of plastic objects in the environment that adversely affects humans, wildlife and habitats." },
  { phrase: "food waste",               cat: "Policy & Systems",  def: "Food lost or discarded during production, processing, distribution, or consumption." },
  { phrase: "fast fashion",             cat: "Policy & Systems",  def: "A high-volume, low-cost clothing model that encourages rapid consumption and disposal of garments." },
];
// ── Category config ────────────────────────────────────────
const CAT_SHORT = {
  'Organisations & Frameworks': 'Orgs',
  'Core Concepts':              'Core',
  'Business Models':            'Business',
  'Materials & Waste':          'Materials',
  'Design Principles':          'Design',
  'Policy & Systems':           'Policy',
};

const CAT_ORDER = Object.keys(CAT_SHORT);

// ── Functions injected into the page ──────────────────────

function scanPageForTerms(glossary) {
  const text = document.body.innerText || '';
  const results = [];
  const seen = new Set();
  for (const item of glossary) {
    const key = item.phrase.toLowerCase();
    if (seen.has(key)) continue;
    const escaped = item.phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(?<![\\w-])${escaped}(?![\\w-])`, 'gi');
    const matches = [...text.matchAll(regex)];
    if (!matches.length) continue;
    seen.add(key);
    const excerpts = matches.slice(0, 3).map(m => {
      const s = Math.max(0, m.index - 90);
      const e = Math.min(text.length, m.index + m[0].length + 90);
      let snip = text.slice(s, e).replace(/\s+/g, ' ').trim();
      if (s > 0) snip = '\u2026' + snip;
      if (e < text.length) snip += '\u2026';
      return snip;
    });
    results.push({ phrase: item.phrase, cat: item.cat, def: item.def, count: matches.length, excerpts });
  }
  return results;
}

function clearPageHighlights() {
  document.querySelectorAll('[data-ce-hl]').forEach(el => {
    const parent = el.parentNode;
    if (parent) { parent.replaceChild(document.createTextNode(el.textContent), el); parent.normalize(); }
  });
}

function jumpToTermOnPage(phrase, occurrenceIndex) {
  document.querySelectorAll('[data-ce-hl]').forEach(el => {
    const parent = el.parentNode;
    if (parent) { parent.replaceChild(document.createTextNode(el.textContent), el); parent.normalize(); }
  });
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(?<![\\w-])${escaped}(?![\\w-])`, 'gi');
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) {
    const tag = node.parentElement?.tagName;
    if (['SCRIPT','STYLE','NOSCRIPT','TEXTAREA'].includes(tag)) continue;
    if (node.parentElement?.dataset?.ceHl) continue;
    if (regex.test(node.textContent)) textNodes.push(node);
    regex.lastIndex = 0;
  }
  const allSpans = [];
  for (const textNode of textNodes) {
    const text = textNode.textContent;
    const frag = document.createDocumentFragment();
    let last = 0; regex.lastIndex = 0; let m;
    while ((m = regex.exec(text)) !== null) {
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      const span = document.createElement('span');
      span.setAttribute('data-ce-hl', 'true');
      span.style.cssText = 'background:#FEF0E8;color:#8B4513;border-radius:2px;padding:0 1px;';
      span.textContent = m[0];
      frag.appendChild(span);
      allSpans.push(span);
      last = regex.lastIndex;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    textNode.parentNode.replaceChild(frag, textNode);
  }
  if (!allSpans.length) return 0;
  const idx = occurrenceIndex % allSpans.length;
  allSpans.forEach((span, i) => {
    if (i === idx) {
      span.style.cssText = 'background:#F5A98A;color:#fff;border-radius:2px;padding:0 1px;font-weight:700;outline:2px solid #F5A98A;';
      span.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
  return allSpans.length;
}

// ── UI ─────────────────────────────────────────────────────
const scanBtn      = document.getElementById('scan-btn');
const emptyEl      = document.getElementById('empty-state');
const loadingEl    = document.getElementById('loading');
const summaryEl    = document.getElementById('summary');
const summaryCount = document.getElementById('summary-count');
const summaryMeta  = document.getElementById('summary-meta');
const noResults    = document.getElementById('no-results');
const resultsEl    = document.getElementById('results');
const filterWrap   = document.getElementById('filter-wrap');
const filterPills  = document.getElementById('filter-pills');

let allResults  = [];
let activeFilter = 'All';
let currentTabId = null;
const jumpIndex  = {};

function setState(state) {
  emptyEl.style.display   = state === 'empty'   ? 'block' : 'none';
  loadingEl.style.display = state === 'loading' ? 'block' : 'none';
  summaryEl.classList.toggle('visible',  state === 'results');
  noResults.classList.toggle('visible',  state === 'none');
  resultsEl.classList.toggle('visible',  state === 'results');
}

setState('empty');

async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

// ── Category filter ────────────────────────────────────────
function buildFilterPills(results) {
  const catsFound = [...new Set(results.map(r => r.cat))].sort((a,b) => CAT_ORDER.indexOf(a) - CAT_ORDER.indexOf(b));
  filterPills.innerHTML = '';

  const allPill = document.createElement('button');
  allPill.className = 'filter-pill active';
  allPill.textContent = 'All';
  allPill.dataset.cat = 'All';
  filterPills.appendChild(allPill);

  catsFound.forEach(cat => {
    const pill = document.createElement('button');
    pill.className = 'filter-pill';
    pill.textContent = CAT_SHORT[cat] || cat;
    pill.dataset.cat = cat;
    filterPills.appendChild(pill);
  });

  filterPills.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.dataset.cat;
      renderResults(allResults, currentTabId);
    });
  });

  filterWrap.classList.add('visible');
}

// ── Scan ───────────────────────────────────────────────────
scanBtn.addEventListener('click', async () => {
  scanBtn.disabled = true;
  setState('loading');
  filterWrap.classList.remove('visible');

  const tab = await getActiveTab();
  currentTabId = tab.id;

  await chrome.scripting.executeScript({ target: { tabId: tab.id }, func: clearPageHighlights }).catch(() => {});

  try {
    const injected = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func:   scanPageForTerms,
      args:   [GLOSSARY],
    });

    allResults  = injected[0]?.result || [];
    activeFilter = 'All';

    if (!allResults.length) {
      setState('none');
    } else {
      buildFilterPills(allResults);
      renderResults(allResults, tab.id);
    }
  } catch {
    emptyEl.innerHTML = '<span style="color:#E05555">Could not scan this page.<br>Try a regular website.</span>';
    setState('empty');
  }

  scanBtn.disabled = false;
  scanBtn.innerHTML = `<svg viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.5"/><path d="M9.5 9.5L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg> Scan again`;
});

// ── Render results ─────────────────────────────────────────
function renderResults(raw, tabId) {
  const filtered = activeFilter === 'All' ? raw : raw.filter(r => r.cat === activeFilter);

  if (!filtered.length) {
    resultsEl.classList.remove('visible');
    noResults.classList.add('visible');
    summaryEl.classList.remove('visible');
    return;
  }

  noResults.classList.remove('visible');

  const totalMentions = filtered.reduce((s, i) => s + i.count, 0);
  const catCount      = [...new Set(filtered.map(r => r.cat))].length;
  summaryCount.innerHTML = `<em>${filtered.length}</em> term${filtered.length !== 1 ? 's' : ''} found`;
  summaryMeta.textContent = `${totalMentions} mention${totalMentions !== 1 ? 's' : ''} · ${catCount} categor${catCount !== 1 ? 'ies' : 'y'}`;
  summaryEl.classList.add('visible');

  const grouped = {};
  for (const item of filtered) {
    if (!grouped[item.cat]) grouped[item.cat] = [];
    grouped[item.cat].push(item);
  }

  resultsEl.innerHTML = CAT_ORDER
    .filter(cat => grouped[cat])
    .map(cat => {
      const items = grouped[cat]
        .sort((a, b) => b.count - a.count)
        .map((item, idx) => {
          const uid = `${cat}-${idx}`.replace(/\s+/g, '_');
          const excerptHtml = item.excerpts.map(ex => {
            const safe = ex.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            const hl = safe.replace(
              new RegExp(item.phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
              m => `<mark>${m}</mark>`
            );
            return `<div>${hl}</div>`;
          }).join('');

          return `<div class="term-row">
            <div class="term-top">
              <div class="term-left">
                <span class="term-name">${item.phrase}</span>
                <span class="term-count">×${item.count}</span>
              </div>
              <button class="jump-btn" data-phrase="${item.phrase.replace(/"/g,'&quot;')}" data-uid="${uid}">↓ Go to</button>
            </div>
            <div class="term-def">${item.def}</div>
            ${item.excerpts.length ? `<div class="term-excerpt" id="ex-${uid}">${excerptHtml}<div class="excerpt-hint">Click row to toggle preview</div></div>` : ''}
          </div>`;
        }).join('');

      return `<div class="cat-group"><div class="cat-header">${cat}</div>${items}</div>`;
    }).join('');

  resultsEl.querySelectorAll('.jump-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const phrase = btn.dataset.phrase;
      if (!jumpIndex[phrase]) jumpIndex[phrase] = 0;
      const result = await chrome.scripting.executeScript({
        target: { tabId },
        func:   jumpToTermOnPage,
        args:   [phrase, jumpIndex[phrase]],
      }).catch(() => [{ result: 0 }]);
      const total = result[0]?.result || 0;
      if (total > 0) {
        jumpIndex[phrase] = (jumpIndex[phrase] + 1) % total;
        btn.textContent = `↓ ${jumpIndex[phrase] === 0 ? 1 : jumpIndex[phrase]} of ${total}`;
        btn.classList.add('active');
      }
    });
  });

  resultsEl.querySelectorAll('.term-row').forEach(row => {
    row.addEventListener('click', (e) => {
      if (e.target.closest('.jump-btn')) return;
      const uid = row.querySelector('.jump-btn')?.dataset.uid;
      if (uid) document.getElementById(`ex-${uid}`)?.classList.toggle('open');
    });
  });

  setState('results');
}
