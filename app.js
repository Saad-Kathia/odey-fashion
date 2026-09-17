/* ===================== ODEY FASHION — app ===================== */
const PKR = n => 'PKR ' + n.toLocaleString('en-PK');

/* ---- icons ---- */
const I = {
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>',
  user:'<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="8" r="4"/>',
  heart:'<path d="M12 20s-7-4.6-7-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7 2.6C19 15.4 12 20 12 20z"/>',
  bag:'<path d="M5 8h14l1 12H4L5 8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  chev:'<path d="M9 6l6 6-6 6"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7"/>',
  shield:'<path d="M12 3l7 3v5c0 5-3.3 8.6-7 10-3.7-1.4-7-5-7-10V6l7-3z"/><path d="M9.2 12.2l2 2 3.6-3.8"/>',
  truck:'<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/>',
  refresh:'<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v4h-4"/>',
  chat:'<path d="M20 15a3 3 0 0 1-3 3H8l-4 3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3z"/>',
  gem:'<path d="M6 4h12l3 5-9 11L3 9z"/><path d="M3 9h18M9 4l-3 5 6 11 6-11-3-5"/>',
  leaf:'<path d="M20 4C10 4 4 9 4 16c0 2 .6 3.4.6 3.4S9 12 19 9c0 0-6 3-9.4 9.6C14 21 20 17 20 4z"/>',
  pin:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  card:'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/>',
  cash:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/>',
  bank:'<path d="M4 10h16M5 10v8M19 10v8M9 10v8M15 10v8M3 20h18M12 3l8 5H4z"/>',
  wallet:'<path d="M4 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4z"/><path d="M4 7V5.5A1.5 1.5 0 0 1 5.5 4H17"/><circle cx="16.5" cy="13" r="1.2"/>',
  box:'<path d="M3 8l9-4 9 4v8l-9 4-9-4z"/><path d="M3 8l9 4 9-4M12 12v8"/>',
  bell:'<path d="M18 16V11a6 6 0 1 0-12 0v5l-2 3h16z"/><path d="M10 22h4"/>',
  gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6M18.4 18.4l-1.6-1.6M7.2 7.2L5.6 5.6"/>',
  out:'<path d="M15 4h4v16h-4"/><path d="M11 8l-4 4 4 4M7 12h9"/>',
  star:'<path d="M12 3.6l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.8z"/>',
};
const ic = (k,c='') => `<svg class="${c}" viewBox="0 0 24 24" aria-hidden="true">${I[k]}</svg>`;

const hangerSVG = `<svg viewBox="0 0 120 78" aria-hidden="true"><path d="M60 28c0-8.5-7.6-10.4-7.6-16C52.4 6.6 57.4 3.4 62.4 5.6" fill="none" stroke="currentColor" stroke-width="4.4" stroke-linecap="round"/><path d="M60 29 22.5 59.4c-3.6 2.9-1.9 5.6 2.6 5.6h69.8c4.5 0 6.2-2.7 2.6-5.6L60 29z" fill="none" stroke="currentColor" stroke-width="4.4" stroke-linejoin="round"/></svg>`;

const logo = (cls='') => `<a href="#/" class="logo ${cls}" aria-label="ODEY Fashion, home">${hangerSVG}<span class="lw"><b>ODEY</b><i>Fashion</i></span></a>`;

/* ---- photo slot: the place a real photograph goes ---- */
/* ---- signature line-art illustrations (drawn, not photographic) ---- */
const ILLUS = {
  menFig: `<svg viewBox="0 0 100 150" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="18" r="9"/>
    <path d="M50 27v10"/>
    <path d="M33 40c6-4 11-6 17-6s11 2 17 6l3 30-5 3-2 26c-4 2-9 3-13 3s-9-1-13-3l-2-26-5-3z"/>
    <path d="M33 40 24 62l6 8 8-14"/>
    <path d="M67 40 76 62l-6 8-8-14"/>
    <path d="M38 96c-3 10-4 20-2 34m-8-34c1 13 0 24-4 34m38-34c3 10 4 20 2 34m8-34c-1 13 0 24 4 34"/>
    <path d="M50 96v10"/>
  </g></svg>`,
  womenFig: `<svg viewBox="0 0 100 150" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="46" cy="17" r="8.5"/>
    <path d="M46 25.5v9"/>
    <path d="M30 37c5-3.5 10-5.5 16-5.5s11 2 16 5.5l4 33-6 3-1 22c-4 2-9 3-13 3s-9-1-13-3l-1-22-6-3z"/>
    <path d="M30 37c-9 6-14 16-14 28M62 37c9 4 15 12 18 22"/>
    <path d="M38 95c-2 10-3 20-1 33m-8-33c1 12-1 22-5 33m34-33c2 10 3 20 1 33"/>
    <path d="M62 37c4 10 3 22-3 30-4 5-9 8-9 8"/>
  </g></svg>`,
  kidFig: `<svg viewBox="0 0 100 150" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="30" r="10"/>
    <path d="M50 40v8"/>
    <path d="M36 51c5-3 9-4 14-4s9 1 14 4l2 24-4 2-2 20c-3 1.5-7 2.5-10 2.5s-7-1-10-2.5l-2-20-4-2z"/>
    <path d="M36 51 30 66l5 6 6-10M64 51l6 15-5 6-6-10"/>
    <path d="M42 97c-2 8-2 16-1 26m-6-26c1 10-1 18-4 26m28-26c2 8 2 16 1 26m6-26c-1 10 1 18 4 26"/>
  </g></svg>`,
  jewelry: `<svg viewBox="0 0 100 150" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="50" cy="52" rx="26" ry="9"/>
    <path d="M28 54c0 14 10 24 22 24s22-10 22-24"/>
    <path d="M50 78v10l-6 8h12l-6-8"/>
    <circle cx="30" cy="100" r="9"/><path d="M30 91v-6M23 100h-9M37 100h9M25 94l-4-4M35 94l4-4"/>
    <circle cx="70" cy="100" r="9"/><path d="M70 91v-6M63 100h-9M77 100h9M65 94l-4-4M75 94l4-4"/>
    <path d="M42 118c3 5 5 10 5 16M58 118c-3 5-5 10-5 16" />
  </g></svg>`,
  watch: `<svg viewBox="0 0 100 150" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M40 42c-8 3-14 9-14 18v20c0 9 6 15 14 18M60 42c8 3 14 9 14 18v20c0 9-6 15-14 18"/>
    <circle cx="50" cy="75" r="26"/>
    <circle cx="50" cy="75" r="20.5"/>
    <path d="M50 62v14l10 7"/>
    <path d="M50 51v-4M50 103v-4M27 75h-4M77 75h-4"/>
  </g></svg>`,
  perfume: `<svg viewBox="0 0 100 150" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="38" y="20" width="24" height="14" rx="3"/>
    <path d="M46 20v-8h8v8"/>
    <path d="M35 34c-6 4-9 10-9 18v46c0 8 6 14 14 14h20c8 0 14-6 14-14V52c0-8-3-14-9-18z"/>
    <path d="M26 62h48M50 44v70"/>
  </g></svg>`,
  dupatta: `<svg viewBox="0 0 100 150" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M18 28c14-6 24-4 32 4 9 9 6 20-2 28-9 9-9 20 0 30 8 9 22 12 34 6"/>
    <path d="M22 40c12-4 20-2 27 5 6 7 4 15-2 21-8 8-8 16 1 24 7 6 18 8 27 4"/>
    <path d="M26 54c9-2 15 0 19 5 4 5 2 10-2 14-6 6-5 12 1 17 5 4 12 6 18 4"/>
  </g></svg>`,
  scissors: `<svg viewBox="0 0 100 150" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="34" cy="60" r="8"/><circle cx="34" cy="94" r="8"/>
    <path d="M40 66 84 34M40 88 84 120"/>
    <path d="M40 66c-14 8-14 16 0 22M40 88c-14-8-14-16 0-22"/>
    <circle cx="66" cy="42" r="3.4" fill="currentColor" stroke="none"/><circle cx="66" cy="112" r="3.4" fill="currentColor" stroke="none"/>
    <path d="M20 130c18-6 44-6 62 0" stroke-dasharray="2 6"/>
  </g></svg>`,
  box: `<svg viewBox="0 0 100 150" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 52 50 36l34 16-34 16z"/><path d="M16 52v46l34 16M84 52v46L50 114"/><path d="M16 52l34 16M84 52 50 68"/>
    <path d="M50 36v78"/><path d="M40 36c0-8 4-12 10-12s10 4 10 12"/>
  </g></svg>`,
  belt: `<svg viewBox="0 0 100 150" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 75c0-20 76-20 76 0s-76 20-76 0z"/>
    <rect x="38" y="62" width="24" height="26" rx="4"/>
    <path d="M46 68h8v14h-8z"/>
  </g></svg>`,
  bag: `<svg viewBox="0 0 100 150" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M26 56h48l5 56H21z"/>
    <path d="M38 56v-8c0-8 5-14 12-14s12 6 12 14v8"/>
  </g></svg>`,
};

function slot(tone, label, note, extra='', icon=''){
  const art = ICON_IMG(icon);
  return `<div class="slot slot--${tone} ${extra}" role="img" aria-label="${label}">
    <div class="slot__mark ${art.big?'slot__mark--big':''}">${art.svg}</div>
    <div class="slot__note"><b>${art.tag}</b>${note}</div>
  </div>`;
}
function ICON_IMG(key){
  const map = {
    menFig:['menFig',true], womenFig:['womenFig',true], kidFig:['kidFig',true],
    jewelry:['jewelry',true], watch:['watch',true], perfume:['perfume',true],
    dupatta:['dupatta',true], scissors:['scissors',true], box:['box',true],
    belt:['belt',true], bag:['bag',true],
  };
  if(map[key]) return {svg:ILLUS[map[key][0]], big:true, tag:'Line art — photography to follow'};
  return {svg:hangerSVG, big:false, tag:'Photo slot'};
}

function stars(r){
  let s='';
  for(let i=1;i<=5;i++) s += `<svg viewBox="0 0 24 24" class="${i<=Math.round(r)?'':'off'}">${I.star}</svg>`;
  return `<span class="stars">${s}<span>${r.toFixed(1)}</span></span>`;
}

/* ===================== CATALOGUE =====================
   Category list is data-driven — add an entry here and the whole
   site (nav, filters, shop pages, footer) picks it up.            */
const CATEGORIES = [
  {id:'men',   name:'Men',        tag:'Authentic shalwar kameez, refined for the modern gentleman.', tone:'ivory', icon:'menFig',
   shot:'Pakistani male model, full length, authentic shalwar kameez — long kameez with side slits and loose straight-cut shalwar. Not a kurta pajama.'},
  {id:'women', name:'Women',      tag:'Grace, tradition and contemporary Pakistani elegance.', tone:'navy', icon:'womenFig',
   shot:'Pakistani female model in authentic shalwar kameez with draped dupatta, hand embroidery visible, editorial lighting.'},
  {id:'kids',  name:'Kids',       tag:'Little Odey — traditional dressing, made for play.', tone:'gold', icon:'kidFig',
   shot:'Pakistani children in traditional shalwar kameez and festive Eid outfits, natural daylight, relaxed poses.'},
  {id:'accessories', name:'Accessories', tag:'Jewelry, wristwatches, fragrance and finishing pieces.', tone:'bronze', icon:'jewelry',
   shot:'Still life: gold jhumka earrings, a navy-dial wristwatch and a fragrance bottle on ivory linen, raking light.'},
];

const SIZES_AD = ['XS','S','M','L','XL','XXL'];
const SIZES_KID = ['2-3Y','4-5Y','6-7Y','8-9Y','10-11Y','12-13Y'];
const C = {navy:'#1A2A47',ivory:'#FCF5E8',white:'#FFFFFF',charcoal:'#363636',bronze:'#8A7353',gold:'#B3915F',black:'#141414'};

let _id = 0;
function iconFor(o){
  if(o.icon) return o.icon;
  if(o.cat==='men') return 'menFig';
  if(o.cat==='women') return o.sub==='Dupattas' ? 'dupatta' : 'womenFig';
  if(o.cat==='kids') return 'kidFig';
  if(o.cat==='accessories'){
    if(o.sub==='Jewelry') return 'jewelry';
    if(o.sub==='Wristwatches') return 'watch';
    if(o.sub==='Perfumes') return 'perfume';
    if(/belt/i.test(o.name)) return 'belt';
    if(/clutch|dupatta/i.test(o.name)) return o.name.match(/dupatta/i)?'dupatta':'bag';
    return 'bag';
  }
  return '';
}
const P = o => { const withIcon = Object.assign({
  id:'p'+(++_id), rating:4.6, reviews:34, stock:18, sizes:SIZES_AD,
  colors:[{n:'Ivory',h:C.ivory},{n:'Navy',h:C.navy}],
  fabric:'Premium cotton blend', tone:'ivory', isNew:false, best:false, was:null,
  kameez:'', shalwar:'', care:'Dry clean recommended. Cool iron on reverse. Store on a padded hanger.',
}, o); withIcon.icon = iconFor(withIcon); return withIcon; };

const APPAREL_CARE = 'Dry clean recommended for embroidered pieces. Machine wash cold on gentle for plain cotton. Cool iron on reverse. Do not bleach.';

const PRODUCTS = [
/* ---------------- MEN ---------------- */
P({name:'Royal Ivory Shalwar Kameez', cat:'men', sub:'Formal', price:14900, was:18500, rating:4.8, reviews:126, best:true, tone:'ivory',
  fabric:'Egyptian-blend wash & wear, 180 GSM',
  kameez:'Full-length kameez with a banded collar, concealed placket, side slits and hand-finished cuffs.',
  shalwar:'Traditional loose-cut shalwar with a generous fall, deep pleating at the waist and a drawstring tunnel.',
  care:APPAREL_CARE, colors:[{n:'Royal Ivory',h:C.ivory},{n:'Wheat',h:'#E8DCC2'}],
  shot:'Pakistani male model, full length, ivory shalwar kameez — long kameez over loose straight shalwar with correct break at the ankle. Studio, warm key light, plain ivory backdrop.'}),
P({name:'Midnight Navy Shalwar Kameez', cat:'men', sub:'Formal', price:16500, rating:4.9, reviews:98, tone:'navy', isNew:true,
  fabric:'Mercerised cotton twill with a soft matte finish',
  kameez:'Structured kameez with a mandarin collar, self-covered buttons and clean topstitched seams.',
  shalwar:'Classic wide shalwar, pleated at the waistband, tapering gently to a traditional hem.',
  care:APPAREL_CARE, colors:[{n:'Midnight Navy',h:C.navy},{n:'Charcoal',h:C.charcoal}],
  shot:'Pakistani male model in deep navy shalwar kameez, three-quarter editorial crop, loose shalwar clearly visible, low warm sidelight.'}),
P({name:'Classic White Shalwar Kameez', cat:'men', sub:'Everyday', price:12900, rating:4.7, reviews:210, best:true, tone:'ivory',
  fabric:'Fine combed cotton, breathable weave',
  kameez:'Everyday kameez with a soft collar, chest pocket and relaxed shoulder line.',
  shalwar:'Full traditional shalwar with ample drape and a reinforced drawstring casing.',
  care:APPAREL_CARE, colors:[{n:'Pure White',h:C.white},{n:'Ivory',h:C.ivory}],
  shot:'Pakistani male model in crisp white shalwar kameez, daylight, courtyard setting, full length so the loose shalwar reads clearly.'}),
P({name:'Charcoal Heritage Shalwar Kameez', cat:'men', sub:'Formal', price:15900, rating:4.6, reviews:74, tone:'char',
  fabric:'Heavy-drape poly-viscose suiting',
  kameez:'Heritage-cut kameez with a raised collar and tonal hand-stitch detail along the placket.',
  shalwar:'Wide-leg shalwar with traditional Pakistani proportions and a stitched ankle finish.',
  care:APPAREL_CARE, colors:[{n:'Charcoal',h:C.charcoal},{n:'Navy',h:C.navy}],
  shot:'Pakistani male model in charcoal shalwar kameez, seated on a carved wooden chair, dramatic side light, full outfit in frame.'}),
P({name:'Deep Black Premium Shalwar Kameez', cat:'men', sub:'Occasion', price:18900, was:22000, rating:4.8, reviews:63, tone:'char',
  fabric:'Luxury wash & wear with a subtle sheen',
  kameez:'Premium kameez with a satin-faced collar, French placket and reinforced side vents.',
  shalwar:'Generously cut shalwar, pressed pleats, falling in a clean traditional line.',
  care:APPAREL_CARE, colors:[{n:'Deep Black',h:C.black},{n:'Midnight',h:C.navy}],
  shot:'Pakistani male model in black shalwar kameez against a deep navy wall, gold rim light, full length, formal evening mood.'}),
P({name:'Royal Brown Formal Shalwar Kameez', cat:'men', sub:'Formal', price:17500, rating:4.7, reviews:52, tone:'bronze', isNew:true,
  fabric:'Bronze-toned textured cotton blend',
  kameez:'Formal kameez with a tonal bronze placket and hand-finished buttonholes.',
  shalwar:'Traditional loose shalwar with a soft fall and deep waist pleating.',
  care:APPAREL_CARE, colors:[{n:'Royal Brown',h:C.bronze},{n:'Wheat',h:'#D8C39B'}],
  shot:'Pakistani male model in bronze-brown shalwar kameez, warm interior, brass lamp light, full length.'}),
P({name:'Wheat Cotton Summer Shalwar Kameez', cat:'men', sub:'Everyday', price:9900, was:11900, rating:4.5, reviews:140, tone:'ivory',
  fabric:'Lightweight summer cotton',
  kameez:'Airy kameez with an open collar and softly rolled cuffs.',
  shalwar:'Loose summer shalwar, extra-breathable, traditional cut.',
  care:APPAREL_CARE, colors:[{n:'Wheat',h:'#E3D3B6'},{n:'White',h:C.white}],
  shot:'Pakistani male model in wheat-toned summer shalwar kameez outdoors at golden hour, natural movement in the shalwar.'}),
P({name:'Sapphire Waistcoat Shalwar Kameez Set', cat:'men', sub:'Occasion', price:22500, rating:4.9, reviews:41, tone:'navy', best:true,
  fabric:'Navy wash & wear with a jacquard waistcoat',
  kameez:'Navy kameez worn under a tailored jacquard waistcoat with gold-tone buttons.',
  shalwar:'Matching loose shalwar with traditional pleating and full drape.',
  care:APPAREL_CARE, colors:[{n:'Sapphire Navy',h:C.navy},{n:'Bronze',h:C.bronze}],
  shot:'Pakistani groom-style model in navy shalwar kameez with waistcoat, full length, wedding-editorial lighting, loose shalwar clearly visible.'}),

/* ---------------- WOMEN ---------------- */
P({name:'Hand-Embroidered Ivory Shalwar Kameez', cat:'women', sub:'Formal', price:24900, was:29900, rating:4.9, reviews:188, best:true, tone:'ivory',
  fabric:'Pure lawn with silk-thread hand embroidery',
  kameez:'Straight-cut kameez with a densely embroidered neckline, scalloped hem and finished side slits.',
  shalwar:'Matching straight shalwar with an embroidered ankle border. Chiffon dupatta included.',
  care:APPAREL_CARE, colors:[{n:'Ivory',h:C.ivory},{n:'Gold',h:C.gold}],
  shot:'Pakistani female model in ivory embroidered shalwar kameez with dupatta draped over one shoulder, hand embroidery sharp in frame, soft daylight.'}),
P({name:'Zari Gold Festive Shalwar Kameez', cat:'women', sub:'Festive', price:32500, rating:4.8, reviews:96, tone:'gold', isNew:true,
  fabric:'Raw silk with zari and dabka work',
  kameez:'Festive kameez with zari borders, mirror accents and a boat neckline.',
  shalwar:'Flared traditional shalwar with a zari hem. Organza dupatta with gold edging included.',
  care:'Dry clean only. Store folded in the supplied ivory garment bag, away from direct light.',
  colors:[{n:'Antique Gold',h:C.gold},{n:'Bronze',h:C.bronze}],
  shot:'Pakistani female model in gold zari festive shalwar kameez, dupatta held wide, warm candlelit interior, luxury bridal-adjacent editorial.'}),
P({name:'Navy Chiffon Formal Shalwar Kameez', cat:'women', sub:'Formal', price:27900, rating:4.7, reviews:64, tone:'navy',
  fabric:'Silk chiffon over a cotton-silk lining',
  kameez:'Flowing chiffon kameez with tonal thread work at the neckline and cuffs.',
  shalwar:'Matching straight-cut shalwar, fully lined. Chiffon dupatta included.',
  care:'Dry clean only. Cool iron with a pressing cloth.',
  colors:[{n:'Navy',h:C.navy},{n:'Charcoal',h:C.charcoal}],
  shot:'Pakistani female model in navy chiffon shalwar kameez, dupatta caught in motion, dark editorial backdrop, gold accent light.'}),
P({name:'Rose Bronze Embroidered Lawn Suit', cat:'women', sub:'Everyday', price:11900, was:14500, rating:4.6, reviews:232, tone:'bronze', best:true,
  fabric:'Printed lawn, three-piece',
  kameez:'Lightweight lawn kameez with a bronze embroidered yoke.',
  shalwar:'Plain matching shalwar in traditional straight cut. Printed dupatta included.',
  care:APPAREL_CARE, colors:[{n:'Rose Bronze',h:C.bronze},{n:'Ivory',h:C.ivory}],
  shot:'Pakistani female model in bronze lawn shalwar kameez, everyday styling, bright daylight, three-piece laid out alongside.'}),
P({name:'Pearl White Cotton Shalwar Kameez', cat:'women', sub:'Everyday', price:13500, rating:4.5, reviews:118, tone:'ivory',
  fabric:'Soft cotton with pintuck detailing',
  kameez:'Pintucked kameez with a mandarin collar and pearl buttons.',
  shalwar:'Traditional straight shalwar with a clean hem.',
  care:APPAREL_CARE, colors:[{n:'Pearl White',h:C.white},{n:'Ivory',h:C.ivory}],
  shot:'Pakistani female model in white cotton shalwar kameez, minimal styling, ivory studio backdrop, gentle diffused light.'}),
P({name:'Deep Indigo Silk Shalwar Kameez', cat:'women', sub:'Festive', price:29900, rating:4.8, reviews:57, tone:'navy', isNew:true,
  fabric:'Pure silk with tonal resham work',
  kameez:'Silk kameez with a deep indigo finish and resham embroidery along the panels.',
  shalwar:'Silk shalwar in a traditional cut. Contrast dupatta with bronze edging included.',
  care:'Dry clean only.', colors:[{n:'Deep Indigo',h:'#1B2C52'},{n:'Navy',h:C.navy}],
  shot:'Pakistani female model in indigo silk shalwar kameez, dupatta over the head, arched doorway location, film-like editorial grade.'}),
P({name:'Heritage Chikankari Shalwar Kameez', cat:'women', sub:'Formal', price:19900, rating:4.7, reviews:88, tone:'ivory',
  fabric:'Cotton voile with chikankari hand work',
  kameez:'White-on-white chikankari kameez with a scalloped neckline.',
  shalwar:'Voile shalwar, traditional straight cut. Chikankari dupatta included.',
  care:APPAREL_CARE, colors:[{n:'Ivory',h:C.ivory},{n:'White',h:C.white}],
  shot:'Close editorial of chikankari hand embroidery plus a full-length frame of the complete shalwar kameez with dupatta.'}),
P({name:'Ivory Organza Dupatta', cat:'women', sub:'Dupattas', price:8900, rating:4.6, reviews:45, tone:'ivory',
  fabric:'Organza with a hand-finished gold border', sizes:['One size'],
  kameez:'', shalwar:'',
  care:'Dry clean only. Roll rather than fold to avoid creasing.',
  colors:[{n:'Ivory',h:C.ivory},{n:'Gold',h:C.gold}],
  shot:'Organza dupatta with gold border photographed in motion against ivory, and styled over a shalwar kameez on a model.'}),

/* ---------------- KIDS ---------------- */
P({name:"Boys' Ivory Eid Shalwar Kameez", cat:'kids', sub:'Festive', price:6900, rating:4.8, reviews:74, tone:'ivory', sizes:SIZES_KID, best:true,
  fabric:'Soft cotton blend, skin-friendly',
  kameez:'Miniature kameez with a banded collar and self buttons.',
  shalwar:'Loose traditional shalwar with an elasticated waist for easy wear.',
  care:'Machine wash cold on gentle. Cool iron.', colors:[{n:'Ivory',h:C.ivory},{n:'White',h:C.white}],
  shot:'Pakistani boy, around 7, in ivory shalwar kameez for Eid, natural daylight, relaxed candid pose, full length.'}),
P({name:"Boys' Navy Festive Shalwar Kameez", cat:'kids', sub:'Festive', price:7500, rating:4.7, reviews:52, tone:'navy', sizes:SIZES_KID, isNew:true,
  fabric:'Cotton twill with a soft handle',
  kameez:'Navy kameez with tonal topstitching and a mandarin collar.',
  shalwar:'Traditional loose shalwar with a comfort waistband.',
  care:'Machine wash cold on gentle.', colors:[{n:'Navy',h:C.navy},{n:'Charcoal',h:C.charcoal}],
  shot:'Pakistani boy in navy shalwar kameez, festive setting with soft string lights, full length.'}),
P({name:"Girls' Gold Embroidered Festive Suit", cat:'kids', sub:'Festive', price:8900, rating:4.9, reviews:61, tone:'gold', sizes:SIZES_KID,
  fabric:'Lawn with light zari embroidery',
  kameez:'Embroidered kameez with a gathered flare and gold trim.',
  shalwar:'Matching shalwar with an embroidered ankle. Light dupatta included.',
  care:'Gentle hand wash or dry clean.', colors:[{n:'Gold',h:C.gold},{n:'Ivory',h:C.ivory}],
  shot:'Pakistani girl in gold embroidered kameez with shalwar and small dupatta, festive daylight, joyful natural expression.'}),
P({name:"Girls' Ivory Kameez Shalwar Set", cat:'kids', sub:'Everyday', price:7900, rating:4.6, reviews:39, tone:'ivory', sizes:SIZES_KID,
  fabric:'Breathable cotton', kameez:'Simple ivory kameez with a scalloped neckline.',
  shalwar:'Comfort-fit traditional shalwar. Cotton dupatta included.',
  care:'Machine wash cold.', colors:[{n:'Ivory',h:C.ivory},{n:'Bronze',h:C.bronze}],
  shot:'Pakistani girl in ivory kameez shalwar with dupatta, garden setting, soft daylight.'}),
P({name:"Boys' Everyday Cotton Shalwar Kameez", cat:'kids', sub:'Everyday', price:4900, was:5900, rating:4.5, reviews:96, tone:'ivory', sizes:SIZES_KID,
  fabric:'Everyday cotton, pre-shrunk',
  kameez:'Easy-wear kameez with a chest pocket.', shalwar:'Loose shalwar with an elasticated waist.',
  care:'Machine wash cold.', colors:[{n:'Wheat',h:'#E3D3B6'},{n:'White',h:C.white}],
  shot:'Pakistani boy in plain cotton shalwar kameez, everyday home setting, natural light.'}),
P({name:"Girls' Bronze Festive Suit", cat:'kids', sub:'Festive', price:9500, rating:4.7, reviews:33, tone:'bronze', sizes:SIZES_KID,
  fabric:'Raw silk blend with embroidery',
  kameez:'Bronze festive kameez with a flared panel and thread work.',
  shalwar:'Matching shalwar with a scalloped hem. Dupatta included.',
  care:'Dry clean recommended.', colors:[{n:'Bronze',h:C.bronze},{n:'Gold',h:C.gold}],
  shot:'Pakistani girl in bronze festive shalwar kameez with dupatta, warm interior, Eid morning mood.'}),

/* ---------------- ACCESSORIES ---------------- */
P({name:'Gold Jhumka Earrings', cat:'accessories', sub:'Jewelry', price:9500, rating:4.8, reviews:142, tone:'gold', sizes:['One size'], best:true,
  fabric:'Gold-plated brass with pearl drops', care:'Keep dry. Store in the supplied pouch away from perfume.',
  colors:[{n:'Gold',h:C.gold},{n:'Bronze',h:C.bronze}],
  shot:'Gold jhumka earrings on ivory linen, macro detail of the pearl drops, plus worn on a model with a dupatta.'}),
P({name:'Kundan Choker Set', cat:'accessories', sub:'Jewelry', price:24500, was:28900, rating:4.9, reviews:58, tone:'gold', sizes:['One size'],
  fabric:'Kundan stones set in gold-plated alloy', care:'Wipe with a soft cloth. Store flat in the ODEY navy box.',
  colors:[{n:'Gold',h:C.gold},{n:'Ivory',h:C.ivory}],
  shot:'Kundan choker and matching earrings laid on deep navy velvet, gold raking light, jewellery-grade macro.'}),
P({name:'Pearl & Gold Bracelet', cat:'accessories', sub:'Jewelry', price:7900, rating:4.6, reviews:47, tone:'ivory', sizes:['One size'],
  fabric:'Freshwater pearls with a gold-plated clasp', care:'Remove before washing. Keep away from fragrance.',
  colors:[{n:'Pearl',h:C.white},{n:'Gold',h:C.gold}],
  shot:'Pearl and gold bracelet on a wrist, ivory background, shallow depth of field.'}),
P({name:'ODEY Classic Gold Wristwatch', cat:'accessories', sub:'Wristwatches', price:32000, rating:4.8, reviews:71, tone:'gold', sizes:['One size'], isNew:true,
  fabric:'Gold-tone stainless steel, sapphire glass, 3 ATM', care:'Not for swimming. Service every two years.',
  colors:[{n:'Gold',h:C.gold},{n:'Bronze',h:C.bronze}],
  shot:'Gold wristwatch on ivory stone, 45-degree hero angle, crisp dial detail, single soft highlight across the crystal.'}),
P({name:'ODEY Navy Dial Chronograph', cat:'accessories', sub:'Wristwatches', price:38500, was:44000, rating:4.9, reviews:44, tone:'navy', sizes:['One size'], best:true,
  fabric:'Navy sunray dial, leather strap, 5 ATM', care:'Keep the leather strap dry.',
  colors:[{n:'Navy',h:C.navy},{n:'Charcoal',h:C.charcoal}],
  shot:'Navy-dial chronograph on dark stone, gold reflections on the bezel, dramatic product lighting.'}),
P({name:'ODEY Bronze Minimal Watch', cat:'accessories', sub:'Wristwatches', price:26900, rating:4.6, reviews:36, tone:'bronze', sizes:['One size'],
  fabric:'Bronze-tone case, mesh bracelet, 3 ATM', care:'Wipe the case with a dry cloth.',
  colors:[{n:'Bronze',h:C.bronze},{n:'Gold',h:C.gold}],
  shot:'Minimal bronze watch standing upright on a bronze plinth, soft gradient background.'}),
P({name:'Oud Royale Eau de Parfum', cat:'accessories', sub:'Perfumes', price:12900, rating:4.9, reviews:203, tone:'navy', sizes:['50ml','100ml'], best:true,
  fabric:'Oud, saffron, amber and sandalwood — 100ml', care:'Store away from heat and direct sunlight.',
  colors:[{n:'Navy',h:C.navy},{n:'Gold',h:C.gold}],
  shot:'Navy and gold fragrance bottle on dark marble, oud chips and saffron threads beside it, moody product light.'}),
P({name:'Ivory Musk Eau de Parfum', cat:'accessories', sub:'Perfumes', price:9900, rating:4.7, reviews:156, tone:'ivory', sizes:['50ml','100ml'],
  fabric:'White musk, jasmine and cedar — 100ml', care:'Store away from heat and direct sunlight.',
  colors:[{n:'Ivory',h:C.ivory},{n:'Gold',h:C.gold}],
  shot:'Ivory frosted fragrance bottle on soft ivory fabric, jasmine sprigs, high-key product light.'}),
P({name:'Navy Amber Eau de Parfum', cat:'accessories', sub:'Perfumes', price:11500, rating:4.7, reviews:89, tone:'navy', sizes:['50ml','100ml'], isNew:true,
  fabric:'Amber, bergamot and vetiver — 100ml', care:'Store away from heat and direct sunlight.',
  colors:[{n:'Navy',h:C.navy},{n:'Bronze',h:C.bronze}],
  shot:'Navy fragrance bottle with a gold cap, amber resin scattered on the surface, warm directional light.'}),
P({name:'Embroidered Silk Dupatta', cat:'accessories', sub:'Fashion Accessories', price:6500, rating:4.6, reviews:67, tone:'bronze', sizes:['One size'],
  fabric:'Silk with hand-embroidered borders', care:'Dry clean only.',
  colors:[{n:'Bronze',h:C.bronze},{n:'Ivory',h:C.ivory}],
  shot:'Silk dupatta in mid-air against a plain wall, embroidery border catching the light.'}),
P({name:'Handcrafted Leather Belt', cat:'accessories', sub:'Fashion Accessories', price:5900, rating:4.5, reviews:52, tone:'char', sizes:['32','34','36','38','40'],
  fabric:'Full-grain leather with a gold-tone buckle', care:'Condition the leather twice a year.',
  colors:[{n:'Charcoal',h:C.charcoal},{n:'Bronze',h:C.bronze}],
  shot:'Full-grain leather belt coiled on charcoal stone, gold buckle in focus.'}),
P({name:'Gold-Trim Evening Clutch', cat:'accessories', sub:'Fashion Accessories', price:8500, rating:4.7, reviews:41, tone:'gold', sizes:['One size'], isNew:true,
  fabric:'Satin body with a gold-tone frame', care:'Spot clean only.',
  colors:[{n:'Gold',h:C.gold},{n:'Navy',h:C.navy}],
  shot:'Evening clutch held by a model in formal shalwar kameez, plus a clean product shot on ivory.'}),
];

const byId = id => PRODUCTS.find(p=>p.id===id);
const inCat = c => PRODUCTS.filter(p=>p.cat===c);

/* ===================== STATE ===================== */
const store = {
  get(k,d){ try{ const v=localStorage.getItem('odey:'+k); return v?JSON.parse(v):d; }catch(e){ return d; } },
  set(k,v){ try{ localStorage.setItem('odey:'+k,JSON.stringify(v)); }catch(e){} }
};
const S = {
  cart: store.get('cart',[]),
  wish: store.get('wish',[]),
  user: store.get('user',null),
  orders: store.get('orders',[]),
  addresses: store.get('addresses',[]),
  save(){ store.set('cart',S.cart); store.set('wish',S.wish); store.set('user',S.user); store.set('orders',S.orders); store.set('addresses',S.addresses); }
};
const SHIPPING = 350, FREE_OVER = 15000;
const cartCount = () => S.cart.reduce((n,l)=>n+l.qty,0);
const subtotal  = () => S.cart.reduce((n,l)=>{const p=byId(l.id); return n + (p?p.price*l.qty:0);},0);
let promo = store.get('promo',null);
const discount = () => promo ? Math.round(subtotal()*promo.pct) : 0;
const shipCost = () => S.cart.length===0 ? 0 : (subtotal()-discount() >= FREE_OVER ? 0 : SHIPPING);
const total = () => Math.max(0, subtotal()-discount()+shipCost());

function toast(msg){
  const t=document.getElementById('toast');
  t.innerHTML = ic('check')+`<span>${msg}</span>`;
  t.classList.add('show');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),2600);
}

/* ===================== SHELL ===================== */
function header(){
  const c = cartCount(), w = S.wish.length;
  const navLinks = [['#/','Home'],...CATEGORIES.map(c=>['#/shop/'+c.id,c.name.toUpperCase()]),['#/shop/new','New Arrivals'],['#/shop/sale','Sale']];
  return `
  <div class="announce">Complimentary delivery across Pakistan on orders over <b>PKR 15,000</b> &nbsp;·&nbsp; Easy 14-day returns</div>
  <header class="hdr" id="hdr">
    <div class="hdr__bar">
      <button class="iconbtn burger" id="burger" aria-label="Open menu">${ic('menu')}</button>
      ${logo()}
      <nav class="hdr__nav">
        ${navLinks.map(([h,t])=>`<a href="${h}" class="${t==='Sale'?'sale':''}">${t.toUpperCase()}</a>`).join('')}
      </nav>
      <div class="hdr__act">
        <button class="iconbtn" id="searchBtn" aria-label="Search">${ic('search')}</button>
        <a class="iconbtn acctbtn" href="#/account" aria-label="Account">${ic('user')}</a>
        <a class="iconbtn wishbtn" href="#/wishlist" aria-label="Wishlist">${ic('heart')}<span class="badge ${w?'show':''}" id="wishBadge">${w}</span></a>
        <button class="iconbtn" id="cartBtn" aria-label="Shopping bag">${ic('bag')}<span class="badge ${c?'show':''}" id="cartBadge">${c}</span></button>
      </div>
    </div>
  </header>

  <nav class="mnav" id="mnav" aria-label="Mobile">
    <div class="mnav__top">${logo()}<button class="iconbtn" id="mclose" aria-label="Close menu">${ic('close')}</button></div>
    ${navLinks.map(([h,t])=>`<a class="ml" href="${h}">${t}</a>`).join('')}
    <div class="mnav__sub">
      <a href="#/account">My account</a>
      <a href="#/wishlist">Wishlist (${w})</a>
      <a href="#/account/track">Track an order</a>
    </div>
  </nav>`;
}

function searchOverlay(){
  return `<div class="search" id="search">
    <div class="search__in">
      <div class="search__f">
        ${ic('search')}
        <input id="sInput" type="search" placeholder="Search for shalwar kameez, watches, perfume…" aria-label="Search products">
        <button class="iconbtn" id="sClose" aria-label="Close search" style="color:var(--navy)">${ic('close')}</button>
      </div>
      <div class="search__res">
        <div class="sugg">
          ${['Shalwar Kameez',"Men's Shalwar Kameez","Women's Shalwar Kameez",'Watches','Jewelry','Perfumes','Kids Clothing']
            .map(s=>`<button data-q="${s}">${s}</button>`).join('')}
        </div>
        <div id="sOut"></div>
      </div>
    </div>
  </div>`;
}

function cartDrawer(){
  return `<aside class="drawer" id="drawer" aria-label="Shopping bag">
    <div class="drawer__h"><h3>YOUR BAG</h3><button class="iconbtn" id="dClose" aria-label="Close bag" style="color:var(--navy)">${ic('close')}</button></div>
    <div class="drawer__b" id="dBody"></div>
    <div class="drawer__f" id="dFoot"></div>
  </aside>`;
}

function footer(){
  return `<footer class="ftr">
    <div class="wrap">
      <div class="ftr__top">
        <div>
          ${logo('logo--lg')}
          <p class="about">ODEY Fashion is a Pakistani house built on authentic tailoring — shalwar kameez cut to traditional proportion, alongside jewelry, wristwatches and fragrance made to the same standard.</p>
        </div>
        <div><h5>SHOP</h5><ul>
          ${CATEGORIES.map(c=>`<li><a href="#/shop/${c.id}">${c.name}</a></li>`).join('')}
          <li><a href="#/shop/new">New Arrivals</a></li><li><a href="#/shop/sale">Sale</a></li></ul></div>
        <div><h5>CUSTOMER CARE</h5><ul>
          <li><a href="#/page/contact">Contact us</a></li><li><a href="#/page/faqs">FAQs</a></li>
          <li><a href="#/page/shipping">Shipping</a></li><li><a href="#/page/returns">Returns &amp; exchanges</a></li>
          <li><a href="#/page/size-guide">Size guide</a></li><li><a href="#/account/track">Track order</a></li></ul></div>
        <div><h5>ABOUT</h5><ul>
          <li><a href="#/page/story">Our story</a></li><li><a href="#/page/about">About ODEY</a></li>
          <li><a href="#/page/careers">Careers</a></li>
          <li><a href="#/page/privacy">Privacy policy</a></li><li><a href="#/page/terms">Terms &amp; conditions</a></li>
          <li><a href="#/page/refund">Refund policy</a></li></ul></div>
      </div>

      <div class="news">
        <div><h3>JOIN THE ODEY WORLD</h3><p>Be the first to discover new collections, exclusive offers and ODEY stories.</p></div>
        <form id="newsForm"><input type="email" required placeholder="Enter your email" aria-label="Email address"><button class="btn btn--gold">SUBSCRIBE</button></form>
      </div>

      <div class="ftr__btm">
        <span>© ${new Date().getFullYear()} ODEY Fashion. Lahore, Pakistan.</span>
        <div class="social">
          <a href="#/page/contact" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4zm0 10.9A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3zm6.9-11.1a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z"/></svg></a>
          <a href="#/page/contact" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6A22 22 0 0 0 14.3 4.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V14h2.7v8z"/></svg></a>
          <a href="#/page/contact" aria-label="TikTok"><svg viewBox="0 0 24 24"><path d="M16.5 3h-2.9v12.2a2.5 2.5 0 1 1-2.1-2.47V9.75A5.6 5.6 0 1 0 16.7 15.3V9.6a6.6 6.6 0 0 0 3.8 1.2V7.9a3.9 3.9 0 0 1-4-4.9z"/></svg></a>
          <a href="#/page/contact" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.75-1.75C18.25 5 12 5 12 5s-6.25 0-7.85.45A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.75 1.75C5.75 19 12 19 12 19s6.25 0 7.85-.45a2.5 2.5 0 0 0 1.75-1.75A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.1V8.9l5.2 3.1z"/></svg></a>
        </div>
        <span>Prices in PKR · Cash on delivery available nationwide</span>
      </div>
    </div>
  </footer>`;
}

/* ===================== CARD ===================== */
function card(p){
  const off = p.was ? Math.round((1-p.price/p.was)*100) : 0;
  const on = S.wish.includes(p.id);
  return `<article class="card" data-card="${p.id}">
    <div class="card__media">
      ${slot(p.tone, p.name, p.shot, 'slot--top', p.icon)}
      <a class="card__link" href="#/product/${p.id}" aria-label="${p.name}"></a>
      <div class="tags">
        ${p.isNew?'<span class="tag tag--gold">NEW</span>':''}
        ${off?`<span class="tag">−${off}%</span>`:''}
        ${p.best&&!p.isNew?'<span class="tag tag--ivory">BEST SELLER</span>':''}
      </div>
      <div class="card__hov">
        <button data-qv="${p.id}">QUICK VIEW</button>
        <button data-add="${p.id}">ADD TO BAG</button>
      </div>
    </div>
    <button class="wish ${on?'on':''}" data-wish="${p.id}" aria-label="Save ${p.name} to wishlist">${ic('heart')}</button>
    <div class="card__body">
      <span class="card__sub">${p.sub.toUpperCase()}</span>
      <a class="card__name" href="#/product/${p.id}">${p.name}</a>
      ${stars(p.rating)}
      <div class="card__price">${PKR(p.price)} ${p.was?`<s>${PKR(p.was)}</s><em>SAVE ${PKR(p.was-p.price)}</em>`:''}</div>
    </div>
  </article>`;
}

/* ===================== HOME ===================== */
function home(){
  const menP = inCat('men').slice(0,4), womenP = inCat('women').slice(0,4),
        kidsP = inCat('kids').slice(0,4), newP = PRODUCTS.filter(p=>p.isNew).slice(0,8);
  const why = [
    ['gem','Authentic Pakistani fashion','Every shalwar kameez is cut to traditional proportion — full kameez, loose shalwar — by tailors in Lahore.'],
    ['leaf','Premium quality','Fabric sourced by weight and weave, then finished by hand. Each piece is checked twice before it ships.'],
    ['shield','Secure checkout','Card, bank transfer and mobile wallet, handled through encrypted gateways. Nothing is stored on our side.'],
    ['truck','Reliable delivery','2–4 working days across Pakistan, with tracking from the moment your order is confirmed.'],
    ['refresh','Easy returns','Fourteen days to change your mind. Unworn pieces, original packaging, collected from your door.'],
    ['chat','Customer support','Talk to a person on WhatsApp or by phone, 9am to 9pm, seven days a week.'],
  ];
  return `
  <section class="hero">
    <div class="hero__txt">
      <span class="kicker">AUTUMN COLLECTION — LAHORE</span>
      <h1>Timeless Pakistani Elegance</h1>
      <p>Discover refined fashion, accessories and fragrances curated by ODEY Fashion.</p>
      <div class="hero__btns">
        <a class="btn btn--primary" href="#/shop/men">SHOP MEN</a>
        <a class="btn btn--ghost" href="#/shop/women">SHOP WOMEN</a>
      </div>
    </div>
    <div class="hero__img">
      ${slot('navy','ODEY autumn campaign','Hero campaign frame: Pakistani model in authentic shalwar kameez — full-length kameez over loose traditional shalwar. Vertical crop, cinematic warm key with a gold rim light, deep navy set. Shot at 85mm, full body in frame so the shalwar reads clearly.','','menFig')}
      <div class="hero__meta">THE AUTUMN EDIT · 2026</div>
    </div>
  </section>

  <section class="sec sec--ivory">
    <div class="wrap edit">
      <div class="rv">
        <div class="rule"></div>
        <h2>The ODEY Edit</h2>
        <blockquote>Where Pakistani heritage meets contemporary elegance.</blockquote>
        <p class="lede">ODEY Fashion began with one conviction: that traditional Pakistani dress deserves the same craft, finish and presentation as any luxury house abroad. We cut shalwar kameez the way it has always been cut — a full kameez with proper side slits, a loose shalwar with real drape — and we make it in fabrics chosen for how they move.</p>
        <div class="cols">
          <div><h4>One house, one standard</h4><p>Menswear, womenswear, Little Odey, jewelry, wristwatches and fragrance — assembled so a whole look can be finished in a single order.</p></div>
          <div><h4>Made in Lahore</h4><p>Cut and stitched by tailors we work with directly, in workshops we visit, at wages we publish.</p></div>
        </div>
      </div>
      <div class="edit__img rv d2">
        ${slot('ivory','Atelier in Lahore','Atelier detail: hands pressing a kameez placket, tailor’s chalk and shears on the table, ivory fabric. Warm window light, documentary feel.','','scissors')}
      </div>
    </div>
  </section>

  <section class="sec">
    <div class="wrap">
      <div class="sechead rv"><div><div class="rule"></div><h2>Shop by category</h2><p>Four houses under one roof.</p></div>
      <a class="link-gold" href="#/shop/men">View everything</a></div>
      <div class="cats">
        ${CATEGORIES.map((c,i)=>`
          <a class="cat rv d${i}" href="#/shop/${c.id}">
            ${slot(c.tone,c.name,c.shot,'',c.icon)}
            <div class="cat__b"><h3>${c.name.toUpperCase()}</h3><span>${ic('chev')} Explore</span></div>
          </a>`).join('')}
      </div>
    </div>
  </section>

  <section class="sec sec--tight">
    <div class="wrap">
      <div class="sechead rv"><div><div class="rule"></div><h2>Men's Collection</h2><p>Authentic shalwar kameez, refined for the modern gentleman.</p></div>
      <a class="link-gold" href="#/shop/men">All menswear</a></div>
      <div class="grid">${menP.map(card).join('')}</div>
    </div>
  </section>

  <section class="sec sec--ivory">
    <div class="wrap">
      <div class="sechead rv"><div><div class="rule"></div><h2>Women's Collection</h2><p>Grace, tradition and contemporary Pakistani elegance.</p></div>
      <a class="link-gold" href="#/shop/women">All womenswear</a></div>
      <div class="grid">${womenP.map(card).join('')}</div>
    </div>
  </section>

  <section class="sec">
    <div class="wrap">
      <div class="sechead rv"><div><div class="rule"></div><h2>Little Odey</h2><p>Shalwar kameez, festive suits and Eid dressing for children.</p></div>
      <a class="link-gold" href="#/shop/kids">All kidswear</a></div>
      <div class="grid">${kidsP.map(card).join('')}</div>
    </div>
  </section>

  <section class="sec sec--navy">
    <div class="wrap">
      <div class="sechead rv"><div><div class="rule"></div><h2>Accessories</h2><p>Jewelry, wristwatches, fragrance and the pieces that finish a look.</p></div>
      <a class="link-gold" href="#/shop/accessories" style="color:var(--gold)">All accessories</a></div>
      <div class="acc">
        ${[['Jewelry','gold','Gold jhumkas, a kundan choker and pearl pieces arranged on navy velvet, jewellery-grade macro light.','jewelry'],
           ['Wristwatches','navy','Three ODEY watches — gold, navy dial, bronze — standing on stepped navy plinths.','watch'],
           ['Perfumes','bronze','Navy and gold fragrance bottles with oud chips and amber resin on dark marble.','perfume'],
           ['Fashion Accessories','ivory','Silk dupatta, leather belt and evening clutch laid flat on ivory linen, top-down.','belt']]
          .map(([n,t,s,ic],i)=>`<a class="acc__i rv d${i}" href="#/shop/accessories?sub=${encodeURIComponent(n)}">${slot(t,n,s,'',ic)}<b>${n}</b></a>`).join('')}
      </div>
    </div>
  </section>

  <section class="sec">
    <div class="wrap">
      <div class="sechead rv"><div><div class="rule"></div><h2>New arrivals</h2><p>Just landed from the workshop floor.</p></div>
      <a class="link-gold" href="#/shop/new">See all new</a></div>
      <div class="grid">${newP.map(card).join('')}</div>
    </div>
  </section>

  <section class="sec sec--ivory">
    <div class="wrap">
      <div class="sechead rv"><div><div class="rule"></div><h2>Why ODEY?</h2><p>Six reasons customers come back.</p></div></div>
      <div class="why">${why.map(([i,h,p])=>`<div class="why__i">${ic(i)}<h4>${h}</h4><p>${p}</p></div>`).join('')}</div>
    </div>
  </section>

  <section class="sec sec--navy">
    <div class="wrap">
      <div class="sechead rv"><div><div class="rule"></div><h2>The ODEY Experience</h2><p>Deep navy boxes, gold geometry, bronze garment bags and ivory hang tags — every order arrives ready to give.</p></div></div>
      <div class="pack">
        ${slot('navy','ODEY packaging','Hero packaging still: deep navy rigid box with the gold ODEY hanger emblem foiled on the lid, ribbon untied, ivory tissue showing.','p1','box')}
        ${slot('bronze','Bronze garment bag','Bronze garment bag hanging, gold zip pull, ODEY logo at the chest.','','bag')}
        ${slot('gold','Gold geometric detail','Macro of the gold geometric foil pattern on navy board, raking light.','','jewelry')}
        ${slot('ivory','Ivory hang tags','Ivory hang tags with navy print and gold thread, fanned on linen.','p4','box')}
      </div>
    </div>
  </section>`;
}

/* ===================== SHOP / LISTING ===================== */
const genderOf = p => p.cat==='accessories' ? 'Unisex' : ({men:'Men',women:'Women',kids:'Kids'})[p.cat];
const ALL_COLORS = [...new Set(PRODUCTS.flatMap(p=>p.colors.map(c=>c.n)))];
const ALL_SIZES  = [...new Set(PRODUCTS.flatMap(p=>p.sizes))];
const MAXP = Math.ceil(Math.max(...PRODUCTS.map(p=>p.price))/1000)*1000;

let F = {cats:[],gender:[],sizes:[],colors:[],max:MAXP,stockOnly:false,sort:'featured',sub:null};
const resetF = () => F = {cats:[],gender:[],sizes:[],colors:[],max:MAXP,stockOnly:false,sort:'featured',sub:null};

function applyFilters(base){
  let r = base.filter(p =>
    (!F.cats.length || F.cats.includes(p.cat)) &&
    (!F.gender.length || F.gender.includes(genderOf(p))) &&
    (!F.sizes.length || p.sizes.some(s=>F.sizes.includes(s))) &&
    (!F.colors.length || p.colors.some(c=>F.colors.includes(c.n))) &&
    (p.price <= F.max) &&
    (!F.stockOnly || p.stock>0) &&
    (!F.sub || p.sub===F.sub)
  );
  const s=F.sort;
  if(s==='price-asc') r=[...r].sort((a,b)=>a.price-b.price);
  if(s==='price-desc') r=[...r].sort((a,b)=>b.price-a.price);
  if(s==='newest') r=[...r].sort((a,b)=>(b.isNew?1:0)-(a.isNew?1:0));
  if(s==='best') r=[...r].sort((a,b)=>(b.best?1:0)-(a.best?1:0) || b.reviews-a.reviews);
  return r;
}

function shop(key,qs){
  let base=PRODUCTS, title='All products', sub='Everything in the ODEY house.', tone='ivory', shot='';
  const cat = CATEGORIES.find(c=>c.id===key);
  if(cat){ base=inCat(key); title=cat.name==='Kids'?'Little Odey':cat.name+"'s Collection"; if(key==='accessories')title='Accessories'; sub=cat.tag; tone=cat.tone; shot=cat.shot; }
  else if(key==='new'){ base=PRODUCTS.filter(p=>p.isNew); title='New Arrivals'; sub='The most recent pieces to leave the workshop.'; tone='navy';
    shot='New-arrivals banner: rail of freshly pressed shalwar kameez in ivory and navy, tailor’s hand adjusting a hanger.'; }
  else if(key==='sale'){ base=PRODUCTS.filter(p=>p.was); title='Sale'; sub='Selected pieces, reduced while stock lasts.'; tone='bronze';
    shot='Sale banner: folded shalwar kameez stacked on a bronze surface with an ivory hang tag on top.'; }

  if(qs && qs.get('sub')) F.sub = qs.get('sub');
  const res = applyFilters(base);
  const counts = c => base.filter(p=>p.cat===c).length;

  const chips = [
    ...F.cats.map(v=>['cats',v,CATEGORIES.find(c=>c.id===v).name]),
    ...F.gender.map(v=>['gender',v,v]),
    ...F.sizes.map(v=>['sizes',v,'Size '+v]),
    ...F.colors.map(v=>['colors',v,v]),
    ...(F.sub?[['sub',F.sub,F.sub]]:[]),
    ...(F.stockOnly?[['stockOnly',1,'In stock']]:[]),
    ...(F.max<MAXP?[['max',1,'Under '+PKR(F.max)]]:[]),
  ];

  return `
  <section style="position:relative;background:var(--navy);color:#fff">
    <div style="position:absolute;inset:0;opacity:.55">${slot(tone,title,shot||sub,'',cat?cat.icon:(key==='new'?'menFig':'box'))}</div>
    <div class="wrap" style="position:relative;padding-block:clamp(48px,7vw,92px)">
      <div class="rule"></div>
      <h1 style="font-size:clamp(2rem,4.4vw,3.4rem)">${title}</h1>
      <p style="color:rgba(255,255,255,.78);max-width:52ch;font-family:var(--serif-alt);font-size:1.1rem;margin-top:10px">${sub}</p>
    </div>
  </section>

  <section class="sec sec--tight"><div class="wrap shop">
    <aside>
      <button class="btn btn--line btn--sm filter-toggle" id="fToggle" style="margin-bottom:14px">FILTERS</button>
      <div class="filters" id="filters">
        <div class="fgroup"><h4>CATEGORY</h4>
          ${CATEGORIES.map(c=>`<label><input type="checkbox" data-f="cats" value="${c.id}" ${F.cats.includes(c.id)?'checked':''}>${c.name} <span style="margin-left:auto;color:var(--bronze);font-size:.76rem">${counts(c.id)}</span></label>`).join('')}
        </div>
        <div class="fgroup"><h4>GENDER</h4>
          ${['Men','Women','Kids','Unisex'].map(g=>`<label><input type="checkbox" data-f="gender" value="${g}" ${F.gender.includes(g)?'checked':''}>${g}</label>`).join('')}
        </div>
        <div class="fgroup"><h4>SIZE</h4>
          <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${ALL_SIZES.map(s=>`<label style="border:1px solid ${F.sizes.includes(s)?'var(--gold)':'var(--line)'};padding:6px 10px;font-size:.76rem"><input type="checkbox" data-f="sizes" value="${s}" ${F.sizes.includes(s)?'checked':''} style="display:none">${s}</label>`).join('')}
          </div>
        </div>
        <div class="fgroup"><h4>COLOUR</h4>
          ${ALL_COLORS.slice(0,10).map(c=>`<label><input type="checkbox" data-f="colors" value="${c}" ${F.colors.includes(c)?'checked':''}>${c}</label>`).join('')}
        </div>
        <div class="fgroup"><h4>PRICE — UP TO ${PKR(F.max)}</h4>
          <input type="range" id="priceR" min="3000" max="${MAXP}" step="1000" value="${F.max}">
        </div>
        <div class="fgroup"><h4>AVAILABILITY</h4>
          <label><input type="checkbox" data-f="stockOnly" ${F.stockOnly?'checked':''}>In stock only</label>
        </div>
        <button class="btn btn--line btn--sm btn--full" id="fClear" style="margin-top:18px">CLEAR ALL</button>
      </div>
    </aside>

    <div>
      <div class="shopbar">
        <span class="cnt">${res.length} ${res.length===1?'piece':'pieces'}</span>
        <label style="display:flex;align-items:center;gap:10px;font-size:.72rem;letter-spacing:.14em;color:var(--bronze)">SORT
          <select id="sortSel">
            ${[['featured','Featured'],['newest','Newest'],['price-asc','Price: low to high'],['price-desc','Price: high to low'],['best','Best selling']]
              .map(([v,l])=>`<option value="${v}" ${F.sort===v?'selected':''}>${l}</option>`).join('')}
          </select>
        </label>
      </div>
      ${chips.length?`<div class="fchips">${chips.map(([k,v,l])=>`<span class="chip">${l}<button data-chip="${k}" data-val="${v}" aria-label="Remove ${l}">×</button></span>`).join('')}</div>`:''}
      ${res.length? `<div class="grid">${res.map(card).join('')}</div>`
        : `<div class="empty"><h2>Nothing matches yet</h2><p>Loosen a filter or two and the rail will fill back up.</p><button class="btn btn--primary" id="fClear2">CLEAR FILTERS</button></div>`}
    </div>
  </div></section>`;
}

/* ===================== PRODUCT PAGE ===================== */
let PDP = {img:0,size:null,color:0,qty:1};
const galleryShots = p => [
  ['Front — full length', p.shot],
  ['Fabric detail', `Macro of the ${p.fabric.toLowerCase()} — weave, stitch line and any embroidery, raking light.`],
  ['Back / movement', p.cat==='accessories' ? 'Second angle: reverse and clasp or cap detail on ivory.' : 'Model walking away, full length, so the fall of the shalwar and the kameez hem are both visible.'],
  ['Styled in context', p.cat==='accessories' ? 'Worn in context alongside a shalwar kameez look.' : 'Styled with ODEY accessories — watch, fragrance, dupatta — in a warm interior.'],
];

function pdp(id){
  const p = byId(id); if(!p) return notFound();
  const g = galleryShots(p);
  const off = p.was ? Math.round((1-p.price/p.was)*100) : 0;
  const rel = PRODUCTS.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,4);
  const apparel = p.cat!=='accessories' && p.kameez;
  const low = p.stock<=6;
  const wished = S.wish.includes(p.id);

  return `<section class="sec sec--tight"><div class="wrap">
    <div class="crumbs"><a href="#/">Home</a> / <a href="#/shop/${p.cat}">${CATEGORIES.find(c=>c.id===p.cat).name}</a> / ${p.sub}</div>
    <div class="pdp">
      <div class="gal">
        <div class="gal__thumbs">
          ${g.map((s,i)=>`<button data-img="${i}" class="${i===PDP.img?'on':''}" aria-label="${s[0]}">${slot(p.tone,s[0],s[0],'',p.icon)}</button>`).join('')}
        </div>
        <div class="gal__main" id="galMain">
          ${slot(p.tone,p.name,g[PDP.img][1],'',p.icon)}
          <span class="gal__zoomhint">TAP TO ZOOM</span>
        </div>
      </div>

      <div>
        <span class="card__sub">${p.sub.toUpperCase()} · ${genderOf(p).toUpperCase()}</span>
        <h1>${p.name}</h1>
        ${stars(p.rating)} <span style="font-size:.8rem;color:var(--navy-soft)">${p.reviews} reviews</span>
        <div class="price">${PKR(p.price)} ${p.was?`<s>${PKR(p.was)}</s><em>${off}% OFF</em>`:''}</div>
        <div class="stock ${low?'low':''}"><i></i>${p.stock>0?(low?`Only ${p.stock} left in stock`:'In stock — ships in 24 hours'):'Out of stock'}</div>
        <p class="lede" style="font-size:1rem">${p.fabric}. ${apparel? 'Cut as a complete shalwar kameez — full kameez with a loose traditional shalwar, made in Lahore.' : 'Finished and boxed in ODEY navy and gold.'}</p>

        <div class="opt">
          <div class="opt__h"><span>SIZE${PDP.size?' — '+PDP.size:''}</span><a href="#/page/size-guide">Size guide</a></div>
          <div class="sizes">${p.sizes.map(s=>`<button data-size="${s}" class="${PDP.size===s?'on':''}">${s}</button>`).join('')}</div>
        </div>

        <div class="opt">
          <div class="opt__h"><span>COLOUR — ${p.colors[PDP.color].n.toUpperCase()}</span></div>
          <div class="swatches">${p.colors.map((c,i)=>`<button class="swatch ${i===PDP.color?'on':''}" data-color="${i}" style="background:${c.h}" aria-label="${c.n}"></button>`).join('')}</div>
        </div>

        <div class="opt">
          <div class="opt__h"><span>QUANTITY</span></div>
          <div class="qty"><button data-q="-1" aria-label="Decrease">−</button><span id="qtyV">${PDP.qty}</span><button data-q="1" aria-label="Increase">+</button></div>
        </div>

        <div class="pdp__cta">
          <button class="btn btn--primary" id="pAdd">ADD TO BAG</button>
          <button class="btn btn--line" id="pBuy">BUY NOW</button>
        </div>
        <button class="btn btn--ghost btn--full btn--sm" id="pWish">${wished?'SAVED TO WISHLIST':'ADD TO WISHLIST'}</button>

        <div style="margin-top:32px">
          ${apparel?`
          <details class="acc-item" open><summary>DESCRIPTION</summary><div class="in">
            <dl><dt>Fabric</dt><dd>${p.fabric}</dd>
            <dt>Kameez</dt><dd>${p.kameez}</dd>
            <dt>Shalwar</dt><dd>${p.shalwar}</dd>
            <dt>Made in</dt><dd>Lahore, Pakistan</dd></dl>
          </div></details>`:`
          <details class="acc-item" open><summary>DESCRIPTION</summary><div class="in">
            <dl><dt>Details</dt><dd>${p.fabric}</dd><dt>Made in</dt><dd>Finished and boxed in Lahore, Pakistan</dd></dl>
          </div></details>`}
          <details class="acc-item"><summary>SIZE &amp; FIT</summary><div class="in">
            ${apparel?'Cut to traditional Pakistani proportion. If you are between sizes, take the larger — the kameez is meant to skim, not cling, and the shalwar should fall in a full straight line to the ankle. Full measurement chart on the size guide page.'
                     :'One size unless stated. Measurements are listed on the size guide page.'}
          </div></details>
          <details class="acc-item"><summary>CARE</summary><div class="in">${p.care}</div></details>
          <details class="acc-item"><summary>DELIVERY &amp; RETURNS</summary><div class="in">
            Dispatched within 24 hours. 2–4 working days across Pakistan. Free over ${PKR(FREE_OVER)}, otherwise ${PKR(SHIPPING)}. Cash on delivery available. Fourteen days to return anything unworn.
          </div></details>
        </div>
      </div>
    </div>

    <div style="margin-top:clamp(50px,7vw,90px)">
      <div class="sechead"><div><div class="rule"></div><h2>You may also like</h2></div></div>
      <div class="grid">${rel.map(card).join('')}</div>
    </div>
  </div></section>`;
}

function quickView(p){
  return `<div class="modal" id="qv"><div class="modal__in">
    <button class="modal__x" id="qvX" aria-label="Close">${ic('close')}</button>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0" class="qvgrid">
      <div style="position:relative;aspect-ratio:3/4;min-height:300px">${slot(p.tone,p.name,p.shot,'',p.icon)}</div>
      <div style="padding:clamp(24px,3vw,40px)">
        <span class="card__sub">${p.sub.toUpperCase()}</span>
        <h2 style="margin:8px 0 10px">${p.name}</h2>
        ${stars(p.rating)}
        <div class="price">${PKR(p.price)} ${p.was?`<s>${PKR(p.was)}</s>`:''}</div>
        <p style="color:var(--navy-soft);font-size:.92rem">${p.fabric}.</p>
        <div class="opt"><div class="opt__h"><span>SIZE</span></div>
          <div class="sizes" id="qvSizes">${p.sizes.map((s,i)=>`<button data-qsize="${s}" class="${i===0?'on':''}">${s}</button>`).join('')}</div></div>
        <button class="btn btn--primary btn--full" data-qadd="${p.id}">ADD TO BAG</button>
        <a class="btn btn--ghost btn--full btn--sm" style="margin-top:10px" href="#/product/${p.id}" id="qvFull">VIEW FULL DETAILS</a>
      </div>
    </div>
  </div></div>`;
}

/* ===================== CART ===================== */
function cartLine(l,i,compact){
  const p = byId(l.id); if(!p) return '';
  return `<div class="citem">
    <a class="citem__img" href="#/product/${p.id}">${slot(p.tone,p.name,p.shot,'',p.icon)}</a>
    <div>
      <h4>${p.name}</h4>
      <div class="meta">${l.size} · ${l.color}</div>
      <div class="qty"><button data-cq="${i}" data-d="-1" aria-label="Decrease">−</button><span>${l.qty}</span><button data-cq="${i}" data-d="1" aria-label="Increase">+</button></div>
      <br><button class="rm" data-rm="${i}">REMOVE</button>
    </div>
    <div class="citem__price" style="text-align:right;font-family:var(--serif);font-size:1.05rem">${PKR(p.price*l.qty)}</div>
  </div>`;
}

function summaryBox(cta=true){
  const d=discount();
  return `<div class="summary">
    <h3>ORDER SUMMARY</h3>
    <div class="srow"><span>Subtotal</span><span>${PKR(subtotal())}</span></div>
    ${d?`<div class="srow disc"><span>Discount (${promo.code})</span><span>−${PKR(d)}</span></div>`:''}
    <div class="srow"><span>Shipping</span><span>${shipCost()?PKR(shipCost()):'Free'}</span></div>
    <div class="srow tot"><span>Total</span><span>${PKR(total())}</span></div>
    <div class="promo"><input id="promoIn" placeholder="Promo code" aria-label="Promo code"><button class="btn btn--line btn--sm" id="promoBtn">APPLY</button></div>
    <p style="font-size:.74rem;color:var(--navy-soft);margin:6px 0 0">Try <b>ODEY10</b> for 10% off.</p>
    ${cta?`<a class="btn btn--primary btn--full" style="margin-top:20px" href="#/checkout">PROCEED TO CHECKOUT</a>
    <a class="btn btn--ghost btn--full btn--sm" style="margin-top:10px" href="#/shop/men">CONTINUE SHOPPING</a>`:''}
  </div>`;
}

function cartPage(){
  if(!S.cart.length) return `<section class="sec"><div class="empty">
    <h2>Your bag is empty</h2><p>Start with the men's or women's collection — every piece ships from Lahore within 24 hours.</p>
    <a class="btn btn--primary" href="#/shop/men">SHOP MEN</a> <a class="btn btn--ghost" href="#/shop/women">SHOP WOMEN</a></div></section>`;
  return `<section class="sec sec--tight"><div class="wrap">
    <div class="sechead"><div><div class="rule"></div><h2>Shopping bag</h2><p>${cartCount()} item${cartCount()>1?'s':''}</p></div></div>
    <div class="cartpage"><div>${S.cart.map(cartLine).join('')}</div>${summaryBox()}</div>
  </div></section>`;
}

/* ===================== CHECKOUT ===================== */
let CK = {step:0, info:{}, ship:'standard', pay:'cod', order:null};
const PAYMENTS = [
  ['cod','cash','Cash on delivery','Pay the courier when your order arrives.'],
  ['card','card','Credit card','Visa and Mastercard, processed securely.'],
  ['debit','card','Debit card','Any Pakistani bank debit card.'],
  ['bank','bank','Bank transfer','Transfer to our account and upload the slip.'],
  ['wallet','wallet','Mobile wallet','JazzCash, Easypaisa or SadaPay.'],
];

function checkout(){
  if(!S.cart.length && CK.step<3) return cartPage();
  const labels=['INFORMATION','DELIVERY','PAYMENT','CONFIRMATION'];
  const steps=`<div class="steps">${labels.map((l,i)=>`<div class="step ${i===CK.step?'on':''} ${i<CK.step?'done':''}"><i>${i<CK.step?'✓':i+1}</i>${l}</div>`).join('')}</div>`;
  let body='';

  if(CK.step===0) body=`
    <form id="ckInfo">
      <h3 style="margin-bottom:18px">Contact</h3>
      <label class="field"><span>FULL NAME</span><input name="name" required value="${CK.info.name||S.user?.name||''}"><b class="msg">Enter your full name</b></label>
      <div class="row2">
        <label class="field"><span>EMAIL</span><input name="email" type="email" required value="${CK.info.email||S.user?.email||''}"><b class="msg">Enter a valid email</b></label>
        <label class="field"><span>PHONE NUMBER</span><input name="phone" required placeholder="03XX XXXXXXX" value="${CK.info.phone||''}"><b class="msg">Enter your phone number</b></label>
      </div>
      <h3 style="margin:28px 0 18px">Delivery address</h3>
      <label class="field"><span>HOUSE / STREET</span><input name="street" required value="${CK.info.street||''}"><b class="msg">Required</b></label>
      <div class="row2">
        <label class="field"><span>AREA / SECTOR</span><input name="area" required value="${CK.info.area||''}"><b class="msg">Required</b></label>
        <label class="field"><span>CITY</span><input name="city" required value="${CK.info.city||''}"><b class="msg">Required</b></label>
      </div>
      <div class="row2">
        <label class="field"><span>PROVINCE</span><select name="province">
          ${['Punjab','Sindh','Khyber Pakhtunkhwa','Balochistan','Islamabad Capital Territory','Gilgit-Baltistan','Azad Jammu & Kashmir']
            .map(p=>`<option ${CK.info.province===p?'selected':''}>${p}</option>`).join('')}</select></label>
        <label class="field"><span>POSTAL CODE</span><input name="postal" value="${CK.info.postal||''}"></label>
      </div>
      <button class="btn btn--primary btn--full">CONTINUE TO DELIVERY</button>
    </form>`;

  if(CK.step===1) body=`
    <h3 style="margin-bottom:18px">Delivery method</h3>
    <label class="paycard ${CK.ship==='standard'?'on':''}"><input type="radio" name="ship" value="standard" ${CK.ship==='standard'?'checked':''}>
      <div><b>Standard — 2 to 4 working days</b><span>${shipCost()?PKR(SHIPPING):'Free on this order'}</span></div>${ic('truck')}</label>
    <label class="paycard ${CK.ship==='express'?'on':''}"><input type="radio" name="ship" value="express" ${CK.ship==='express'?'checked':''}>
      <div><b>Express — next working day</b><span>${PKR(700)}, major cities only</span></div>${ic('box')}</label>
    <div class="note">Delivering to ${CK.info.street||'—'}, ${CK.info.area||''} ${CK.info.city||''}. <a href="#" class="link-gold" id="ckBack0">Change</a></div>
    <button class="btn btn--primary btn--full" id="ckToPay">CONTINUE TO PAYMENT</button>`;

  if(CK.step===2) body=`
    <h3 style="margin-bottom:18px">Payment method</h3>
    ${PAYMENTS.map(([v,i,t,d])=>`<label class="paycard ${CK.pay===v?'on':''}"><input type="radio" name="pay" value="${v}" ${CK.pay===v?'checked':''}>
      <div><b>${t}</b><span>${d}</span></div>${ic(i)}</label>`).join('')}
    ${CK.pay==='card'||CK.pay==='debit'?`
      <div style="border:1px solid var(--line);padding:20px;margin-top:6px">
        <div class="row2">
          <label class="field"><span>CARD NUMBER</span><input inputmode="numeric" placeholder="•••• •••• •••• ••••" disabled></label>
          <label class="field"><span>NAME ON CARD</span><input disabled placeholder="As printed"></label>
        </div>
        <div class="row2">
          <label class="field"><span>EXPIRY</span><input disabled placeholder="MM / YY"></label>
          <label class="field"><span>CVC</span><input disabled placeholder="•••"></label>
        </div>
        <p style="font-size:.76rem;color:var(--navy-soft);margin:0">Card fields are switched off in this demonstration. The form is wired so a live gateway can take over these inputs without changing the layout.</p>
      </div>`:''}
    ${CK.pay==='bank'?`<div class="note"><b>ODEY Fashion</b> · Meezan Bank · IBAN shown on the confirmation screen. Upload your slip after placing the order.</div>`:''}
    ${CK.pay==='wallet'?`<div class="note">You will be redirected to your wallet app to approve ${PKR(total())}.</div>`:''}
    <div class="note">No real payment details are collected or stored anywhere in this demonstration.</div>
    <button class="btn btn--primary btn--full" id="ckPlace">PLACE ORDER · ${PKR(total())}</button>`;

  if(CK.step===3){
    const o = CK.order;
    body = `<div style="text-align:center;max-width:52ch;margin:0 auto">
      ${logo('logo--lg logo--stack')}
      <h2 style="margin:26px 0 10px">Thank you, ${o.name.split(' ')[0]}</h2>
      <p style="color:var(--navy-soft)">Order <b>${o.id}</b> is confirmed. A receipt is on its way to ${o.email}, and we will message ${o.phone} when the courier collects.</p>
      <div style="background:var(--ivory);border:1px solid var(--line-gold);padding:24px;margin:28px 0;text-align:left">
        ${o.items.map(l=>{const p=byId(l.id);return `<div class="srow"><span>${p.name} · ${l.size} × ${l.qty}</span><span>${PKR(p.price*l.qty)}</span></div>`;}).join('')}
        <div class="srow tot"><span>Paid by ${PAYMENTS.find(x=>x[0]===o.pay)[2].toLowerCase()}</span><span>${PKR(o.total)}</span></div>
      </div>
      <a class="btn btn--primary" href="#/account/track">TRACK THIS ORDER</a>
      <a class="btn btn--ghost" href="#/shop/men">CONTINUE SHOPPING</a>
    </div>`;
    return `<section class="sec sec--tight"><div class="wrap">${steps}${body}</div></section>`;
  }

  return `<section class="sec sec--tight"><div class="wrap">
    ${steps}
    <div class="ck"><div>${body}</div>${summaryBox(false)}</div>
  </div></section>`;
}

/* ===================== AUTH ===================== */
function signin(){
  return `<div class="auth">
    <div class="auth__side">${slot('navy','ODEY campaign','Sign-in panel image: Pakistani model in navy shalwar kameez, seated, three-quarter view, deep navy set with a single gold light.','','womenFig')}</div>
    <div class="auth__form">
      ${logo('logo--lg')}
      <h1 style="margin-top:28px">Welcome back to ODEY</h1>
      <p>Sign in to see your orders, saved addresses and wishlist.</p>
      <form id="siForm">
        <label class="field"><span>EMAIL OR PHONE</span><input name="id" required><b class="msg">Enter your email or phone number</b></label>
        <label class="field"><span>PASSWORD</span><input name="pw" type="password" required minlength="6"><b class="msg">At least 6 characters</b></label>
        <div style="display:flex;justify-content:space-between;align-items:center;margin:4px 0 24px;flex-wrap:wrap;gap:12px">
          <label class="check"><input type="checkbox" name="remember" checked>Remember me</label>
          <a class="link-gold" href="#/page/reset" style="font-size:.85rem">Forgot password?</a>
        </div>
        <button class="btn btn--primary btn--full">SIGN IN</button>
      </form>
      <p style="margin-top:22px;font-size:.9rem;color:var(--navy-soft)">Don't have an account? <a class="link-gold" href="#/signup">Create one</a></p>
    </div>
  </div>`;
}

function signup(){
  return `<div class="auth">
    <div class="auth__side">${slot('bronze','ODEY campaign','Sign-up panel image: Pakistani model in bronze embroidered shalwar kameez with dupatta, warm editorial light.','','dupatta')}</div>
    <div class="auth__form">
      ${logo('logo--lg')}
      <h1 style="margin-top:28px">Join the ODEY world</h1>
      <p>One account for orders, tracking, wishlist and early access to new collections.</p>
      <form id="suForm">
        <label class="field"><span>FULL NAME</span><input name="name" required><b class="msg">Enter your full name</b></label>
        <label class="field"><span>EMAIL</span><input name="email" type="email" required><b class="msg">Enter a valid email</b></label>
        <label class="field"><span>PHONE</span><input name="phone" required placeholder="03XX XXXXXXX"><b class="msg">Enter your phone number</b></label>
        <div class="row2">
          <label class="field"><span>PASSWORD</span><input name="pw" type="password" required minlength="6"><b class="msg">At least 6 characters</b></label>
          <label class="field"><span>CONFIRM PASSWORD</span><input name="pw2" type="password" required><b class="msg">Passwords do not match</b></label>
        </div>
        <label class="check" style="margin:6px 0 24px"><input type="checkbox" name="terms" required>I agree to the <a class="link-gold" href="#/page/terms">Terms &amp; Conditions</a> and <a class="link-gold" href="#/page/privacy">Privacy Policy</a>.</label>
        <button class="btn btn--primary btn--full">CREATE ACCOUNT</button>
      </form>
      <p style="margin-top:22px;font-size:.9rem;color:var(--navy-soft)">Already with us? <a class="link-gold" href="#/signin">Sign in</a></p>
    </div>
  </div>`;
}

/* ===================== ACCOUNT ===================== */
const TRACK_STAGES = [
  ['Order placed','We received your order and sent a confirmation.'],
  ['Order confirmed','Payment method verified and stock reserved.'],
  ['Processing','Pressed, tagged and packed in the Lahore studio.'],
  ['Shipped','Handed to the courier with a tracking number.'],
  ['Out for delivery','The rider has your parcel and is on the way.'],
  ['Delivered','Signed for at your address.'],
];

function acctNav(active){
  const items=[['profile','user','My profile'],['orders','box','My orders'],['track','truck','Track order'],
    ['wishlist','heart','Wishlist'],['addresses','pin','Saved addresses'],['payments','card','Payment methods'],
    ['notifications','bell','Notifications'],['settings','gear','Settings'],['logout','out','Log out']];
  return `<nav class="acctnav">${items.map(([k,i,l])=>
    `<a href="${k==='wishlist'?'#/wishlist':'#/account/'+k}" class="${active===k?'on':''}" ${k==='logout'?'id="logoutBtn"':''}>${ic(i)}${l}</a>`).join('')}</nav>`;
}

function account(sub){
  if(!S.user) return `<section class="sec"><div class="empty">
    <h2>Sign in to continue</h2><p>Your orders, addresses and wishlist live behind your ODEY account.</p>
    <a class="btn btn--primary" href="#/signin">SIGN IN</a> <a class="btn btn--ghost" href="#/signup">CREATE ACCOUNT</a></div></section>`;
  sub = sub||'profile';
  let panel='';

  if(sub==='profile') panel=`<div class="panel">
    <h2>My profile</h2><p class="sub">Keep your details current so deliveries reach you first time.</p>
    <form id="profForm">
      <div class="row2">
        <label class="field"><span>FULL NAME</span><input name="name" value="${S.user.name}"></label>
        <label class="field"><span>EMAIL</span><input name="email" type="email" value="${S.user.email}"></label>
      </div>
      <div class="row2">
        <label class="field"><span>PHONE</span><input name="phone" value="${S.user.phone||''}"></label>
        <label class="field"><span>CITY</span><input name="city" value="${S.user.city||''}"></label>
      </div>
      <button class="btn btn--primary">SAVE CHANGES</button>
    </form></div>`;

  if(sub==='orders') panel=`<div class="panel">
    <h2>My orders</h2><p class="sub">${S.orders.length?'Everything you have ordered from ODEY.':'No orders yet.'}</p>
    ${S.orders.length? S.orders.map(o=>`<div class="orow">
        <div><b>${o.id}</b><div class="m">${o.date} · ${o.items.reduce((n,l)=>n+l.qty,0)} item(s) · ${PKR(o.total)}</div></div>
        <div style="display:flex;gap:10px;align-items:center"><span class="pill ${o.stage<5?'pill--live':''}">${TRACK_STAGES[o.stage][0].toUpperCase()}</span>
        <a class="btn btn--line btn--sm" href="#/account/track">TRACK</a></div>
      </div>`).join('')
      : `<p style="color:var(--navy-soft)">When you place an order it will appear here with live tracking. <a class="link-gold" href="#/shop/new">Start with new arrivals</a>.</p>`}
  </div>`;

  if(sub==='track'){
    const o = S.orders[0];
    panel=`<div class="panel">
      <h2>Track order</h2><p class="sub">${o?`Order ${o.id}, placed ${o.date}.`:'Enter an order number to see where your parcel is.'}</p>
      ${!o?`<form id="trackForm"><label class="field"><span>ORDER NUMBER</span><input name="oid" placeholder="ODY-00000"></label><button class="btn btn--primary">TRACK</button></form>`:`
      <div class="track">${TRACK_STAGES.map(([t,d],i)=>`<div class="tstep ${i<o.stage?'done':''} ${i===o.stage?'now':''}"><h4>${t}</h4><p>${d}</p></div>`).join('')}</div>
      <button class="btn btn--line btn--sm" id="advance">SIMULATE NEXT UPDATE</button>`}
    </div>`;
  }

  if(sub==='addresses') panel=`<div class="panel">
    <h2>Saved addresses</h2><p class="sub">Delivery addresses across Pakistan.</p>
    ${S.addresses.length?S.addresses.map((a,i)=>`<div class="orow"><div><b>${a.city}</b><div class="m">${a.street}, ${a.area}, ${a.city}, ${a.province} ${a.postal||''}</div></div><span class="pill">${i===0?'DEFAULT':'SAVED'}</span></div>`).join('')
      :`<p style="color:var(--navy-soft)">No addresses saved yet. The address you use at checkout is stored here automatically.</p>`}
  </div>`;

  if(sub==='payments') panel=`<div class="panel">
    <h2>Payment methods</h2><p class="sub">How you prefer to pay.</p>
    ${PAYMENTS.map(([v,i,t,d])=>`<div class="orow"><div><b>${t}</b><div class="m">${d}</div></div><span class="pill">${v==='cod'?'PREFERRED':'AVAILABLE'}</span></div>`).join('')}
    <div class="note">Card and wallet credentials are never stored by ODEY. This screen is structured so a live gateway can attach saved tokens later.</div>
  </div>`;

  if(sub==='notifications') panel=`<div class="panel">
    <h2>Notifications</h2><p class="sub">Choose what we send and where.</p>
    ${[['Order updates','SMS and email when your order moves'],['New collections','A note when a collection drops'],
       ['Sale access','Early entry to reductions'],['ODEY stories','Occasional letters from the studio']]
      .map(([t,d],i)=>`<label class="orow" style="cursor:pointer"><div><b>${t}</b><div class="m">${d}</div></div><input type="checkbox" ${i<2?'checked':''} style="width:20px;height:20px;accent-color:var(--gold)"></label>`).join('')}
  </div>`;

  if(sub==='settings') panel=`<div class="panel">
    <h2>Settings</h2><p class="sub">Language, currency and privacy.</p>
    <div class="row2">
      <label class="field"><span>LANGUAGE</span><select><option>English</option><option>اردو (Urdu)</option></select></label>
      <label class="field"><span>CURRENCY</span><select><option>PKR — Pakistani Rupee</option></select></label>
    </div>
    <label class="check" style="margin-bottom:18px"><input type="checkbox" checked>Save my bag between visits</label>
    <button class="btn btn--line" id="clearData">CLEAR SAVED DATA ON THIS DEVICE</button>
  </div>`;

  return `<section class="sec sec--tight"><div class="wrap">
    <div class="sechead"><div><div class="rule"></div><h2>${S.user.name.split(' ')[0]}'s account</h2><p>${S.user.email}</p></div></div>
    <div class="acct">${acctNav(sub)}${panel}</div>
  </div></section>`;
}

/* ===================== WISHLIST ===================== */
function wishlist(){
  const items = S.wish.map(byId).filter(Boolean);
  if(!items.length) return `<section class="sec"><div class="empty"><h2>Your wishlist is empty</h2>
    <p>Tap the heart on anything you want to come back to. It stays here on this device.</p>
    <a class="btn btn--primary" href="#/shop/women">BROWSE WOMENSWEAR</a></div></section>`;
  return `<section class="sec sec--tight"><div class="wrap">
    <div class="sechead"><div><div class="rule"></div><h2>Wishlist</h2><p>${items.length} saved piece${items.length>1?'s':''}</p></div></div>
    ${items.map(p=>`<div class="citem">
      <a class="citem__img" href="#/product/${p.id}">${slot(p.tone,p.name,p.shot,'',p.icon)}</a>
      <div><h4>${p.name}</h4><div class="meta">${p.sub.toUpperCase()}</div>
        <div class="stock ${p.stock<=6?'low':''}" style="margin:0"><i></i>${p.stock>0?'In stock':'Out of stock'}</div>
        <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn btn--primary btn--sm" data-add="${p.id}">ADD TO BAG</button>
          <button class="btn btn--line btn--sm" data-wish="${p.id}">REMOVE</button>
        </div></div>
      <div style="text-align:right;font-family:var(--serif);font-size:1.05rem">${PKR(p.price)}</div>
    </div>`).join('')}
  </div></section>`;
}

/* ===================== STATIC PAGES ===================== */
const PAGES = {
  'size-guide':['Size guide','How ODEY measures, in inches.',`
    <h3>Men — shalwar kameez</h3>
    <div class="acc-item"><div class="in"><dl>
      <dt>S</dt><dd>Chest 38 · Kameez length 40 · Shalwar length 40</dd>
      <dt>M</dt><dd>Chest 40 · Kameez length 41 · Shalwar length 41</dd>
      <dt>L</dt><dd>Chest 42 · Kameez length 42 · Shalwar length 42</dd>
      <dt>XL</dt><dd>Chest 44 · Kameez length 43 · Shalwar length 42</dd>
      <dt>XXL</dt><dd>Chest 46 · Kameez length 44 · Shalwar length 43</dd>
    </dl></div></div>
    <h3 style="margin-top:28px">Women — shalwar kameez</h3>
    <div class="acc-item"><div class="in"><dl>
      <dt>XS</dt><dd>Bust 32 · Waist 26 · Kameez length 38</dd>
      <dt>S</dt><dd>Bust 34 · Waist 28 · Kameez length 39</dd>
      <dt>M</dt><dd>Bust 36 · Waist 30 · Kameez length 40</dd>
      <dt>L</dt><dd>Bust 38 · Waist 32 · Kameez length 41</dd>
      <dt>XL</dt><dd>Bust 40 · Waist 34 · Kameez length 42</dd>
    </dl></div></div>
    <p style="margin-top:22px">Between sizes? Take the larger. A kameez should skim the body and a shalwar should fall full and straight to the ankle — that fall is the whole point of the cut.</p>`],
  'shipping':['Shipping','Where we deliver and how long it takes.',`
    <p>Orders leave the Lahore studio within 24 hours of confirmation.</p>
    <div class="acc-item"><div class="in"><dl>
      <dt>Standard</dt><dd>2–4 working days nationwide · ${'PKR 350'} · free over PKR 15,000</dd>
      <dt>Express</dt><dd>Next working day · PKR 700 · Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar</dd>
      <dt>Tracking</dt><dd>A tracking number is sent by SMS the moment the courier collects</dd>
    </dl></div></div>`],
  'returns':['Returns & exchanges','Fourteen days, collected from your door.',`
    <p>Anything unworn, unwashed and in its original ODEY packaging can be returned within fourteen days of delivery. Request a return from your account, and a courier will collect within two working days.</p>
    <p>Refunds reach the original payment method within 7–10 working days. Cash-on-delivery orders are refunded by bank transfer. Fragrance and pierced jewelry can only be returned sealed.</p>`],
  'refund':['Refund policy','How and when money comes back.',`
    <p>Approved refunds are issued within two working days of the returned parcel reaching our studio. Card refunds take a further 5–8 working days to appear, depending on your bank. Shipping charges are refunded only where the item arrived faulty or incorrect.</p>`],
  'faqs':['FAQs','The questions we are asked most.',`
    <details class="acc-item" open><summary>IS THE SHALWAR KAMEEZ STITCHED OR UNSTITCHED?</summary><div class="in">Every ODEY piece ships fully stitched to the size you select, cut to traditional Pakistani proportion.</div></details>
    <details class="acc-item"><summary>DO YOU OFFER CASH ON DELIVERY?</summary><div class="in">Yes, nationwide, with no extra charge.</div></details>
    <details class="acc-item"><summary>CAN I CHANGE MY ORDER AFTER PLACING IT?</summary><div class="in">Within two hours, yes — message us on WhatsApp with your order number.</div></details>
    <details class="acc-item"><summary>DO YOU SHIP OUTSIDE PAKISTAN?</summary><div class="in">Not yet. International delivery is planned for next year.</div></details>
    <details class="acc-item"><summary>HOW DO I KNOW MY SIZE?</summary><div class="in">Use the size guide, and take the larger size if you fall between two.</div></details>`],
  'contact':['Contact us','We answer within a few hours.',`
    <div class="acc-item"><div class="in"><dl>
      <dt>WhatsApp</dt><dd>+92 300 000 0000 · 9am to 9pm, seven days</dd>
      <dt>Email</dt><dd>care@odeyfashion.pk</dd>
      <dt>Studio</dt><dd>MM Alam Road, Gulberg III, Lahore</dd>
    </dl></div></div>`],
  'story':['Our story','Where ODEY started.',`
    <p>ODEY Fashion began in a two-room workshop off MM Alam Road with six tailors and one rule: cut the shalwar kameez properly, or do not sell it. That meant a full kameez with real side slits, a shalwar with enough cloth to fall the way it should, and fabric chosen by weight rather than by price.</p>
    <p>The house grew from there — womenswear, Little Odey, then jewelry, wristwatches and fragrance, so a whole look could be finished in one place. What has not changed is where it is made or who makes it.</p>`],
  'about':['About ODEY','The house, in short.',`
    <p>A Pakistani fashion house based in Lahore, selling menswear, womenswear, kidswear, jewelry, wristwatches, fragrance and accessories. Everything is designed in-house and stitched by tailors we work with directly.</p>`],
  'careers':['Careers','Work with us.',`
    <p>We hire tailors, pattern cutters, photographers, retail staff and people who can write about clothes without exaggerating. Send your details and a note about what you want to do to <a class="link-gold" href="#/page/contact">careers@odeyfashion.pk</a>.</p>`],
  'privacy':['Privacy policy','What we collect and why.',`
    <p>We collect your name, contact details and delivery address so we can fulfil orders, and nothing beyond that without asking. Payment details are handled by the payment provider and never reach our servers.</p>
    <p>We do not sell customer data. You can ask us to delete your account and everything attached to it at any time.</p>`],
  'terms':['Terms & conditions','The agreement between us.',`
    <p>By ordering from ODEY Fashion you confirm the details you provide are accurate and that you are authorised to use the payment method selected. Prices are in Pakistani Rupees and include applicable taxes. We may cancel an order where stock or pricing is shown in error, and will refund in full when we do.</p>`],
  'reset':['Reset your password','We will send you a link.',`
    <form id="resetForm" style="max-width:420px"><label class="field"><span>EMAIL OR PHONE</span><input name="id" required></label>
    <button class="btn btn--primary btn--full">SEND RESET LINK</button></form>`],
};

function page(k){
  const p=PAGES[k]; if(!p) return notFound();
  return `<section class="sec sec--tight"><div class="wrap" style="max-width:820px">
    <div class="rule"></div><h1 style="font-size:clamp(2rem,4vw,3rem)">${p[0]}</h1>
    <p class="lede" style="margin:12px 0 34px">${p[1]}</p>
    <div style="font-size:.98rem;line-height:1.85;color:var(--charcoal)">${p[2]}</div>
  </div></section>`;
}

function notFound(){
  return `<section class="sec"><div class="empty"><h2>This page has moved on</h2>
    <p>The link you followed does not lead anywhere. The collections are all still here.</p>
    <a class="btn btn--primary" href="#/">BACK TO HOME</a></div></section>`;
}

/* ===================== ROUTER ===================== */
const root = document.getElementById('root');
root.innerHTML = header() + searchOverlay() + '<main id="view"></main>' + footer() + cartDrawer() + '<div id="modalMount"></div>';

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function parseHash(){
  const h = (location.hash||'#/').slice(1);
  const [path,q] = h.split('?');
  return {parts:path.split('/').filter(Boolean), qs:new URLSearchParams(q||'')};
}

function route(){
  const {parts,qs} = parseHash();
  const a = parts[0]||'', b = parts[1]||'';
  if(!a) return home();
  if(a==='shop') return shop(b||'all',qs);
  if(a==='product') return pdp(b);
  if(a==='cart') return cartPage();
  if(a==='checkout') return checkout();
  if(a==='signin') return signin();
  if(a==='signup') return signup();
  if(a==='account') return account(b);
  if(a==='wishlist') return wishlist();
  if(a==='page') return page(b);
  return notFound();
}

let lastKey='';
function render(scroll){
  const {parts} = parseHash();
  const key = parts.join('/');
  if(key!==lastKey){
    if(parts[0]==='shop') resetF();
    if(parts[0]==='product') PDP={img:0,size:null,color:0,qty:1};
    if(parts[0]==='checkout' && CK.step===3){ CK.step=0; CK.order=null; }
  }
  $('#view').innerHTML = route();
  refreshBadges();
  markNav();
  observeReveal();
  if(scroll!==false && key!==lastKey) window.scrollTo({top:0,behavior:'instant'});
  lastKey=key;
}

function markNav(){
  const h=location.hash||'#/';
  $$('.hdr__nav a').forEach(a=>a.classList.toggle('on', a.getAttribute('href')===h || (h.startsWith(a.getAttribute('href')) && a.getAttribute('href')!=='#/')));
}

function refreshBadges(){
  const c=cartCount(), w=S.wish.length;
  const cb=$('#cartBadge'), wb=$('#wishBadge');
  if(cb){ cb.textContent=c; cb.classList.toggle('show',c>0); }
  if(wb){ wb.textContent=w; wb.classList.toggle('show',w>0); }
  drawerRender();
}

window.addEventListener('hashchange',()=>{ closeAll(); render(); });

/* ===================== REVEAL ===================== */
let io;
function observeReveal(){
  if(io) io.disconnect();
  io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.12,rootMargin:'0px 0px -40px'});
  $$('.rv').forEach(el=>io.observe(el));
}

/* header shrink */
window.addEventListener('scroll',()=>{ const h=$('#hdr'); if(h) h.classList.toggle('small', window.scrollY>140); },{passive:true});

/* ===================== CART ACTIONS ===================== */
function addToCart(id,size,color,qty=1){
  const p=byId(id); if(!p) return;
  size = size || p.sizes[0]; color = color || p.colors[0].n;
  const line = S.cart.find(l=>l.id===id && l.size===size && l.color===color);
  if(line) line.qty += qty; else S.cart.push({id,size,color,qty});
  S.save(); refreshBadges();
  const b=$('#cartBadge'); if(b){ b.classList.add('pop'); setTimeout(()=>b.classList.remove('pop'),520); }
  toast(`${p.name} added to your bag`);
  openDrawer();
}
function toggleWish(id,el){
  const i=S.wish.indexOf(id);
  if(i>-1){ S.wish.splice(i,1); toast('Removed from wishlist'); }
  else { S.wish.push(id); toast('Saved to your wishlist'); }
  S.save(); refreshBadges();
  if(el){ el.classList.toggle('on',S.wish.includes(id)); el.classList.add('beat'); setTimeout(()=>el.classList.remove('beat'),560); }
  if(location.hash.startsWith('#/wishlist')) render(false);
}

/* ===================== DRAWER ===================== */
function drawerRender(){
  const b=$('#dBody'), f=$('#dFoot'); if(!b) return;
  if(!S.cart.length){
    b.innerHTML = `<div style="padding:50px 0;text-align:center;color:var(--navy-soft)"><p>Your bag is empty.</p><a class="btn btn--primary btn--sm" href="#/shop/men">START SHOPPING</a></div>`;
    f.innerHTML=''; return;
  }
  b.innerHTML = S.cart.map(cartLine).join('');
  f.innerHTML = `<div class="srow"><span>Subtotal</span><span>${PKR(subtotal())}</span></div>
    <div class="srow" style="font-size:.78rem;color:var(--navy-soft)"><span>${shipCost()?'Shipping calculated at checkout':'Free delivery applied'}</span></div>
    <a class="btn btn--primary btn--full" href="#/cart" style="margin-top:12px">VIEW BAG</a>
    <a class="btn btn--ghost btn--full btn--sm" href="#/checkout" style="margin-top:8px">CHECKOUT</a>`;
}
const openDrawer=()=>{ $('#drawer').classList.add('open'); $('#scrim').classList.add('open'); };
const closeDrawer=()=>{ $('#drawer').classList.remove('open'); $('#scrim').classList.remove('open'); };
function closeAll(){ closeDrawer(); $('#search').classList.remove('open'); $('#mnav').classList.remove('open'); const m=$('#qv'); if(m) m.classList.remove('open'); }

/* ===================== SEARCH ===================== */
function runSearch(q){
  const out=$('#sOut'); if(!out) return;
  q=(q||'').trim().toLowerCase();
  if(!q){ out.innerHTML=`<p style="color:var(--navy-soft);font-size:.9rem">Start typing, or pick a suggestion above.</p>`; return; }
  const r=PRODUCTS.filter(p=>(p.name+' '+p.sub+' '+p.cat+' '+p.fabric).toLowerCase().includes(q)).slice(0,12);
  out.innerHTML = r.length
    ? `<p style="font-size:.74rem;letter-spacing:.16em;color:var(--bronze);margin-bottom:16px">${r.length} RESULT${r.length>1?'S':''}</p>
       <div class="sres">${r.map(p=>`<a href="#/product/${p.id}" data-close-search>${slot(p.tone,p.name,p.shot,'',p.icon)}<div><b>${p.name}</b><span>${PKR(p.price)}</span></div></a>`).join('')}</div>`
    : `<p style="color:var(--navy-soft)">Nothing matches “${q}”. Try “shalwar kameez”, “watch” or “perfume”.</p>`;
}

/* ===================== GLOBAL EVENTS ===================== */
document.addEventListener('click',e=>{
  const t=e.target;
  const hit=s=>t.closest(s);

  if(hit('#burger')){ $('#mnav').classList.add('open'); return; }
  if(hit('#mclose')){ $('#mnav').classList.remove('open'); return; }
  if(hit('.mnav a')){ $('#mnav').classList.remove('open'); }
  if(hit('#searchBtn')){ $('#search').classList.add('open'); setTimeout(()=>$('#sInput').focus(),120); runSearch(''); return; }
  if(hit('#sClose')||t.id==='search'){ $('#search').classList.remove('open'); return; }
  if(hit('[data-close-search]')){ $('#search').classList.remove('open'); }
  if(hit('#cartBtn')){ openDrawer(); return; }
  if(hit('#dClose')||t.id==='scrim'){ closeAll(); return; }
  if(hit('.sugg button')){ const q=hit('.sugg button').dataset.q; $('#sInput').value=q; runSearch(q); return; }

  const add=hit('[data-add]'); if(add){ e.preventDefault(); addToCart(add.dataset.add); return; }
  const wsh=hit('[data-wish]'); if(wsh){ e.preventDefault(); toggleWish(wsh.dataset.wish,wsh.classList.contains('wish')?wsh:null); return; }

  const qv=hit('[data-qv]');
  if(qv){ e.preventDefault(); const p=byId(qv.dataset.qv);
    $('#modalMount').innerHTML=quickView(p);
    requestAnimationFrame(()=>$('#qv').classList.add('open')); return; }
  if(hit('#qvX')||t.id==='qv'||hit('#qvFull')){ const m=$('#qv'); if(m){ m.classList.remove('open'); setTimeout(()=>$('#modalMount').innerHTML='',350);} }
  const qs=hit('[data-qsize]'); if(qs){ $$('#qvSizes button').forEach(b=>b.classList.remove('on')); qs.classList.add('on'); return; }
  const qa=hit('[data-qadd]'); if(qa){ const size=$('#qvSizes .on')?.dataset.qsize; addToCart(qa.dataset.qadd,size); $('#qv').classList.remove('open'); return; }

  /* ---- PDP ---- */
  const im=hit('[data-img]'); if(im){ PDP.img=+im.dataset.img; render(false); return; }
  const sz=hit('[data-size]'); if(sz){ PDP.size=sz.dataset.size; render(false); return; }
  const cl=hit('[data-color]'); if(cl){ PDP.color=+cl.dataset.color; render(false); return; }
  const qb=hit('[data-q]'); if(qb){ PDP.qty=Math.max(1,PDP.qty+(+qb.dataset.q)); $('#qtyV').textContent=PDP.qty; return; }
  if(hit('#galMain')){ hit('#galMain').classList.toggle('zoom'); return; }
  if(hit('#pAdd')||hit('#pBuy')){
    const id=parseHash().parts[1], p=byId(id);
    if(!PDP.size){ toast('Choose a size first'); return; }
    addToCart(id,PDP.size,p.colors[PDP.color].n,PDP.qty);
    if(hit('#pBuy')){ closeDrawer(); location.hash='#/checkout'; }
    return;
  }
  if(hit('#pWish')){ toggleWish(parseHash().parts[1]); render(false); return; }

  /* ---- filters ---- */
  if(hit('#fToggle')){ $('#filters').classList.toggle('open'); return; }
  if(hit('#fClear')||hit('#fClear2')){ resetF(); render(false); return; }
  const chip=hit('[data-chip]');
  if(chip){ const k=chip.dataset.chip, v=chip.dataset.val;
    if(k==='stockOnly') F.stockOnly=false;
    else if(k==='max') F.max=MAXP;
    else if(k==='sub') F.sub=null;
    else F[k]=F[k].filter(x=>x!==v);
    render(false); return; }

  /* ---- cart ---- */
  const cq=hit('[data-cq]');
  if(cq){ const i=+cq.dataset.cq, d=+cq.dataset.d;
    S.cart[i].qty=Math.max(1,S.cart[i].qty+d); S.save(); render(false); refreshBadges(); return; }
  const rm=hit('[data-rm]');
  if(rm){ S.cart.splice(+rm.dataset.rm,1); S.save(); render(false); refreshBadges(); toast('Removed from your bag'); return; }
  if(hit('#promoBtn')){
    const v=$('#promoIn').value.trim().toUpperCase();
    if(v==='ODEY10'){ promo={code:'ODEY10',pct:.10}; store.set('promo',promo); toast('ODEY10 applied — 10% off'); }
    else { promo=null; store.set('promo',null); toast('That code is not recognised'); }
    render(false); return;
  }

  /* ---- checkout ---- */
  if(hit('#ckBack0')){ e.preventDefault(); CK.step=0; render(false); return; }
  if(hit('#ckToPay')){ CK.step=2; render(false); window.scrollTo({top:0}); return; }
  if(hit('#ckPlace')){ placeOrder(); return; }

  /* ---- account ---- */
  if(hit('#logoutBtn')){ e.preventDefault(); S.user=null; S.save(); toast('Signed out'); location.hash='#/'; return; }
  if(hit('#advance')){ const o=S.orders[0]; if(o && o.stage<5){ o.stage++; S.save(); render(false); toast('Status updated: '+TRACK_STAGES[o.stage][0]); } return; }
  if(hit('#clearData')){ S.cart=[];S.wish=[];S.orders=[];S.addresses=[];promo=null;store.set('promo',null);S.save(); toast('Saved data cleared'); location.hash='#/'; render(false); return; }
});

document.addEventListener('input',e=>{
  if(e.target.id==='sInput') runSearch(e.target.value);
  if(e.target.id==='priceR'){ const lab=e.target.closest('.fgroup').querySelector('h4'); lab.textContent='PRICE — UP TO '+PKR(+e.target.value); }
});

document.addEventListener('change',e=>{
  const t=e.target;
  if(t.id==='priceR'){ F.max=+t.value; render(false); return; }
  if(t.id==='sortSel'){ F.sort=t.value; render(false); return; }
  if(t.dataset && t.dataset.f){
    const k=t.dataset.f;
    if(k==='stockOnly') F.stockOnly=t.checked;
    else { if(t.checked) F[k].push(t.value); else F[k]=F[k].filter(x=>x!==t.value); }
    render(false); return;
  }
  if(t.name==='ship'){ CK.ship=t.value; render(false); return; }
  if(t.name==='pay'){ CK.pay=t.value; render(false); return; }
});

document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeAll(); });

/* ===================== FORMS ===================== */
function markErr(input,bad){ input.closest('.field')?.classList.toggle('err',bad); return !bad; }

document.addEventListener('submit',e=>{
  const f=e.target; e.preventDefault();

  if(f.id==='ckInfo'){
    let ok=true;
    [...f.elements].forEach(el=>{ if(el.required){ ok = markErr(el, !el.value.trim() || (el.type==='email' && !/.+@.+\..+/.test(el.value))) && ok; } });
    if(!ok){ toast('Check the highlighted fields'); return; }
    CK.info=Object.fromEntries(new FormData(f).entries());
    const addr={street:CK.info.street,area:CK.info.area,city:CK.info.city,province:CK.info.province,postal:CK.info.postal};
    if(!S.addresses.some(a=>a.street===addr.street)) S.addresses.unshift(addr);
    S.save(); CK.step=1; render(false); window.scrollTo({top:0}); return;
  }

  if(f.id==='siForm'){
    const d=Object.fromEntries(new FormData(f).entries());
    let ok = markErr(f.elements.id, !(d.id||'').trim());
    ok = markErr(f.elements.pw, (d.pw||'').length<6) && ok;
    if(!ok){ toast('Check the highlighted fields'); return; }
    S.user = S.user || {name: d.id.includes('@') ? d.id.split('@')[0].replace(/[._]/g,' ') : 'ODEY Customer', email: d.id.includes('@')?d.id:'', phone: d.id.includes('@')?'':d.id};
    S.save(); toast('Welcome back'); location.hash='#/account'; return;
  }

  if(f.id==='suForm'){
    const d=Object.fromEntries(new FormData(f).entries());
    let ok=true;
    ok = markErr(f.elements.name, !d.name.trim()) && ok;
    ok = markErr(f.elements.email, !/.+@.+\..+/.test(d.email||'')) && ok;
    ok = markErr(f.elements.phone, !(d.phone||'').trim()) && ok;
    ok = markErr(f.elements.pw, (d.pw||'').length<6) && ok;
    ok = markErr(f.elements.pw2, d.pw!==d.pw2) && ok;
    if(!ok){ toast('Check the highlighted fields'); return; }
    S.user={name:d.name,email:d.email,phone:d.phone}; S.save();
    toast('Your ODEY account is ready'); location.hash='#/account'; return;
  }

  if(f.id==='profForm'){ Object.assign(S.user,Object.fromEntries(new FormData(f).entries())); S.save(); toast('Profile saved'); render(false); return; }
  if(f.id==='newsForm'){ f.reset(); toast('You are on the list — welcome to the ODEY world'); return; }
  if(f.id==='resetForm'){ f.reset(); toast('If that account exists, a reset link is on its way'); return; }
  if(f.id==='trackForm'){ toast('No order found with that number'); return; }
});

function placeOrder(){
  const id='ODY-'+String(Math.floor(10000+Math.random()*89999));
  const o={id, date:new Date().toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}),
    items:[...S.cart], total:total(), pay:CK.pay, stage:1,
    name:CK.info.name||S.user?.name||'Customer', email:CK.info.email||S.user?.email||'you@example.com', phone:CK.info.phone||''};
  S.orders.unshift(o); S.cart=[]; promo=null; store.set('promo',null); S.save();
  CK.order=o; CK.step=3; refreshBadges(); render(false); window.scrollTo({top:0});
}

/* ===================== BOOT ===================== */
if(!location.hash) location.hash='#/';
render();
