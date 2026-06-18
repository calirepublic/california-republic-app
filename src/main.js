const ORDER_URL = 'https://californiarepublic-stives.square.site/';
const GIFT_CARD_URL = 'https://californiarepublic-stives.square.site/s/gift-cards';
const RESERVE_URL = 'https://bookings.nowbookit.com/?accountid=23abddda-9b8f-4a84-90f4';
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=2%20Memorial%20Ave%2C%20St%20Ives%20NSW%202075';

const food = [
  ['Cali Tacos', 'Chicken, beef, pork, vegetarian, Baja California or Toluca, finished with fresh salsa.', '$7.90 ea'],
  ['Cali Burrito', 'Fries, cheese, pico de gallo, guacamole and your choice of chicken or pulled beef.', '$19.90'],
  ['Nachos', 'Corn chips, melted cheese, guacamole, sour cream, tomato salsa and jalapeños.', 'from $18.90'],
  ['Fajitas', 'Sizzling skillet with tortillas, pico de gallo, guacamole, jalapeños, cheese and sour cream.', 'from $34.90'],
  ['Pork Ribs', 'Slow-cooked, chargrilled and glazed with signature BBQ basting.', '$43.90'],
  ['Vegan Nachos', 'Vegan cheese, guacamole, cashew sour cream, tomato salsa and jalapeños.', '$19.90'],
];

const drinks = [
  ['Mexpresso Martini', 'Vodka, coffee liqueur, espresso and simple syrup.', '$18.90'],
  ['Kentucky Mule', 'Bourbon, fresh lime and ginger beer.', '$18.90'],
  ['Negroni', 'Gin, Campari, sweet vermouth and fresh orange.', '$19.90'],
  ['House Margaritas', 'Bright, citrusy and made for tacos.', 'Ask staff'],
];

const specials = [
  'Lunch-friendly tacos, bowls and burritos made fresh to order.',
  'Family-style nachos, wings and ribs to share.',
  'Dedicated vegan choices across tacos, nachos, burritos and fajitas.',
];

const icon = {
  bag: '🛍️', calendar: '📅', phone: '☎️', map: '📍', clock: '🕒', gift: '🎁', menu: '☰', star: '★', mobile: '📱',
};

function menuList(id, title, items) {
  return `<div id="${id}" class="menu-block"><h3>${title}</h3>${items.map(([name, desc, price]) => `
    <article class="menu-item"><div><h4>${name}</h4><p>${desc}</p></div><strong>${price}</strong></article>`).join('')}</div>`;
}

function infoRow(iconText, label, value, link) {
  const content = `<span class="emoji">${iconText}</span><div><small>${label}</small><strong>${value}</strong></div>`;
  return link ? `<a class="info-row" href="${link}">${content}</a>` : `<div class="info-row">${content}</div>`;
}

document.getElementById('root').innerHTML = `
  <main>
    <nav class="topbar" aria-label="Primary navigation">
      <a href="#home" class="brand-mark">CAL REP</a>
      <div><a href="#menus">Menus</a><a href="#contact">Visit</a></div>
    </nav>
    <section id="home" class="hero section-card">
      <p class="eyebrow">California Republic • St Ives</p>
      <h1>Bold Mexican flavours, beach-state energy.</h1>
      <p class="intro">A free mobile-first app experience for ordering, booking, browsing menus, buying gift cards and planning your next visit.</p>
      <div class="cta-grid">
        <a class="button primary" href="${ORDER_URL}">${icon.bag} Order Online</a>
        <a class="button secondary" href="${RESERVE_URL}">${icon.calendar} Reserve</a>
      </div>
      <div class="app-note"><span>${icon.mobile}</span> Free to use on iPhone and Android when downloaded from the App Store or Google Play.</div>
    </section>
    <section class="quick-actions">
      <a href="#food"><span>${icon.menu}</span> Food Menu</a>
      <a href="#drinks"><span>${icon.star}</span> Drinks</a>
      <a href="${GIFT_CARD_URL}"><span>${icon.gift}</span> Gift Cards</a>
    </section>
    <section id="menus" class="section-card">
      <p class="eyebrow">Fresh, fast, full of colour</p>
      <h2>Menus</h2>${menuList('food', 'Food Menu', food)}${menuList('drinks', 'Drinks Menu', drinks)}
    </section>
    <section class="section-card specials">
      <p class="eyebrow">Specials</p><h2>What’s on</h2>${specials.map((item) => `<p>★ ${item}</p>`).join('')}
    </section>
    <section id="contact" class="section-card contact">
      <p class="eyebrow">Contact & Hours</p><h2>Plan your visit</h2>
      ${infoRow(icon.clock, 'Opening hours', 'Open daily, 11:00am – 8:30pm')}
      ${infoRow(icon.map, 'Address', '2 Memorial Ave, St Ives NSW 2075', MAP_URL)}
      ${infoRow(icon.phone, 'Phone', 'Call California Republic St Ives', 'tel:+61289243284')}
      <div class="cta-grid bottom-actions"><a class="button primary" href="${ORDER_URL}">Order with Square</a><a class="button secondary" href="${RESERVE_URL}">Book with Now Book It</a></div>
    </section>
  </main>`;
