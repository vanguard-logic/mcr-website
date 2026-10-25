/* MCR Concept site assistant */
(function () {
  if (window.__mcrAssistant) return; window.__mcrAssistant = 1;
  var WA = 'https://wa.me/94729818965';
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
  
  var FOOD = ['beverage', 'drink', 'juice', 'rtd', 'soda', 'carbonated', 'fizzy', 'nectar', 'coffee', 'smoothie', 'milkshake', 'mocktail', 'syrup', 'cordial', 'squash', 'concentrate',
    'pulp', 'puree', 'purée', 'jam', 'jelly', 'fruit', 'sauce', 'soy', 'soya', 'ketchup', 'chutney', 'mayonnaise', 'mayo', 'dressing', 'dip', 'paste', 'gravy', 'marinade',
    'dairy', 'ice cream', 'icecream', 'yoghurt', 'yogurt', 'curd', 'milk', 'cheese', 'butter', 'ghee', 'dessert', 'frozen', 'pudding', 'custard',
    'bakery', 'bread', 'cake', 'biscuit', 'cookie', 'pastry', 'confectionery', 'candy', 'toffee', 'gummy', 'chocolate', 'sweet',
    'spice', 'seasoning', 'masala', 'curry', 'biryani', 'biriyani', 'stock', 'bouillon', 'cube', 'soup', 'powder', 'premix', 'instant', 'mix',
    'dehydrated', 'freeze dried', 'freeze-dried', 'dried', 'snack', 'chip', 'crisps', 'noodle', 'pasta', 'cereal', 'granola', 'flour', 'batter', 'coating', 'crumb',
    'tea', 'herbal', 'infusion', 'pickle', 'brine', 'achcharu', 'vinegar', 'oil', 'meat', 'sausage', 'fish', 'ready meal', 'baby food', 'protein', 'energy drink',
    'sports drink', 'kombucha', 'flavour', 'flavor', 'essence', 'colour', 'emulsion', 'stock powder', 'stock cube'];

  var I = [
    { k: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'ayubowan'], a: 'Hello! Everything we do is tailor-made: formulas and recipes, machinery and apps, built to your exact requirements. What would you like to create?', c: 1 },
    { k: ['thank', 'thanks', 'thank you', 'great', 'ok', 'okay', 'bye', 'goodbye'], a: 'You are welcome! If you need anything else, just ask. You can also message us on WhatsApp at any time.', w: 1 },
    { k: ['alcohol', 'beer', 'wine', 'liquor', 'spirit', 'arrack', 'vodka', 'whisky', 'whiskey', 'gin', 'rum', 'brewery', 'distillery', 'cider'], x: 2, a: 'MCR Concept does not work on alcoholic drinks. We formulate non-alcoholic beverages, syrups, sauces, dairy, bakery and many other foods.', l: ['products'] },
    { k: ['service', 'what do you do', 'what you do', 'offer', 'help me', 'consult', 'consultant', 'consultancy'], a: 'Everything we do is tailor-made to your requirements:\n• Product formulation and recipes\n• Shelf life and compliance\n• Scale-up and staff training\n• Machinery, built or custom-fabricated for you\n• Apps and software, ready-made or customised\nTell us what you need and we will shape the solution around it.', l: ['services'], s: 'all' },
    { k: ['product', 'category', 'categories', 'what can you make', 'what can you formulate', 'what formula', 'which product', 'what do you formulate', 'type', 'list'], a: 'We formulate almost any food or beverage product, far more than we could ever list. For example: drinks and juices, syrups, sauces such as soy sauce, seasonings such as biryani mix, stock powders, instant premixes, dairy, bakery, snacks, pickles and much more.\nTell us what you want to make, and we will build the formula around your batch size, target market and selling price.', s: 'f' },
    { k: ['formula', 'recipe', 'develop', 'development', 'new product', 'reformulat', 'improve', 'clean label', 'idea', 'how do i start', 'how to start', 'get started', 'start a project', 'start my project', 'begin'], b: 'f', a: 'We create new recipes and improve existing ones, balancing taste, texture, cost and shelf life. You receive an approved formula and samples, and you own the formula.', l: ['services', 'contact'] },
    { k: ['shelf life', 'shelf-life', 'stability', 'stable', 'label', 'labelling', 'labeling', 'compliance', 'standard', 'regulation', 'legal', 'preservative', 'ph', 'brix', 'safe', 'safety', 'spoil', 'expiry'], a: 'We make sure your product stays safe, stable and legal. This covers shelf-life trials, Brix, pH and preservation control, and labelling to local and international standards. You receive the product specification and label data.', l: ['services', 'contact'] },
    { k: ['scale', 'scale up', 'scale-up', 'training', 'train', 'staff', 'batch sheet', 'sop', 'pilot', 'commercial production', 'mass production', 'large batch'], a: 'We take your formula from the lab bench to full production: pilot batches, commercial runs, batch sheets and SOPs. Then we train your team on site to make it right every time.', l: ['services', 'contact'] },
    { k: ['machine', 'machinery', 'equipment', 'tank', 'mixer', 'mixing', 'cooking', 'kettle', 'boiler', 'filling', 'filler', 'packaging', 'packing', 'sealing', 'sealer', 'sachet', 'bottling', 'capping', 'labelling machine', 'labeling machine', 'conveyor', 'dryer', 'drier', 'grinder', 'pulveriser', 'pulverizer', 'oven', 'extruder', 'pasteuriser', 'pasteurizer', 'homogeniser', 'homogenizer', 'fabricate', 'fabrication', 'custom machine', 'stainless', 'automatic', 'automation', 'semi automatic', 'production line'], b: 'm', a: 'We can fabricate almost any processing, filling or packaging machine, including fully custom designs. Every machine is built around your product, output, space and budget, from manual to fully automatic.' },
    { k: ['process', 'step', 'how do you work', 'how you work', 'how does it work', 'how it works', 'procedure'], a: 'We work in five clear steps:\n1. Brief\n2. Formulate\n3. Test\n4. Scale Up\n5. Launch\nYou approve every step.', l: ['process', 'contact'] },
    { k: ['how long', 'time', 'timeline', 'duration', 'week', 'month', 'fast', 'quick', 'when'], a: 'Most projects take 2 days to 2 weeks, depending on the formulation. Once you submit your details, we will let you know the expected timeline.', l: ['process', 'contact'] },
    { k: ['price', 'pricing', 'cost', 'charge', 'fee', 'rate', 'quote', 'quotation', 'how much', 'budget', 'expensive', 'cheap', 'payment'], a: 'Every project is tailor-made, so we send a fixed quotation after we understand your requirements. Choose what you need and answer a few quick questions, and we will prepare your quotation.', s: 'all', w: 1 },
    { k: ['own', 'owner', 'ownership', 'rights', 'belong'], x: 2, a: 'You do. Full ownership of the formula passes to you when the project is complete and paid for.', l: ['faq'] },
    { k: ['nda', 'confidential', 'secret', 'privacy', 'non disclosure', 'non-disclosure', 'copy my'], x: 2, a: 'Yes. We sign a mutual NDA before you share any confidential details, and every enquiry is treated as confidential.', l: ['contact'] },
    { k: ['manufacture', 'manufacturing', 'produce for', 'make for', 'co-pack', 'copack', 'co pack', 'supply product', 'buy product', 'sell product', 'wholesale', 'oem', 'private label', 'white label'], a: 'Yes. We can manufacture your product for you. We can also introduce you to a suitable factory to produce it.', l: ['faq', 'contact'] },
    { k: ['small', 'startup', 'start-up', 'start up', 'sme', 'home', 'beginner', 'first product', 'my own brand', 'own brand', 'small business'], a: 'Yes. We work with home-based producers, start-ups and SMEs, as well as growing brands and large manufacturers. We can start with small-batch formulas and manual or semi-automatic equipment.', l: ['services', 'contact'] },
    { k: ['large', 'factory', 'industrial', 'big company', 'export', 'volume', 'manufacturer'], a: 'For large manufacturers we work on yield and cost optimisation, automated production lines and products ready for export markets.', l: ['services', 'contact'] },
    { k: ['where', 'country', 'countries', 'location', 'located', 'address', 'office', 'overseas', 'international', 'abroad', 'visit'], a: 'We work with clients locally and internationally, and we support products for local and export markets. Contact us and we will arrange the best way to work together.', l: ['contact'], w: 1 },
    { g: 'a', k: ['app', 'apps', 'software', 'system', 'vanguard', 'vld', 'program', 'digital', 'erp', 'pos'], a: 'Vanguard Logic Development builds our apps:\n• OptiStox: smart inventory\n• Batch Q: formulation and production\n• Cost-Cast Ci: factory costing\n• Cost-Cast HORECA: menu costing\n• ProQue: procurement and delivery\nWe can customise any of them for your business, or build a new app for your needs.', l: ['vanguard'], s: 'a' },
    { k: ['custom app', 'custom software', 'customise app', 'customize app', 'customise the app', 'customize the app', 'build an app', 'build app', 'new app', 'develop an app', 'develop app', 'app for my', 'software for my', 'integration', 'integrate'], x: 2, b: 'a', a: 'Yes. We can customise any of our apps or build a new one, tailored to the way your business works.' },
    { k: ['custom', 'tailor', 'tailored', 'tailor-made', 'bespoke', 'special requirement', 'my requirement'], a: 'Yes. Everything we do is tailor-made to your requirements: formulas and recipes, machinery and apps. Choose what you need and we will ask a few quick questions.', s: 'all' },
    { g: 'a', k: ['optistox', 'inventory', 'stock control', 'stock app', 'stock management', 'stock software', 'stock system', 'store', 'warehouse', 'stores'], x: 2, a: 'OptiStox is our smart inventory app: stock, receiving, hand-out and suppliers in one place, with QR scanning and expiry tracking. You can request a demo on its page. We can also customise it for your business.', l: ['optistox'], s: 'a' },
    { g: 'a', k: ['batch q', 'batchq', 'ultra formulator', 'production control', 'production app'], x: 2, a: 'Batch Q (Ultra Formulator) handles recipe formulation and production control for food and beverage makers, from small batches to commercial production. You can request a demo on its page. We can also customise it for your business.', l: ['batchq'], s: 'a' },
    { g: 'a', k: ['cost-cast', 'costcast', 'cost cast', 'costing', 'cost per unit', 'cost control'], x: 2, a: 'Cost-Cast Ci gives product and production costing for food and beverage factories, so you know your true cost per batch and per unit. For hotels and restaurants, see Cost-Cast HORECA. We can also customise it for your business.', l: ['costcast', 'horeca'], s: 'a' },
    { g: 'a', k: ['horeca', 'hotel', 'restaurant', 'cafe', 'café', 'bar', 'menu', 'kitchen', 'catering'], x: 2, a: 'Cost-Cast HORECA is menu costing for hotels, restaurants, cafés and bars, with cost %, suggested selling price, service charge and VAT. We can also customise it for your business.', l: ['horeca'], s: 'a' },
    { g: 'a', k: ['proque', 'procurement', 'purchase order', 'dispatch', 'delivery', 'supplier order', 'logistic'], x: 2, a: 'ProQue handles purchase orders, dispatch, real-time delivery monitoring and proof of delivery, and it links to your OptiStox store. We can also customise it for your business.', l: ['proque'], s: 'a' },
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
    var cw = /(custom|tailor|bespoke|modif|adjust|change the app|special requirement)/.test(t);
    if (cw) for (var g = 0; g < I.length; g++) if (I[g].g === 'a') for (var h = 0; h < I[g].k.length; h++) if (has(t, I[g].k[h])) return { b: 'a', a: 'Yes. We can customise any of our apps, or build a new one, tailored to the way your business works.' };
    var food = false;
    for (var c = 0; c < FOOD.length; c++) if (has(t, FOOD[c])) { food = true; break; }
    if (food && (!best || best.b === 'f' || best.s === 'f' || best.k[0] === 'hi' || (bs <= 1 && !best.b && !best.s))) return { b: 'f' };
    if (best) return { a: best.a, links: (best.l || []).map(function (x) { return L[x]; }), w: best.w, c: best.c, s: best.s, b: best.b };
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
    '#mcrA .lk button{border-color:#C9D6E0;color:#30475A}#mcrA .lk[data-t="send"] button:first-child{background:' + RED + ';border-color:' + RED + ';color:#fff}' +
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
  var CATALOG = [{"c": "Beverages & RTD Drinks", "f": false, "p": [["Fruit Juices & Nectars", "NOPA"], ["Carbonated Soft Drinks", "NA"], ["Iced Tea & Herbal Drinks", "NOPA"], ["Energy & Sports Drinks", "NA"], ["Plant-Based Milks", "NOP"], ["Smoothies & Shakes", "NOPA"], ["Flavoured & Vitamin Water", "NOA"], ["Ready-to-Drink Coffee", "NOPA"], ["Mocktails & Mixers", "NA"], ["RTD Cup Drinks", "NA"]]}, {"c": "Syrups & Cordials", "f": false, "p": [["Cocktail & Mocktail Syrups", "NOA"], ["Coffee & Café Syrups", "NOA"], ["Fruit Cordials & Squashes", "NOA"], ["Herbal & Spiced Syrups", "NOP"], ["Sugar-Free Syrups", "NPA"], ["Dessert & Topping Syrups", "NA"], ["Shaved Ice & Slush Syrups", "NA"]]}, {"c": "Fruit Pulps & Purées", "f": false, "p": [["Single Fruit Pulps", "NOP"], ["Mixed Fruit Purées", "NOP"], ["Fruit Concentrates", "NOA"], ["Jams & Fruit Spreads", "NOA"], ["Bakery Fruit Fillings", "NA"], ["Vegetable Purées", "NOP"], ["Baby Food Purées", "NO"]]}, {"c": "Sauces & Dressings", "f": false, "p": [["Chilli & Hot Sauces", "NOPA"], ["Tomato Ketchup", "NOA"], ["Soy & Oyster-Style Sauces", "NPA"], ["Mayonnaise & Egg-Free Mayo", "NPA"], ["Salad Dressings", "NOPA"], ["Cooking & Curry Sauces", "NOPA"], ["Dips & Chutneys", "NOPA"], ["BBQ Sauces & Glazes", "NA"]]}, {"c": "Dairy & Frozen Desserts", "f": false, "p": [["Ice Cream", "NOPA"], ["Sorbets & Frozen Desserts", "NOPA"], ["Yoghurt & Curd", "NOP"], ["Flavoured Milk", "NOPA"], ["Puddings & Custards", "NPA"], ["Cheese Sauces & Spreads", "NPA"], ["Milkshake & Soft-Serve Bases", "NPA"]]}, {"c": "Bakery & Confectionery", "f": false, "p": [["Breads & Buns", "NOPA"], ["Cakes & Sponges", "NOPA"], ["Biscuits & Cookies", "NOPA"], ["Pastries & Puffs", "NPA"], ["Creams & Fillings", "NPA"], ["Toffees & Sweets", "NOPA"], ["Chocolate & Coatings", "NPA"], ["Bakery Premixes", "NOPA"]]}, {"c": "Spice Mixes & Seasonings", "f": false, "p": [["Curry Powders", "NOA"], ["Biryani & Rice Masalas", "NOA"], ["Garam Masala & Spice Blends", "NO"], ["Chilli Blends", "NOA"], ["Herb Blends", "NO"], ["Spice Rubs", "NOA"], ["Tempering Mixes", "NO"]]}, {"c": "Seasonings & Marinades", "f": true, "p": [["Chicken Seasoning", "NA"], ["BBQ & Grill Marinades", "NOPA"], ["Tandoori & Tikka Marinades", "NOA"], ["Seafood Marinades", "NOA"], ["Meat Tenderising Marinades", "NA"], ["Fried Rice & Noodle Seasoning", "NPA"], ["Stock & Soup Seasoning", "NOPA"], ["Snack Seasonings", "NA"], ["Plant-Based Meat Seasoning", "NOP"]]}, {"c": "Dehydrated & Freeze-Dried", "f": false, "p": [["Dehydrated Fruits", "NOA"], ["Freeze-Dried Fruits", "NO"], ["Vegetable Chips & Crisps", "NOPA"], ["Fruit & Vegetable Powders", "NOP"], ["Instant Soup Mixes", "NOPA"], ["Instant Drink Powders", "NOPA"], ["Dried Herbs & Leaves", "NO"], ["Coconut Products", "NOP"]]}, {"c": "Tea & Herbal Blends", "f": false, "p": [["Black & Green Tea Blends", "NO"], ["Flavoured Teas", "NOA"], ["Herbal Infusions", "NO"], ["Wellness Blends", "NO"], ["Chai & Spiced Tea", "NOA"], ["Iced Tea Premixes", "NOA"], ["Instant Tea Powders", "NA"]]}, {"c": "Pickles & Vegetables in Brine", "f": false, "p": [["Mixed Vegetable Pickles", "NOA"], ["Lime & Mango Pickles", "NOA"], ["Chilli Pickles", "NOA"], ["Vegetables in Brine", "NO"], ["Olives, Gherkins & Capers", "NO"], ["Fermented Vegetables", "NOP"], ["Relishes", "NOA"]]}];
  var KEYS = { N: 'Natural', O: 'Organic', P: 'Plant-based', A: 'Artificial' };
  var GQ = 'Get a Quote';
  var BF = 'Formulate a product', BM = 'Machinery I need', BA = 'App or software I need';
  var CHIPS = [GQ, BF, BM, BA, 'Our services', 'Talk to us'];
  var SUG = { f: [BF], m: [BM], a: [BA], all: [BF, BM, BA] };
  var MAP = { 'Our services': 'services', 'Pricing': 'price', 'Talk to us': 'contact' };
  var START = {}; START[BF] = 'f'; START[BM] = 'm'; START[BA] = 'a';

  var NS = 'Not sure yet', TD = 'Prefer to discuss';
  var END = [
    { k: 'Name', q: 'Thank you. What is your name?' },
    { k: 'Contact', q: 'Your WhatsApp number or email, so we can reply to you.' }
  ];
  var TIME = { k: 'Timeline', q: 'When do you need it?', o: ['Within 1 month', '1 to 3 months', '3 to 6 months', 'Just planning', NS] };
  var BRIEFS = {
    f: { t: 'Quote request', i: 'Great! Every formula and recipe we build is tailor-made around your batch size, target market and selling price, so the ingredients, process and cost fit your plan. Please answer a few quick questions (about 1 minute).', q: [
      { k: 'Category', q: 'Which category is your product in? Tap one.', o: CATALOG.map(function (c) { return c.c; }).concat(['Something else']) },
      { k: 'Product', q: 'Which product? Tap one, or tap Other product to type your own.', dyn: 'prod' },
      { k: 'Style', q: 'Which style do you want?', dyn: 'style' },
      { k: 'Form', q: 'Powder or paste?', o: ['Powder', 'Paste', 'Both', 'Not sure yet'], skip: function (a) { return a.Category !== 'Seasonings & Marinades'; } },
      { k: 'Project type', q: 'Is this a new product, or do you want to improve a product you already make?', o: ['New product', 'Improve my current product', NS] },
      { k: 'Batch size', q: 'How much do you plan to make in one batch? You can tap an option or type an amount.', o: ['Under 10 kg / L', '10 to 100 kg / L', '100 to 1,000 kg / L', 'Over 1,000 kg / L', NS] },
      { k: 'Target market', q: 'Who will buy your product?', o: ['Shops and supermarkets', 'Hotels, restaurants and cafés', 'Factories / bulk buyers', 'Export', 'Online / direct', NS] },
      { k: 'Packaging', q: 'How will it be packed, and in what size? For example "200 ml bottle" or "1 kg pouch".', o: ['Bottle', 'Jar', 'Pouch or sachet', 'Can', 'Tub or cup', 'Bulk pack', NS] },
      { k: 'Target selling price', q: 'What selling price do you have in mind per pack? We use this to choose ingredients that fit your price.', o: [NS] },
      { k: 'Development budget', q: 'What budget do you have for developing this product? This helps us suggest the right project scope.', o: [NS, TD] }
    ] },
    m: { t: 'Machinery brief', i: 'We build every machine around your needs, from standard designs to fully custom fabrication. Please answer a few quick questions (about 1 minute) so we can design the right machine for you.', q: [
      { k: 'Machine needed', q: 'What machine or line do you need? Describe it in your own words, for example "powder sachet filling machine" or "200 L cooking kettle with stirrer".' },
      { k: 'Product handled', q: 'What product will the machine handle, and in what form? Tap an option or type the product name.', o: ['Liquid', 'Thick liquid or sauce', 'Paste', 'Powder', 'Granules', 'Solid pieces', NS] },
      { k: 'Output needed', q: 'What output do you need? For example "500 bottles per hour" or "200 kg per day".', o: ['Under 100 units / hour', '100 to 500 units / hour', '500 to 2,000 units / hour', 'Over 2,000 units / hour', NS] },
      { k: 'Automation', q: 'What level of automation do you want?', o: ['Manual', 'Semi-automatic', 'Fully automatic', NS] },
      { k: 'Container / pack', q: 'What container or pack will it work with, and what size?', o: ['Bottle', 'Jar', 'Pouch or sachet', 'Can', 'Tub or cup', 'Bulk', 'Not applicable', NS] },
      { k: 'Power and space', q: 'What power supply do you have? You can also type any limits on floor space.', o: ['Single phase', 'Three phase', NS] },
      TIME,
      { k: 'Budget', q: 'What budget do you have for this machine?', o: [NS, TD] }
    ] },
    a: { t: 'App brief', i: 'We can customise any of our apps or build a new one, tailored to the way your business works. Please answer a few quick questions (about 1 minute).', q: [
      { k: 'App needs', q: 'What do you need the app to do? Describe it in your own words, for example "track raw material stock and expiry dates" or "cost our menu items".' },
      { k: 'Business type', q: 'What type of business is it for?', o: ['Food or beverage factory', 'Hotel, restaurant or café', 'Warehouse or store', 'Retail or distribution', 'Other'] },
      { k: 'Starting point', q: 'How would you like to start?', o: ['Use one of your apps as it is', 'Customise one of your apps', 'Build a new app', NS] },
      { k: 'Users', q: 'How many people will use it?', o: ['1 to 5', '6 to 20', '21 to 100', 'Over 100', NS] },
      { k: 'Devices', q: 'Which devices will it be used on?', o: ['Phone', 'Tablet', 'Computer', 'All of these'] },
      { k: 'Connections', q: 'Does it need to connect with anything else, such as accounts software or an existing system? Type the name, or tap an option.', o: ['No', NS] },
      TIME,
      { k: 'Payment preference', q: 'How would you prefer to pay?', o: ['Outright purchase', 'Monthly subscription', NS] }
    ] }
  };
  var brief = null;

  function scroll() { bd.scrollTop = bd.scrollHeight; }
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function msg(t, who) { var d = document.createElement('div'); d.className = 'm ' + who; d.textContent = t; bd.appendChild(d); scroll(); return d; }
  function links(ls, wa, q, chips, tag) {
    var d = document.createElement('div'); d.className = 'lk'; var h = '';
    (ls || []).forEach(function (l) { if (l) h += '<a href="' + l[1] + '">' + esc(l[0]) + ' ›</a>'; });
    if (wa) h += '<a class="wa" target="_blank" rel="noopener" href="' + WA + (q ? '?text=' + encodeURIComponent(q) : '') + '">WhatsApp Us</a>';
    (chips || []).forEach(function (c) { h += '<button type="button">' + esc(c) + '</button>'; });
    if (!h) return; d.innerHTML = h; if (tag) d.setAttribute('data-t', tag); bd.appendChild(d); scroll();
  }
  function bot(t, ls, wa, q, chips, tag, after) {
    var ty = document.createElement('div'); ty.className = 'm b ty'; ty.innerHTML = '<i></i><i></i><i></i>'; bd.appendChild(ty); scroll();
    setTimeout(function () { ty.remove(); msg(t, 'b'); links(ls, wa, q, chips, tag); if (after) after(); }, 550);
  }

  function cur() { return brief.list[brief.n]; }
  function startBrief(type, lead) {
    var B = BRIEFS[type]; brief = { type: type, n: 0, a: {}, list: B.q.concat(END) };
    inp.placeholder = 'Type your answer…';
    bot((lead ? lead + ' Please answer a few quick questions (about 1 minute).' : B.i) + ' You can type "cancel" at any time.', null, false, null, null, null, askNext);
  }
  function catOf(a) { for (var i = 0; i < CATALOG.length; i++) if (CATALOG[i].c === a.Category) return CATALOG[i]; return null; }
  function prodOf(a) { var c = catOf(a); if (!c) return null; for (var i = 0; i < c.p.length; i++) if (c.p[i][0] === a.Product) return c.p[i]; return null; }
  function askNext() {
    var s = cur();
    while (s && s.skip && s.skip(brief.a)) { brief.n++; s = cur(); }
    if (!s) return finish();
    var q = s.q, o = s.o;
    if (s.dyn === 'prod') {
      var c = catOf(brief.a);
      if (!c || brief.typing) { q = 'What product do you want to make? Type it in your own words, for example "biryani seasoning powder in 50 g sachets".'; o = null; }
      else o = c.p.map(function (p) { return p[0]; }).concat(['Other product']);
    }
    if (s.dyn === 'style') {
      var p = prodOf(brief.a);
      o = (p ? p[1].split('').map(function (x) { return KEYS[x]; }) : ['Natural', 'Organic', 'Plant-based', 'Artificial']).concat(['Not sure yet']);
    }
    bot(q, null, false, null, o, 'b' + brief.n);
  }
  function stopBrief(t) { brief = null; inp.placeholder = 'Type your question…'; if (t) bot(t, null, false, null, CHIPS); }
  function briefText() {
    var t = BRIEFS[brief.type].t + ' from the MCR website\n';
    done().forEach(function (s) { t += s.k + ': ' + brief.a[s.k] + '\n'; });
    return t;
  }
  function briefAnswer(v) {
    if (/^(cancel|stop|exit|quit)$/i.test(v)) return stopBrief('No problem, the brief is cancelled. How else can I help you?');
    var s = cur();
    if (s.k === 'Contact' && !(/@/.test(v) || (v.replace(/\D/g, '').length >= 7))) return bot('Please enter a WhatsApp number or an email address so we can reply to you.');
    if (s.dyn === 'prod' && v === 'Other product') { brief.typing = true; return askNext(); }
    if (s.k === 'Product' && v.length < 3) return bot('Please describe it in a few words.');
    brief.a[s.k] = v; brief.n++; brief.typing = false;
    if (brief.n < brief.list.length) return askNext();
    finish();
  }
  function done() { return brief.list.filter(function (q) { return q.k in brief.a; }); }
  function finish() {
    brief.n = brief.list.length;
    inp.placeholder = 'Type your question…';
    var sum = 'Here is your ' + BRIEFS[brief.type].t.toLowerCase() + ':\n\n' + done().map(function (q) { return q.k + ': ' + brief.a[q.k]; }).join('\n') + '\n\nTap Send to MCR and our team will contact you.';
    bot(sum, null, false, null, ['Send to MCR', 'Start again'], 'send');
  }
  function sendBrief() {
    var a = brief.a, note = msg('Sending…', 'b'), t = BRIEFS[brief.type].t;
    var data = { _subject: (brief.type === 'f' ? 'Quote request' : t) + ' - ' + (a.Product ? a.Product + ' - ' : '') + a.Name, _cc: 'migiecmb@gmail.com', _template: 'table', _captcha: 'false' };
    done().forEach(function (q) { data[q.k] = a[q.k]; });
    var wt = briefText();
    fetch('https://formsubmit.co/ajax/mcr@mcrconceptvld.com', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })
      .then(function (r) { if (!r.ok) throw 0; return r.json(); })
      .then(function () { note.remove(); brief = null; bot('Thank you, ' + a.Name + '! Your ' + t.toLowerCase() + ' has been sent to our team. We will contact you soon. If it is urgent, you can also send it on WhatsApp.', null, true, wt, CHIPS.slice(0, 3)); })
      .catch(function () { note.remove(); bot('Sorry, the brief could not be sent from here. Tap WhatsApp Us to send it to us directly.', null, true, wt); });
  }

  function reply(r, q) {
    if (r && r.b) { misses = 0; return startBrief(r.b, r.a); }
    if (r) { misses = 0; return bot(r.a, r.links, r.w, null, r.c ? CHIPS : (r.s ? SUG[r.s] : null)); }
    misses++;
    bot(misses > 1 ? 'Our team can answer that for you directly. Tap WhatsApp Us to send your question now, or use the contact form.' :
      'Sorry, I do not have an answer for that yet. Everything we do is tailor-made, so choose what you need below and I will ask a few quick questions. You can also send your question to our team on WhatsApp.',
      [L.contact], true, q, SUG.all);
  }
  function ask(q) {
    q = (q || '').trim(); if (!q) return;
    msg(q, 'u');
    if (brief) return briefAnswer(q);
    reply(answer(q), q);
  }
  function open() {
    box.classList.add('open'); btn.style.display = 'none';
    if (!started) { started = true; bot('Hello! I am the MCR Assistant. Everything we do is tailor-made: formulas and recipes, machinery and apps, built to your exact requirements. What would you like to create?', null, false, null, CHIPS); }
    setTimeout(function () { if (window.innerWidth > 520) inp.focus(); }, 300);
  }
  function close() { box.classList.remove('open'); btn.style.display = ''; }
  btn.addEventListener('click', open);
  box.querySelector('.hd button').addEventListener('click', close);
  box.querySelector('form').addEventListener('submit', function (e) { e.preventDefault(); var v = inp.value; inp.value = ''; ask(v); });
  bd.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var t = b.textContent, grp = b.parentNode.getAttribute('data-t');
    if (grp === 'send') {
      if (!brief || brief.n < brief.list.length) return;
      b.parentNode.removeAttribute('data-t');
      msg(t, 'u');
      return t === 'Send to MCR' ? sendBrief() : startBrief(brief.type);
    }
    if (grp && grp.charAt(0) === 'b') {
      if (!brief || grp !== 'b' + brief.n) return;
      b.parentNode.removeAttribute('data-t');
      msg(t, 'u'); return briefAnswer(t);
    }
    if (brief) return;
    msg(t, 'u');
    if (t === GQ) return bot('What would you like a quote for?', null, false, null, [BF, BM, BA]);
    if (START[t]) return startBrief(START[t]);
    reply(answer(MAP[t] || t), t);
  });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.eq'); if (!a) return;
    var row = a.closest('.it'); var m = /[?&]cat=([^&#]+)/.exec(a.getAttribute('href') || '');
    if (!row || !m) return;
    e.preventDefault();
    var c = decodeURIComponent(m[1]), p = row.querySelector('.nm b').textContent;
    open(); stopBrief();
    msg('Get a quote for ' + p, 'u');
    brief = { type: 'f', n: 2, a: { Category: c, Product: p }, list: BRIEFS.f.q.concat(END) };
    inp.placeholder = 'Type your answer…';
    bot('Great choice! ' + p + ' (' + c + '). Every formula is tailor-made, so please tap a few quick answers (about 1 minute).', null, false, null, null, null, askNext);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && box.classList.contains('open')) close(); });
})();
