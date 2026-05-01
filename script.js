const experiences = [
  {
    title: "Storm Zone",
    tag: "Battle Royale",
    desc: "100 players, one map, zero mercy. Enter the storm and prove you're the last one standing in the most brutal battle royale ever created.",
    price: "₹999",
    priceNum: 999,
    rating: "⭐ 4.9",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    color: "#FF2D78",
    glow: "rgba(255,45,120,0.3)"
  },
  {
    title: "Neon Rush",
    tag: "Racing",
    desc: "High-speed neon tracks at 300mph. Blink and you lose. The fastest racing experience on the planet.",
    price: "₹799",
    priceNum: 799,
    rating: "⭐ 4.8",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    color: "#00F0FF",
    glow: "rgba(0,240,255,0.3)"
  },
  {
    title: "Mind Siege",
    tag: "Strategy",
    desc: "Outwit, outplay, outmaneuver. Strategy-based team combat where intelligence beats brute force every time.",
    price: "₹699",
    priceNum: 699,
    rating: "⭐ 4.7",
    img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.3)"
  },
  {
    title: "Gold League",
    tag: "Championship",
    desc: "Compete for glory and million-dollar prize pools in the most prestigious tournament in esports history.",
    price: "₹1,499",
    priceNum: 1499,
    rating: "⭐ 5.0",
    img: "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?w=800&q=80",
    color: "#FFE234",
    glow: "rgba(255,226,52,0.3)"
  },
  {
    title: "Phantom Realm",
    tag: "VR Arena",
    desc: "Step inside the game. Full-immersion VR combat where the only limit is your courage. Reality will never feel the same.",
    price: "₹1,299",
    priceNum: 1299,
    rating: "⭐ 4.9",
    img: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&q=80",
    color: "#FF2D78",
    glow: "rgba(255,45,120,0.3)"
  },
  {
    title: "Grid Wars",
    tag: "Cyber",
    desc: "Hack, slash, and dominate the digital grid. A cyberpunk battlefield built for the sharpest minds.",
    price: "₹899",
    priceNum: 899,
    rating: "⭐ 4.6",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    color: "#00F0FF",
    glow: "rgba(0,240,255,0.3)"
  },
  {
    title: "Sync Squad",
    tag: "Team",
    desc: "5v5 team battles that demand perfect coordination. Communicate, cooperate, and crush your opponents.",
    price: "₹599",
    priceNum: 599,
    rating: "⭐ 4.8",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.3)"
  },
  {
    title: "Dark Sector",
    tag: "Survival",
    desc: "Survive the night in a post-apocalyptic warzone. Resources are scarce. Enemies are everywhere. Trust no one.",
    price: "₹849",
    priceNum: 849,
    rating: "⭐ 4.7",
    img: "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=800&q=80",
    color: "#FF2D78",
    glow: "rgba(255,45,120,0.3)"
  },
  {
    title: "Pro Circuit",
    tag: "Esports",
    desc: "Train, qualify, and rise through the ranks of professional esports. Your journey to legendary starts here.",
    price: "₹1,199",
    priceNum: 1199,
    rating: "⭐ 4.9",
    img: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&q=80",
    color: "#00F0FF",
    glow: "rgba(0,240,255,0.3)"
  },
  {
    title: "Rift Finals",
    tag: "Legendary",
    desc: "The ultimate showdown. Only the best earn a spot in the grand arena. One champion. One legacy. Forever.",
    price: "₹2,499",
    priceNum: 2499,
    rating: "⭐ 5.0",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    color: "#FFE234",
    glow: "rgba(255,226,52,0.3)"
  }
];

/* ============================================
   STATE
   ============================================ */
let cart = [];
let currentModalIndex = null;
let currentFilter = 'all';

/* ============================================
   UTILS
   ============================================ */
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ============================================
   LOADER
   ============================================ */
const loader       = document.getElementById('loader');
const loaderBar    = document.getElementById('loaderBar');
const loaderBarGlow = document.getElementById('loaderBarGlow');
const loaderText   = document.getElementById('loaderText');
const loaderPercent = document.getElementById('loaderPercent');

const loaderMessages = [
  'Initializing Arena...',
  'Loading Battle Zones...',
  'Calibrating Systems...',
  'Entering ArcadeVerse...'
];

let progress = 0;

document.body.style.overflow = 'hidden';

const loaderInterval = setInterval(() => {
  progress += Math.random() * 16 + 5;
  if (progress >= 100) progress = 100;

  loaderBar.style.width = progress + '%';
  loaderBarGlow.style.width = progress + '%';
  loaderPercent.textContent = Math.floor(progress) + '%';

  const msgIdx = Math.min(Math.floor((progress / 100) * loaderMessages.length), loaderMessages.length - 1);
  loaderText.textContent = loaderMessages[msgIdx];

  if (progress >= 100) {
    clearInterval(loaderInterval);
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 500);
  }
}, 110);

/* ============================================
   CURSOR
   ============================================ */
const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

(function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

function addCursorHover(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorDot.classList.add('hover');
      cursorRing.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursorDot.classList.remove('hover');
      cursorRing.classList.remove('hover');
    });
  });
}
addCursorHover('button, a, .card, .filter-btn, .about-tags span');

/* ============================================
   NAVBAR
   ============================================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  updateActiveNav();
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

/* ============================================
   HAMBURGER / MOBILE MENU
   ============================================ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', e => {
  e.stopPropagation();
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

document.addEventListener('click', e => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMobileMenu();
  }
});

/* ============================================
   RENDER CARDS
   ============================================ */
function renderCards(filter = 'all') {
  const grid = document.getElementById('cardsGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? experiences
    : experiences.filter(e => e.tag === filter);

  filtered.forEach((exp, i) => {
    const realIndex = experiences.indexOf(exp);
    const card = document.createElement('div');
    card.className = 'card reveal';
    card.style.setProperty('--card-color', exp.color);
    card.style.setProperty('--card-glow', exp.glow);

    card.innerHTML = `
      <div class="card-img" style="background-image:url('${exp.img}');"></div>
      <span class="card-number">${String(i + 1).padStart(2, '0')}</span>
      <div class="card-overlay">
        <span class="card-tag">${exp.tag}</span>
        <h3 class="card-title">${exp.title}</h3>
        <p class="card-desc">${exp.desc}</p>
        <div class="card-footer">
          <span class="card-price">${exp.price}</span>
          <button class="card-cta" data-index="${realIndex}">Add to Cart 🛒</button>
        </div>
      </div>
    `;

    // Card click opens modal (not on button)
    card.addEventListener('click', e => {
      if (!e.target.classList.contains('card-cta')) {
        openModal(realIndex);
      }
    });

    // Card CTA button
    card.querySelector('.card-cta').addEventListener('click', function(e) {
      e.stopPropagation();
      addToCart(realIndex, this);
    });

    grid.appendChild(card);
  });

  // Trigger reveal animation
  setTimeout(() => {
    document.querySelectorAll('.card.reveal').forEach((el, idx) => {
      el.style.transitionDelay = (idx * 0.04) + 's';
      el.classList.add('visible');
    });
  }, 50);
}

/* ============================================
   FILTER
   ============================================ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentFilter = this.dataset.filter;
    renderCards(currentFilter);
  });
});

/* ============================================
   MODAL
   ============================================ */
const modalOverlay = document.getElementById('modalOverlay');

function openModal(index) {
  const exp = experiences[index];
  currentModalIndex = index;

  document.getElementById('modalImg').src      = exp.img;
  document.getElementById('modalImg').alt      = exp.title;
  document.getElementById('modalTag').textContent   = exp.tag;
  document.getElementById('modalNum').textContent   = String(index + 1).padStart(2, '0');
  document.getElementById('modalTitle').textContent = exp.title;
  document.getElementById('modalDesc').textContent  = exp.desc;
  document.getElementById('modalPrice').textContent = exp.price;
  document.getElementById('modalRating').textContent = exp.rating + ' / 5.0';

  // Check if already in cart
  const inCart = cart.find(item => item.index === index);
  const btn = document.getElementById('modalCartBtn');
  if (inCart) {
    btn.innerHTML = `In Cart (${inCart.qty}) ✓`;
    btn.style.background = '#00E5A0';
  } else {
    btn.innerHTML = `Add to Cart <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`;
    btn.style.background = '';
  }

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  currentModalIndex = null;
}

// Close on overlay bg click
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

function addToCartFromModal() {
  if (currentModalIndex === null) return;
  addToCart(currentModalIndex);
  closeModal();
  setTimeout(() => openCart(), 350);
}

/* ============================================
   CART LOGIC
   ============================================ */
const cartBtn      = document.getElementById('cartBtn');
const cartOverlay  = document.getElementById('cartOverlay');
const cartSidebar  = document.getElementById('cartSidebar');
const cartCountEl  = document.getElementById('cartCount');
const cartMobileCountEl = document.getElementById('mobileCartCount');
const cartItemsEl  = document.getElementById('cartItems');
const cartTotalEl  = document.getElementById('cartTotal');
const cartSubtitleEl = document.getElementById('cartSubtitle');

function openCart() {
  cartOverlay.classList.add('open');
  cartSidebar.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartOverlay.classList.remove('open');
  cartSidebar.classList.remove('open');
  document.body.style.overflow = '';
}
cartBtn.addEventListener('click', openCart);

function addToCart(index, btnEl) {
  const exp = experiences[index];
  const existing = cart.find(item => item.index === index);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ index, qty: 1, ...exp });
  }

  updateCart();
  showToast('success', '🎮 ' + exp.title + ' added to cart!');

  // Bump animation
  cartCountEl.classList.remove('bump');
  void cartCountEl.offsetWidth;
  cartCountEl.classList.add('bump');

  // Button feedback
  if (btnEl) {
    const original = btnEl.innerHTML;
    btnEl.innerHTML = '✅ Added!';
    btnEl.style.background = '#00E5A0';
    btnEl.style.pointerEvents = 'none';
    setTimeout(() => {
      btnEl.innerHTML = original;
      btnEl.style.background = '';
      btnEl.style.pointerEvents = '';
    }, 1500);
  }

  // Card pulse
  const cards = document.querySelectorAll('.card');
  // Find the card with matching data-index on its button
  cards.forEach(card => {
    const btn = card.querySelector('[data-index]');
    if (btn && parseInt(btn.dataset.index) === index) {
      card.classList.add('pulse-glow');
      setTimeout(() => card.classList.remove('pulse-glow'), 600);
    }
  });
}

function removeFromCart(index) {
  cart = cart.filter(item => item.index !== index);
  updateCart();
  showToast('info', '🗑️ Item removed from cart.');
}

function changeQty(index, delta) {
  const item = cart.find(item => item.index === index);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(index);
  else updateCart();
}

function updateCart() {
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  cartCountEl.textContent = totalQty;
  if (cartMobileCountEl) cartMobileCountEl.textContent = totalQty;
  cartSubtitleEl.textContent = totalQty === 0 ? 'Empty' : totalQty + ' item' + (totalQty !== 1 ? 's' : '');

  const totalPrice = cart.reduce((s, i) => s + i.priceNum * i.qty, 0);
  cartTotalEl.textContent = '₹' + totalPrice.toLocaleString('en-IN');

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🎮</div>
        <p>Your cart is empty.<br/>Add an experience to get started.</p>
      </div>`;
    return;
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.title}</div>
        <div class="cart-item-tag">${item.tag}</div>
        <div class="cart-item-price">${item.price} × ${item.qty} = ₹${(item.priceNum * item.qty).toLocaleString('en-IN')}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty(${item.index}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.index}, +1)">+</button>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${item.index})" title="Remove">✕</button>
    </div>
  `).join('');
}

function checkout() {
  if (cart.length === 0) {
    showToast('error', '⚠️ Your cart is empty!');
    return;
  }
  const count = cart.reduce((s, i) => s + i.qty, 0);
  showToast('success', `🏆 Order placed! ${count} experience${count !== 1 ? 's' : ''} booked. Welcome to the Arena!`);
  cart = [];
  updateCart();
  closeCart();
}

/* ============================================
   TOAST
   ============================================ */
const toastContainer = document.getElementById('toastContainer');

function showToast(type, message) {
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || 'ℹ️'}</span>
    <span class="toast-msg">${message}</span>
  `;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.38s forwards';
    setTimeout(() => toast.remove(), 380);
  }, 3200);
}

/* ============================================
   CONTACT FORM
   ============================================ */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    showToast('success', '📩 Message sent! We\'ll be in touch soon.');
    e.target.reset();
    btn.innerHTML = `Send Message <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>`;
    btn.disabled = false;
  }, 1600);
}

/* ============================================
   PARALLAX ORBS
   ============================================ */
const orbs = document.querySelectorAll('.orb');
document.addEventListener('mousemove', e => {
  const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
  orbs.forEach((orb, i) => {
    const speed = (i + 1) * 10;
    orb.style.transform = `translate(${dx * speed}px, ${dy * speed}px)`;
  });
});

/* ============================================
   STAT COUNTER
   ============================================ */
function animateCounter(el, target, prefix = '', suffix = '', decimal = false) {
  let current = 0;
  const duration = 1800;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    current = target * eased;

    el.textContent = prefix + (decimal ? current.toFixed(1) : Math.floor(current)) + suffix;

    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = prefix + (decimal ? target.toFixed(1) : target) + suffix;
  }
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNums = entry.target.querySelectorAll('.stat-num');
      statNums.forEach(el => {
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const prefix = el.textContent.startsWith('$') ? '$' : '';
        const decimal = String(target).includes('.');
        el.textContent = prefix + '0' + suffix;
        animateCounter(el, target, prefix, suffix, decimal);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

/* ============================================
   SCROLL REVEAL
   ============================================ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

function initReveal() {
  document.querySelectorAll(
    '.about-img-wrap, .about-text, .section-header, .contact-inner, .footer-brand, .footer-links-group, .about-tags span'
  ).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.06) + 's';
    revealObserver.observe(el);
  });
}

/* ============================================
   ESC KEY
   ============================================ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeCart(); closeMobileMenu(); }
});

/* ============================================
   INIT
   ============================================ */
renderCards();
initReveal();