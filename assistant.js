/* MCR Concept site assistant */
(function () {
  if (window.__mcrAssistant) return; window.__mcrAssistant = 1;
  var WA = 'https://wa.me/94771512933';
  var R = '/';
  var BLUE = '#004E7A', RED = '#CC0000';

  var L = {
    services: ['Our Services', R + 'services.html'],
    process: ['How We Work', R + 'process.html'],
    products: ['What We Formulate', R + 'products.html'],
    faq: ['FAQ', R + 'faq.html'],
    about: ['About Us', R + 'about.html'],
    contact: ['Contact Form', R + 'contact.html'],
    vanguard: ['Apps & Machines', R + 'vanguard.html'],
    processing: ['Processing & Mixing', R + 'machines/processing.html'],
    filling: ['Filling Machines', R + 'machines/filling.html'],
    packaging: ['Packaging Machines', R + 'machines/packaging.html'],
    optistox: ['OptiStox', R + 'apps/optistox.html'],
    batchq: ['Batch Q', R + 'apps/batchq.html'],
    costcast: ['Cost-Cast Ci', R + 'apps/costcast.html'],
    horeca: ['Cost-Cast HORECA', R + 'apps/horeca.html'],
    proque: ['ProQue', R + 'apps/proque.html']
  };
  function cat(n) { return [n + ' Enquiry', R + 'contact.html?cat=' + encodeURIComponent(n)]; }

  var CATS = [
    ['Beverages & RTD Drinks', ['beverage', 'drink', 'juice', 'rtd', 'soda', 'soft drink', 'energy drink', 'carbonated', 'fizzy', 'nectar', 'water', 'coffee', 'smoothie', 'milkshake', 'mocktail']],
    ['Syrups & Cordials', ['syrup', 'cordial', 'squash', 'concentrate']],
    ['Fruit Pulps & Purées', ['pulp', 'puree', 'purée', 'jam', 'fruit']],
    ['Sauces & Dressings', ['sauce', 'dressing', 'ketchup', 'chutney', 'mayonnaise', 'mayo', 'dip', 'paste']],
    ['Dairy & Frozen Desserts', ['dairy', 'ice cream', 'icecream', 'yoghurt', 'yogurt', 'curd', 'milk', 'dessert', 'frozen']],
    ['Bakery & Confectionery', ['bakery', 'bread', 'cake', 'biscuit', 'cookie', 'pastry', 'confectionery', 'candy', 'sweet', 'chocolate']],
    ['Spice Mixes & Seasonings', ['spice', 'seasoning', 'masala', 'curry powder', 'blend']],
    ['Dehydrated & Freeze-Dried', ['dehydrated', 'freeze dried', 'freeze-dried', 'dried', 'dry fruit', 'snack', 'chip', 'powder']],
    ['Tea & Herbal Blends', ['tea', 'herbal', 'infusion', 'iced tea']],
    ['Pickles & Vegetables in Brine', ['pickle', 'brine', 'achcharu', 'vinegar']]
  ];

  var I = [
    { k: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'ayubowan'], a: 'Hello! How can I help you today? You can ask about our services, the products we formulate, equipment or our apps.', c: 1 },
    { k: ['thank', 'thanks', 'thank you', 'great', 'ok', 'okay', 'bye', 'goodbye'], a: 'You are welcome! If you need anything else, just ask. You can also message us on WhatsApp at any time.', w: 1 },
    { k: ['alcohol', 'beer', 'wine', 'liquor', 'spirit', 'arrack', 'vodka', 'whisky', 'whiskey', 'gin', 'rum', 'brewery', 'distillery', 'cider'], x: 2, a: 'MCR Concept does not work on alcoholic drinks. We formulate non-alcoholic beverages, syrups, sauces, dairy, bakery and many other foods.', l: ['products'] },
    { k: ['service', 'what do you do', 'what you do', 'offer', 'help me', 'consult', 'consultant', 'consultancy'], a: 'We offer four services:\n• Product Formulation\n• Shelf Life & Compliance\n• Scale-Up & Training\n• Processing Equipment\nYou can choose one service or the complete package.', l: ['services', 'contact'] },
    { k: ['product', 'category', 'categories', 'what can you make', 'what can you formulate', 'type'], a: 'We formulate beverages, syrups, fruit pulps, sauces, dairy and frozen desserts, bakery, spice mixes, dehydrated products, tea blends and pickles. If you can taste it, we can formulate it.', l: ['products', 'contact'] },
    { k: ['formula', 'recipe', 'develop', 'development', 'new product', 'reformulat', 'improve', 'clean label', 'idea'], a: 'We create new recipes and improve existing ones, balancing taste, texture, cost and shelf life. You receive an approved formula and samples, and you own the formula.', l: ['services', 'contact'] },
    { k: ['shelf life', 'shelf-life', 'stability', 'stable', 'label', 'labelling', 'labeling', 'compliance', 'standard', 'regulation', 'legal', 'preservative', 'ph', 'brix', 'safe', 'safety', 'spoil', 'expiry'], a: 'We make sure your product stays safe, stable and legal. This covers shelf-life trials, Brix, pH and preservation control, and labelling to local and international standards. You receive the product specification and label data.', l: ['services', 'contact'] },
    { k: ['scale', 'scale up', 'scale-up', 'training', 'train', 'staff', 'batch sheet', 'sop', 'pilot', 'commercial production', 'mass production', 'large batch'], a: 'We take your formula from the lab bench to full production: pilot batches, commercial runs, batch sheets and SOPs. Then we train your team on site to make it right every time.', l: ['services', 'contact'] },
    { k: ['machine', 'machinery', 'equipment', 'tank', 'mixer', 'mixing', 'cooking', 'filling', 'filler', 'packaging', 'packing', 'sealing', 'sachet', 'bottling', 'automatic', 'automation', 'semi automatic', 'manual'], a: 'We supply processing, filling and packaging machines, from manual to fully automatic, with installation and staff training. Choose a machine type to see details and request a quote.', l: ['processing', 'filling', 'packaging'] },
    { k: ['process', 'step', 'how do you work', 'how you work', 'how does it work', 'how it works', 'procedure'], a: 'We work in five clear steps:\n1. Brief\n2. Formulate\n3. Test\n4. Scale Up\n5. Launch\nYou approve every step.', l: ['process', 'contact'] },
    { k: ['how long', 'time', 'timeline', 'duration', 'week', 'month', 'fast', 'quick', 'when'], a: 'Most formulation projects take 4 to 12 weeks, depending on the product and the testing required.', l: ['process', 'contact'] },
    { k: ['price', 'pricing', 'cost', 'charge', 'fee', 'rate', 'quote', 'quotation', 'how much', 'budget', 'expensive', 'cheap', 'payment'], a: 'We send a fixed quotation after reviewing your brief, and the first discussion is free. Share your idea through the contact form or on WhatsApp to get your quotation.', l: ['contact'], w: 1 },
    { k: ['own', 'owner', 'ownership', 'rights', 'belong'], x: 2, a: 'You do. Full ownership of the formula passes to you when the project is complete and paid for.', l: ['faq'] },
    { k: ['nda', 'confidential', 'secret', 'privacy', 'non disclosure', 'non-disclosure', 'copy my'], x: 2, a: 'Yes. We sign a mutual NDA before you share any confidential details, and every enquiry is treated as confidential.', l: ['contact'] },
    { k: ['manufacture', 'manufacturing', 'produce for', 'make for', 'co-pack', 'copack', 'co pack', 'supply product', 'buy product', 'sell product', 'wholesale', 'oem', 'private label', 'white label'], a: 'We do not manufacture products. We develop your product and supply the equipment. Production takes place at your own facility or at a co-packer of your choice.', l: ['faq', 'contact'] },
    { k: ['small', 'startup', 'start-up', 'start up', 'sme', 'home', 'beginner', 'first product', 'my own brand', 'own brand', 'small business'], a: 'Yes. We work with home-based producers, start-ups and SMEs, as well as growing brands and large manufacturers. We can start with small-batch formulas and manual or semi-automatic equipment.', l: ['services', 'contact'] },
    { k: ['large', 'factory', 'industrial', 'big company', 'export', 'volume', 'manufacturer'], a: 'For large manufacturers we work on yield and cost optimisation, automated production lines and products ready for export markets.', l: ['services', 'contact'] },
    { k: ['where', 'country', 'countries', 'location', 'located', 'address', 'office', 'overseas', 'international', 'abroad', 'visit'], a: 'We work with clients locally and internationally, and we support products for local and export markets. Contact us and we will arrange the best way to work together.', l: ['contact'], w: 1 },
    { k: ['app', 'apps', 'software', 'system', 'vanguard', 'vld', 'program', 'digital', 'erp', 'pos'], a: 'Vanguard Logic Development builds our apps:\n• OptiStox: smart inventory\n• Batch Q: formulation and production\n• Cost-Cast Ci: factory costing\n• Cost-Cast HORECA: menu costing\n• ProQue: procurement and delivery\nEach is available as an outright purchase or a monthly subscription.', l: ['vanguard'] },
    { k: ['optistox', 'inventory', 'stock', 'store', 'warehouse', 'stores'], x: 2, a: 'OptiStox is our smart inventory app: stock, receiving, hand-out and suppliers in one place, with QR scanning and expiry tracking. You can request a demo on its page.', l: ['optistox'] },
    { k: ['batch q', 'batchq', 'ultra formulator', 'production control', 'production app'], x: 2, a: 'Batch Q (Ultra Formulator) handles recipe formulation and production control for food and beverage makers, from small batches to commercial production. You can request a demo on its page.', l: ['batchq'] },
    { k: ['cost-cast', 'costcast', 'cost cast', 'costing', 'cost per unit', 'cost control'], x: 2, a: 'Cost-Cast Ci gives product and production costing for food and beverage factories, so you know your true cost per batch and per unit. For hotels and restaurants, see Cost-Cast HORECA.', l: ['costcast', 'horeca'] },
    { k: ['horeca', 'hotel', 'restaurant', 'cafe', 'café', 'bar', 'menu', 'kitchen', 'catering'], x: 2, a: 'Cost-Cast HORECA is menu costing for hotels, restaurants, cafés and bars, with cost %, suggested selling price, service charge and VAT.', l: ['horeca'] },
    { k: ['proque', 'procurement', 'purchase order', 'dispatch', 'delivery', 'supplier order', 'logistic'], x: 2, a: 'ProQue handles purchase orders, dispatch, real-time delivery monitoring and proof of delivery, and it links to your OptiStox store.', l: ['proque'] },
    { k: ['demo', 'trial', 'test the app', 'try'], a: 'You can request a free demo on each app page. Pick an app below and tap Request Demo.', l: ['optistox', 'batchq', 'costcast', 'horeca', 'proque'] },
    { k: ['subscription', 'monthly', 'outright', 'licence', 'license', 'buy app', 'purchase app'], a: 'Every app is available as an outright purchase or a monthly subscription. Request a quote on the app page and we will send the details.', l: ['vanguard'] },
    { k: ['contact', 'phone', 'call', 'number', 'email', 'mail', 'whatsapp', 'talk', 'speak', 'reach', 'meet', 'meeting', 'appointment'], a: 'Call or WhatsApp: +94 771 512 933 or +94 729 818 965\nEmail: mcr@mcrconceptvld.com\nOr send your idea through the contact form.', l: ['contact'], w: 1 },
    { k: ['who are you', 'about', 'company', 'mcr', 'team', 'experience', 'background'], a: 'MCR Concept helps food and beverage businesses turn ideas into products that sell. We design the formula and the process, supply the equipment and train the people who run it.', l: ['about'] },
    { k: ['training only', 'workshop', 'course', 'teach'], a: 'We provide hands-on training for your production team on site, as part of scale-up or as a separate service.', l: ['services', 'contact'] }
  ];

  function norm(s) { return (' ' + s.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9éè+\- ]+/g, ' ').replace(/\s+/g, ' ') + ' '); }
  function has(t, k) {
    if (k.length <= 5) return t.indexOf(' ' + k + ' ') > -1 || t.indexOf(' ' + k + 's ') > -1;
    return t.indexOf(' ' + k) > -1;
  }
  function answer(q) {
    var t = norm(q), best = null, bs = 0;
    for (var i = 0; i < I.length; i++) {
      var s = 0;
      for (var j = 0; j < I[i].k.length; j++) if (has(t, I[i].k[j])) s += (I[i].k[j].indexOf(' ') > -1 ? 2 : 1) * (I[i].x || 1);
      if (s > bs) { bs = s; best = I[i]; }
    }
    var found = [];
    for (var c = 0; c < CATS.length; c++) for (var m = 0; m < CATS[c][1].length; m++) if (has(t, CATS[c][1][m])) { found.push(CATS[c][0]); break; }
    if (found.length && (!best || bs <= 1 || best.k[0] === 'product' || best.k[0] === 'formula' || best.k[0] === 'hi')) {
      var n = found[0];
      return { a: 'Yes! ' + n + ' is one of the categories we formulate. We can develop a new product or improve your current recipe. Tap below to start your project and we will contact you.', links: [cat(n), L.products], w: 1 };
    }
    if (best) return { a: best.a, links: (best.l || []).map(function (x) { return L[x]; }), w: best.w, c: best.c };
    return null;
  }

  var css = '' +
    '#mcrA-btn{position:fixed;right:22px;bottom:96px;z-index:80;display:flex;align-items:center;gap:8px;border:0;cursor:pointer;background:' + BLUE + ';color:#fff;font:600 15px Calibri,Carlito,"Segoe UI",sans-serif;padding:0 18px 0 6px;height:52px;border-radius:30px;box-shadow:0 10px 24px rgba(0,40,70,.3);transition:transform .2s}' +
    '#mcrA-btn:hover{transform:translateY(-2px)}#mcrA-btn .ic{width:40px;height:40px;border-radius:50%;background:' + RED + ';display:flex;align-items:center;justify-content:center}' +
    '#mcrA-btn.min{padding:0 6px}#mcrA-btn.min .lb{display:none}' +
    '#mcrA{position:fixed;right:22px;bottom:96px;z-index:90;width:370px;max-width:calc(100vw - 24px);height:560px;max-height:calc(100vh - 120px);background:#fff;border-radius:18px;box-shadow:0 24px 60px rgba(0,30,60,.3);display:none;flex-direction:column;overflow:hidden;font:16px/1.45 Calibri,Carlito,"Segoe UI",sans-serif;color:#1d2a33}' +
    '#mcrA.open{display:flex;animation:mcrUp .25s ease}@keyframes mcrUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}' +
    '#mcrA .hd{background:' + BLUE + ';color:#fff;padding:14px 16px;display:flex;align-items:center;gap:12px;border-bottom:4px solid ' + RED + '}' +
    '#mcrA .hd .av{width:40px;height:40px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;color:' + RED + ';font-size:14px;flex:none}' +
    '#mcrA .hd b{display:block;font-size:17px}#mcrA .hd small{opacity:.85;font-size:13px}' +
    '#mcrA .hd button{margin-left:auto;background:none;border:0;color:#fff;font-size:28px;line-height:1;cursor:pointer;padding:0 4px}' +
    '#mcrA .bd{flex:1;overflow-y:auto;padding:16px;background:#F3F6F9}' +
    '#mcrA .m{max-width:86%;margin-bottom:10px;padding:10px 14px;border-radius:14px;white-space:pre-line;word-wrap:break-word}' +
    '#mcrA .m.b{background:#fff;border:1px solid #E1E8EE;border-bottom-left-radius:4px}' +
    '#mcrA .m.u{background:' + BLUE + ';color:#fff;margin-left:auto;border-bottom-right-radius:4px}' +
    '#mcrA .lk{display:flex;flex-wrap:wrap;gap:6px;margin:-2px 0 12px}' +
    '#mcrA .lk a,#mcrA .lk button{font:600 14px Calibri,Carlito,sans-serif;padding:7px 12px;border-radius:20px;text-decoration:none;cursor:pointer;border:1.5px solid ' + BLUE + ';color:' + BLUE + ';background:#fff}' +
    '#mcrA .lk a.wa{background:#25D366;border-color:#25D366;color:#fff}' +
    '#mcrA .lk button{border-color:#C9D6E0;color:#30475A}' +
    '#mcrA .ty{display:inline-flex;gap:4px;padding:12px 14px}#mcrA .ty i{width:7px;height:7px;border-radius:50%;background:#8AA0B2;animation:mcrB 1s infinite}' +
    '#mcrA .ty i:nth-child(2){animation-delay:.15s}#mcrA .ty i:nth-child(3){animation-delay:.3s}@keyframes mcrB{0%,60%,100%{opacity:.3}30%{opacity:1}}' +
    '#mcrA form{display:flex;gap:8px;padding:10px;border-top:1px solid #E1E8EE;background:#fff}' +
    '#mcrA input{flex:1;border:1.5px solid #C9D6E0;border-radius:24px;padding:10px 14px;font:16px Calibri,Carlito,sans-serif;outline:none;min-width:0}#mcrA input:focus{border-color:' + BLUE + '}' +
    '#mcrA form button{width:44px;height:44px;border-radius:50%;border:0;background:' + RED + ';cursor:pointer;display:flex;align-items:center;justify-content:center;flex:none}' +
    '@media(max-width:520px){#mcrA{right:12px;bottom:12px;height:calc(100vh - 90px)}#mcrA-btn{right:16px;bottom:90px}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var chat = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/></svg>';
  var btn = document.createElement('button');
  btn.id = 'mcrA-btn'; btn.type = 'button'; btn.setAttribute('aria-label', 'Open MCR Assistant');
  btn.innerHTML = '<span class="ic">' + chat + '</span><span class="lb">Ask MCR</span>';
  var box = document.createElement('div');
  box.id = 'mcrA'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', 'MCR Assistant');
  box.innerHTML = '<div class="hd"><div class="av">MCR</div><div><b>MCR Assistant</b><small>Ask us anything about MCR Concept</small></div><button type="button" aria-label="Close">×</button></div>' +
    '<div class="bd"></div><form><input type="text" placeholder="Type your question…" aria-label="Your question" autocomplete="off"><button type="submit" aria-label="Send"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg></button></form>';
  document.body.appendChild(btn); document.body.appendChild(box);
  setTimeout(function () { btn.classList.add('min'); }, 12000);

  var bd = box.querySelector('.bd'), inp = box.querySelector('input'), started = false, misses = 0;
  var CHIPS = ['Our services', 'What we formulate', 'Equipment', 'Apps & software', 'Pricing', 'Talk to us'];

  function scroll() { bd.scrollTop = bd.scrollHeight; }
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function msg(t, who) { var d = document.createElement('div'); d.className = 'm ' + who; d.textContent = t; bd.appendChild(d); scroll(); }
  function links(ls, wa, q, chips) {
    var d = document.createElement('div'); d.className = 'lk'; var h = '';
    (ls || []).forEach(function (l) { if (l) h += '<a href="' + l[1] + '">' + esc(l[0]) + ' ›</a>'; });
    if (wa) h += '<a class="wa" target="_blank" rel="noopener" href="' + WA + (q ? '?text=' + encodeURIComponent(q) : '') + '">WhatsApp Us</a>';
    (chips || []).forEach(function (c) { h += '<button type="button">' + esc(c) + '</button>'; });
    if (!h) return; d.innerHTML = h; bd.appendChild(d); scroll();
  }
  function bot(t, ls, wa, q, chips) {
    var ty = document.createElement('div'); ty.className = 'm b ty'; ty.innerHTML = '<i></i><i></i><i></i>'; bd.appendChild(ty); scroll();
    setTimeout(function () { ty.remove(); msg(t, 'b'); links(ls, wa, q, chips); }, 550);
  }
  function ask(q) {
    q = (q || '').trim(); if (!q) return;
    msg(q, 'u');
    var r = answer(q);
    if (r) { misses = 0; bot(r.a, r.links, r.w, null, r.c ? CHIPS : null); }
    else {
      misses++;
      bot(misses > 1 ? 'Our team can answer that for you directly. Tap WhatsApp Us to send your question now, or use the contact form.' :
        'Sorry, I do not have an answer for that yet. Try one of these topics, or send your question to our team on WhatsApp.',
        [L.contact], true, q, misses > 1 ? null : CHIPS);
    }
  }
  function open() {
    box.classList.add('open'); btn.style.display = 'none';
    if (!started) { started = true; bot('Hello! I am the MCR Assistant. I can tell you about our services, the products we formulate, equipment and our apps. What would you like to know?', null, false, null, CHIPS); }
    setTimeout(function () { if (window.innerWidth > 520) inp.focus(); }, 300);
  }
  function close() { box.classList.remove('open'); btn.style.display = ''; }
  var MAP = { 'Our services': 'services', 'What we formulate': 'what products categories', 'Equipment': 'equipment machines', 'Apps & software': 'apps software', 'Pricing': 'price', 'Talk to us': 'contact' };
  btn.addEventListener('click', open);
  box.querySelector('.hd button').addEventListener('click', close);
  box.querySelector('form').addEventListener('submit', function (e) { e.preventDefault(); var v = inp.value; inp.value = ''; ask(v); });
  bd.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var t = b.textContent; msg(t, 'u'); var r = answer(MAP[t] || t);
    if (r) bot(r.a, r.links, r.w);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && box.classList.contains('open')) close(); });
})();
