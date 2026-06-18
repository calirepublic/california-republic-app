const ORDER_URL = 'https://californiarepublic-stives.square.site/';
const GIFT_CARD_URL = 'https://app.squareup.com/gift/ML96W6NYDQ01E/order';
const RESERVE_URL = 'https://bookings.nowbookit.com/?accountid=23abddda-9b8f-4a84-90f4';
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=2%20Memorial%20Ave%2C%20St%20Ives%20NSW%202075';
const INSTAGRAM_URL = 'https://www.instagram.com/californiarepublicstives/';
const FACEBOOK_URL = 'https://www.facebook.com/californiarepublicstives/';

const food = [
  ['Cali Tacos', 'Soft tortillas, fresh salsa, crema, pickled onion and your choice of signature fillings.', '$7.90 ea'],
  ['California Burrito', 'Fries, cheese, pico de gallo, guacamole and smoky pulled beef or grilled chicken.', '$19.90'],
  ['Loaded Nachos', 'Corn chips, melted cheese, guacamole, sour cream, tomato salsa and jalapeños.', 'from $18.90'],
  ['Sizzling Fajitas', 'A hot skillet with tortillas, pico de gallo, guacamole, jalapeños, cheese and sour cream.', 'from $34.90'],
  ['BBQ Pork Ribs', 'Slow-cooked, chargrilled and glazed with our signature house basting.', '$43.90'],
  ['Vegan Nachos', 'Vegan cheese, guacamole, cashew sour cream, tomato salsa and jalapeños.', '$19.90'],
];

const drinks = [
  ['Classic Margarita', 'Tequila, triple sec, lime and salted rim. Fresh, bright and made for tacos.', '$18.90'],
  ['Mexpresso Martini', 'Vodka, coffee liqueur, espresso and simple syrup with a Cali Republic kick.', '$18.90'],
  ['Kentucky Mule', 'Bourbon, fresh lime and ginger beer served tall over ice.', '$18.90'],
  ['Negroni', 'Gin, Campari, sweet vermouth and fresh orange.', '$19.90'],
  ['Cold Beer & Wine', 'Easy-drinking bottles, tap favourites and wines for the table.', 'Ask staff'],
];

const specials = [
  ['Happy Hour', 'Margaritas, beers and snack plates for golden-hour catch-ups.'],
  ['Family Nights', 'Share nachos, wings, ribs and fajitas across the table.'],
  ['Fresh Weekly Specials', 'Seasonal tacos, bowls and limited-time chef creations.'],
  ['Events & Activities', 'Watch this space for live music, celebrations and community nights.'],
];

function menuList(id, title, subtitle, items) {
  return `<section id="${id}" class="menu-panel" aria-labelledby="${id}-title">
    <div class="section-heading compact">
      <p class="eyebrow">${subtitle}</p>
      <h2 id="${id}-title">${title}</h2>
    </div>
    <div class="menu-list">${items.map(([name, desc, price]) => `
      <article class="menu-item">
        <div>
          <h3>${name}</h3>
          <p>${desc}</p>
        </div>
        <strong>${price}</strong>
      </article>`).join('')}
    </div>
  </section>`;
}

function actionCard(icon, title, text, href, label, id = '') {
  return `<section ${id ? `id="${id}"` : ''} class="action-card">
    <span class="action-icon">${icon}</span>
    <div>
      <p class="eyebrow">${title}</p>
      <h2>${text}</h2>
      <a class="button primary" href="${href}" target="_blank" rel="noopener">${label}</a>
    </div>
  </section>`;
}

function infoRow(icon, label, value, link) {
  const content = `<span class="emoji">${icon}</span><div><small>${label}</small><strong>${value}</strong></div>`;
  return link ? `<a class="info-row" href="${link}" target="_blank" rel="noopener">${content}</a>` : `<div class="info-row">${content}</div>`;
}

function navLink(href, label) {
  return `<a href="${href}">${label}</a>`;
}

document.getElementById('root').innerHTML = `
  <main>
    <nav class="topbar" aria-label="Primary navigation">
      <a href="#home" class="logo" aria-label="California Republic St Ives home">
        <span class="logo-bear">★</span>
        <span><strong>California Republic</strong><small>St Ives</small></span>
      </a>
      <div class="nav-links">
        ${navLink('#order', 'Order')}
        ${navLink('#book', 'Book')}
        ${navLink('#menus', 'Menus')}
        ${navLink('#contact', 'Visit')}
      </div>
    </nav>

    <section id="home" class="hero section-card">
      <div class="hero-content">
        <p class="eyebrow">Mexican restaurant • St Ives</p>
        <h1>Fresh Cali flavour for locals, families and friends.</h1>
        <p class="intro">Order online, book a table, browse menus, grab a gift card and keep up with what’s on at California Republic St Ives — all from a fast, phone-friendly app experience.</p>
        <div class="cta-grid">
          <a class="button primary" href="${ORDER_URL}" target="_blank" rel="noopener">Order Online</a>
          <a class="button secondary" href="${RESERVE_URL}" target="_blank" rel="noopener">Book a Table</a>
        </div>
      </div>
      <div class="hero-card" aria-label="California Republic app highlights">
        <span>CR</span>
        <strong>California Republic</strong>
        <p>Tacos • Burritos • Margaritas • Ribs</p>
      </div>
    </section>

    <section class="quick-actions" aria-label="Quick actions">
      ${navLink('#order', '<span>🛍️</span>Order')}
      ${navLink('#book', '<span>📅</span>Book')}
      ${navLink('#food', '<span>🌮</span>Food')}
      ${navLink('#drinks', '<span>🍹</span>Drinks')}
      ${navLink('#gift-cards', '<span>🎁</span>Gift Cards')}
      ${navLink('#whats-on', '<span>✨</span>What’s On')}
    </section>

    ${actionCard('🛍️', 'Order Online', 'Craving tacos, burritos or ribs at home?', ORDER_URL, 'Order with Square', 'order')}
    ${actionCard('📅', 'Book a Table', 'Reserve your next California Republic catch-up.', RESERVE_URL, 'Book a Table', 'book')}

    <section id="menus" class="section-card menus-shell">
      <div class="section-heading">
        <p class="eyebrow">Menus</p>
        <h2>Food and drinks, built for sharing.</h2>
        <p>Clean, easy-to-scan menu previews for the mobile app framework. Full menu detail can be expanded later.</p>
      </div>
      ${menuList('food', 'Food Menu', 'Fresh from the kitchen', food)}
      ${menuList('drinks', 'Drinks Menu', 'Bar favourites', drinks)}
    </section>

    ${actionCard('🎁', 'Gift Cards', 'Send the gift of tacos, margaritas and good times.', GIFT_CARD_URL, 'Order Gift Card', 'gift-cards')}

    <section id="whats-on" class="section-card specials">
      <div class="section-heading compact">
        <p class="eyebrow">What’s On / Specials</p>
        <h2>Promotions, happy hour and events.</h2>
      </div>
      <div class="special-grid">${specials.map(([title, text]) => `<article><strong>${title}</strong><p>${text}</p></article>`).join('')}</div>
    </section>

    <section id="contact" class="section-card contact">
      <div class="section-heading compact">
        <p class="eyebrow">Contact</p>
        <h2>Visit California Republic St Ives.</h2>
      </div>
      ${infoRow('📍', 'Address', '2 Memorial Ave, St Ives NSW 2075', MAP_URL)}
      ${infoRow('☎️', 'Phone', 'Call California Republic St Ives', 'tel:+61289243284')}
      ${infoRow('🕒', 'Opening hours', 'Open daily, 11:00am – 8:30pm')}
      <div class="social-grid">
        <a class="button secondary" href="${INSTAGRAM_URL}" target="_blank" rel="noopener">Instagram</a>
        <a class="button secondary" href="${FACEBOOK_URL}" target="_blank" rel="noopener">Facebook</a>
        <a class="button secondary" href="mailto:hello@californiarepublic.com.au">Email</a>
      </div>
    </section>
  </main>`;
