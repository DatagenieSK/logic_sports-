/* ============================================================================
   LOGIC SPORTS - COMPLETE E-COMMERCE & ADMIN ERP ENGINE (localStorage Synced)
   ============================================================================ */

const STORAGE_KEYS = {
  PRODUCTS: 'logic_sports_products_v3',
  CART: 'logic_sports_cart_v3',
  WISHLIST: 'logic_sports_wishlist_v3',
  USERS: 'logic_sports_customers_v3',
  SESSION: 'logic_sports_active_customer_v3',
  ORDERS: 'logic_sports_orders_v3',
  COUPONS: 'logic_sports_coupons_v3',
  REVIEWS: 'logic_sports_reviews_v3',
  BULK_LEADS: 'logic_sports_bulk_leads_v3',
  RESTOCK_ALERTS: 'logic_sports_restock_v3',
  ADMIN_AUTH: 'logic_sports_admin_unlocked_v3'
};

const DEFAULT_COUPONS = [
  { code: 'LOGIC10', pct: 10, minOrder: 999 },
  { code: 'FIRST15', pct: 15, minOrder: 3999 }
];

const DEFAULT_PRODUCTS = [
  {
    id: 'p-trk-01',
    sku: 'LGC-TRK-101',
    name: 'Logic Velocity Aero-Stretch Tracksuit',
    category: 'Tracksuits',
    price: 2899,
    mrp: 4299,
    rating: 4.9,
    badge: 'PRO TRACKSUIT',
    modelSpec: "Model is 5'10\" (74kg) wearing Size L | Tapered Athletic Cut",
    description: '2-piece performance tracksuit engineered with 4-way ripstop stretch fabric, underarm laser ventilation, and ankle-zip tapered joggers for quick shoe transitions.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    sizeStock: { 'S': 8, 'M': 14, 'L': 12, 'XL': 6, 'XXL': 0 },
    variants: [
      {
        colorName: 'Logic Gold / Navy',
        colorHex: '#F3C13A',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        colorName: 'Stealth Obsidian',
        colorHex: '#0E1726',
        image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
        ]
      }
    ]
  },
  {
    id: 'p-sho-01',
    sku: 'LGC-SHO-201',
    name: 'Logic Nitro Carbon-X Road Runner',
    category: 'Running Shoes',
    price: 4499,
    mrp: 6499,
    rating: 4.9,
    badge: 'CARBON PLATE',
    modelSpec: 'True to UK Sizing | 8mm Heel-to-Toe Drop (215g)',
    description: 'Full-length forefoot carbon propulsion plate paired with supercritical nitrogen-infused midsole foam and wet-traction rubber outsole.',
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    sizeStock: { 'UK 6': 5, 'UK 7': 9, 'UK 8': 11, 'UK 9': 8, 'UK 10': 3, 'UK 11': 0 },
    variants: [
      {
        colorName: 'Infrared Blaze',
        colorHex: '#EF4444',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        colorName: 'Solar Volt Gold',
        colorHex: '#F3C13A',
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
        ]
      }
    ]
  },
  {
    id: 'p-trk-02',
    sku: 'LGC-TRK-104',
    name: 'Logic All-Weather Thermal Warmup Tracksuit',
    category: 'Tracksuits',
    price: 3199,
    mrp: 4799,
    rating: 4.8,
    badge: 'WATER REPELLENT',
    modelSpec: "Model is 6'0\" (79kg) wearing Size XL | Weather-Shield Weave",
    description: 'DWR-coated micro-fleece lined tracksuit built for early morning winter road work and stadium warmups with reflective 360° piping.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    sizeStock: { 'S': 6, 'M': 10, 'L': 9, 'XL': 7, 'XXL': 4 },
    variants: [
      {
        colorName: 'Midnight Navy',
        colorHex: '#1E293B',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80',
        gallery: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80']
      },
      {
        colorName: 'Olive Tactical',
        colorHex: '#3F6212',
        image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=80',
        gallery: ['https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=80']
      }
    ]
  },
  {
    id: 'p-sho-02',
    sku: 'LGC-SHO-208',
    name: 'Logic Tempo Cushion Marathon Trainer',
    category: 'Running Shoes',
    price: 3499,
    mrp: 4999,
    rating: 4.7,
    badge: 'DAILY TRAINER',
    modelSpec: 'Neutral Pronation | 38mm Dual-Density EVA + Pebax Stack',
    description: 'Engineered jacquard mesh upper with 38mm heel stack dual-density cushioning for daily 10K and half-marathon recovery runs.',
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    sizeStock: { 'UK 6': 8, 'UK 7': 12, 'UK 8': 14, 'UK 9': 9, 'UK 10': 6 },
    variants: [
      {
        colorName: 'Neon Lime / Black',
        colorHex: '#84CC16',
        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80',
        gallery: ['https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80']
      }
    ]
  },
  {
    id: 'p-cmp-01',
    sku: 'LGC-CMP-301',
    name: 'Logic Kinesio Base Compression Set',
    category: 'Compression & Gear',
    price: 1799,
    mrp: 2599,
    rating: 4.8,
    badge: 'MUSCLE RECOVERY',
    modelSpec: 'Second-Skin Graduated Fit | 220GSM Nylon-Spandex',
    description: 'Graduated compression weave that stabilizes quads, calves, and core during explosive track intervals.',
    sizes: ['S', 'M', 'L', 'XL'],
    sizeStock: { 'S': 14, 'M': 18, 'L': 15, 'XL': 9 },
    variants: [
      {
        colorName: 'Carbon Black / Gold',
        colorHex: '#0E1726',
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
        gallery: ['https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80']
      }
    ]
  }
];

let activeCategory = 'ALL';
let searchQuery = '';
let appliedCoupon = null;
let currentPdpState = { productId: null, variantIndex: 0, imageIndex: 0, selectedSize: null };
let adminSelectedSizes = new Set(['S', 'M', 'L', 'XL', 'XXL']);
let adminSizeCounts = { 'S': 10, 'M': 15, 'L': 15, 'XL': 10, 'XXL': 5 };

/* ==================== DATA HELPERS ==================== */
function getProducts() {
  const raw = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
  if (!raw) {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  }
  return JSON.parse(raw);
}

function saveProducts(list) {
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(list));
}

function getProductTotalStock(p) {
  if (p.sizeStock && typeof p.sizeStock === 'object') {
    return Object.values(p.sizeStock).reduce((sum, n) => sum + Number(n || 0), 0);
  }
  return Number(p.stock || 0);
}

function getSizeStock(p, size) {
  if (p.sizeStock && p.sizeStock[size] !== undefined) return Number(p.sizeStock[size]);
  return 10;
}

function getCoupons() {
  const raw = localStorage.getItem(STORAGE_KEYS.COUPONS);
  if (!raw) {
    localStorage.setItem(STORAGE_KEYS.COUPONS, JSON.stringify(DEFAULT_COUPONS));
    return DEFAULT_COUPONS;
  }
  return JSON.parse(raw);
}

function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART) || '[]');
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  updateCartUI();
}

function getWishlist() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST) || '[]');
}

function getCustomers() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
}

function getActiveCustomer() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.SESSION) || 'null');
}

function getOrders() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || '[]');
}

function getProductReviews(productId) {
  const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.REVIEWS) || '{}');
  return all[productId] || [
    { author: 'Vikram D. (Verified Buyer)', rating: 5, fitScore: 50, comment: 'Wore this for my Sunday 15K pace run in Salt Lake. Zero chafing and super breathable.', date: '18 Oct 2026' },
    { author: 'Rohan M. (Track Sprinter)', rating: 5, fitScore: 52, comment: 'Ankle zips make taking warmups off over spikes effortless. True to size.', date: '11 Oct 2026' }
  ];
}

function showToast(msg) {
  const box = document.getElementById('toastBox');
  if (!box) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  box.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

/* ==================== BOOTSTRAP ==================== */
document.addEventListener('DOMContentLoaded', () => {
  const pageType = document.body.getAttribute('data-page');
  if (pageType === 'store') {
    renderStoreCatalog();
    updateCartUI();
    updateWishlistUI();
    updateCustomerHeaderState();
  } else if (pageType === 'admin') {
    initAdminConsole();
  }
});

/* ============================================================================
   PART 1: CUSTOMER STOREFRONT, WISHLIST, PDP & BUNDLES
   ============================================================================ */
function navigateTo(viewName) {
  document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
  document.getElementById(`view-${viewName}`)?.classList.add('active');
  if (viewName === 'auth') renderCustomerAuthView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterByCategory(cat) {
  activeCategory = cat;
  navigateTo('home');
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-nav') === cat);
  });
  const titleEl = document.getElementById('catalogTitle');
  if (titleEl) titleEl.textContent = cat === 'ALL' ? 'ALL PERFORMANCE GEAR' : cat.toUpperCase();
  renderStoreCatalog();
}

function handleSearch(val) {
  searchQuery = val.trim().toLowerCase();
  navigateTo('home');
  renderStoreCatalog();
}

function scrollToSection(id) {
  navigateTo('home');
  setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80);
}

function renderStoreCatalog() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const inStockOnly = document.getElementById('inStockOnly')?.checked || false;
  const wishlist = getWishlist();

  let items = getProducts().filter(p => {
    const matchesCat = activeCategory === 'ALL' || p.category === activeCategory;
    const matchesQuery = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.sku.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery);
    const hasStock = !inStockOnly || getProductTotalStock(p) > 0;
    return matchesCat && matchesQuery && hasStock;
  });

  const sortMode = document.getElementById('sortSelect')?.value || 'featured';
  if (sortMode === 'price-asc') items.sort((a, b) => a.price - b.price);
  if (sortMode === 'price-desc') items.sort((a, b) => b.price - a.price);
  if (sortMode === 'rating') items.sort((a, b) => (b.rating || 4.8) - (a.rating || 4.8));

  grid.innerHTML = items.map(p => {
    const primaryVariant = p.variants[0] || { colorName: 'Standard', colorHex: '#F3C13A', image: '' };
    const discountPct = Math.round(((p.mrp - p.price) / p.mrp) * 100);
    const wished = wishlist.includes(p.id);
    const availSizes = p.sizes.filter(sz => getSizeStock(p, sz) > 0);

    return `
      <article class="product-card">
        <div class="card-media" onclick="openProductDetail('${p.id}', 0)">
          <img id="card-img-${p.id}" src="${primaryVariant.image}" alt="${p.name}" />
          <span class="card-badge">${p.badge || `${discountPct}% OFF`}</span>
          <button type="button" class="wishlist-heart-btn ${wished ? 'active' : ''}"
            onclick="event.stopPropagation(); toggleWishlistItem('${p.id}')">♥</button>
        </div>
        <div class="card-body">
          <span class="card-cat">${p.category} • ${p.sku}</span>
          <h3 class="card-title" onclick="openProductDetail('${p.id}', 0)">${p.name}</h3>
          <div class="card-swatches">
            ${p.variants.map((v, idx) => `
              <button type="button" class="swatch-dot ${idx === 0 ? 'active' : ''}"
                title="${v.colorName}"
                style="background:${v.colorHex}"
                onclick="previewCardVariant('${p.id}', '${v.image}', this)">
              </button>
            `).join('')}
          </div>
          <div class="card-sizes-preview">
            In-Stock Sizes: ${availSizes.length ? availSizes.join(', ') : '<span style="color:var(--danger)">Restocking Soon</span>'}
          </div>
          <div class="card-footer">
            <div class="price-block">
              <strong>₹${p.price.toLocaleString('en-IN')}</strong>
              <del>₹${p.mrp.toLocaleString('en-IN')}</del>
            </div>
            <button class="btn btn-dark btn-sm" onclick="openProductDetail('${p.id}', 0)">VIEW GEAR</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function previewCardVariant(productId, imgUrl, dotEl) {
  const img = document.getElementById(`card-img-${productId}`);
  if (img) img.src = imgUrl;
  dotEl.parentElement.querySelectorAll('.swatch-dot').forEach(d => d.classList.remove('active'));
  dotEl.classList.add('active');
}

/* ==================== WISHLIST ==================== */
function toggleWishlistItem(productId) {
  let list = getWishlist();
  if (list.includes(productId)) {
    list = list.filter(id => id !== productId);
    showToast('Removed from Saved Wishlist');
  } else {
    list.push(productId);
    showToast('Saved to Wishlist ♥');
  }
  localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(list));
  updateWishlistUI();
  renderStoreCatalog();
}

function toggleWishlistDrawer(open) {
  document.getElementById('wishlistDrawer')?.classList.toggle('open', open);
  document.getElementById('wishlistOverlay')?.classList.toggle('hidden', !open);
}

function updateWishlistUI() {
  const list = getWishlist();
  const countEl = document.getElementById('wishlistCount');
  if (countEl) countEl.textContent = list.length;

  const container = document.getElementById('wishlistItemsContainer');
  if (!container) return;

  const products = getProducts().filter(p => list.includes(p.id));
  if (products.length === 0) {
    container.innerHTML = `<p class="muted-text" style="padding:1rem;">No gear saved in your wishlist yet.</p>`;
    return;
  }

  container.innerHTML = products.map(p => `
    <div class="cart-item">
      <img src="${p.variants[0]?.image}" alt="${p.name}" />
      <div style="flex:1;">
        <strong>${p.name}</strong>
        <div>₹${p.price.toLocaleString('en-IN')}</div>
        <div style="display:flex;gap:0.4rem;margin-top:0.4rem;">
          <button class="btn btn-primary btn-sm" onclick="toggleWishlistDrawer(false); openProductDetail('${p.id}', 0)">SELECT SIZE</button>
          <button class="btn btn-outline-dark btn-sm" onclick="toggleWishlistItem('${p.id}')">✕</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==================== DEDICATED PRODUCT DETAIL PAGE (PDP) ==================== */
function openProductDetail(productId, variantIdx = 0) {
  const product = getProducts().find(p => p.id === productId);
  if (!product) return;

  const firstInStockSize = product.sizes.find(sz => getSizeStock(product, sz) > 0) || product.sizes[0];
  currentPdpState = {
    productId: product.id,
    variantIndex: variantIdx,
    imageIndex: 0,
    selectedSize: firstInStockSize
  };

  renderPdpView();
  navigateTo('pdp');
}

function renderPdpView() {
  const product = getProducts().find(p => p.id === currentPdpState.productId);
  const container = document.getElementById('pdpContent');
  if (!product || !container) return;

  const activeVariant = product.variants[currentPdpState.variantIndex] || product.variants[0];
  const gallery = (activeVariant.gallery && activeVariant.gallery.length) ? activeVariant.gallery : [activeVariant.image];
  const mainImage = gallery[currentPdpState.imageIndex] || activeVariant.image;
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const sizeQty = getSizeStock(product, currentPdpState.selectedSize);

  const complement = getProducts().find(p => p.category !== product.category) || getProducts()[0];
  const bundlePrice = Math.round((product.price + complement.price) * 0.85);

  const reviews = getProductReviews(product.id);
  const avgFit = Math.round(reviews.reduce((s, r) => s + Number(r.fitScore || 50), 0) / reviews.length);

  container.innerHTML = `
    <div class="pdp-grid">
      <div class="pdp-gallery">
        <img src="${mainImage}" alt="${product.name}" class="pdp-main-img" />
        <div class="pdp-thumbs-row">
          ${gallery.map((imgUrl, idx) => `
            <img src="${imgUrl}" class="pdp-thumb ${idx === currentPdpState.imageIndex ? 'active' : ''}"
              onclick="selectPdpThumbnail(${idx})" alt="Thumb" />
          `).join('')}
        </div>
      </div>

      <div class="pdp-info">
        <span class="eyebrow-tag">${product.category} • SKU: ${product.sku}</span>
        <h2>${product.name}</h2>
        <div class="pdp-price">
          ₹${product.price.toLocaleString('en-IN')}
          <del style="font-size:1.05rem;color:#64748B;margin-left:8px;">₹${product.mrp.toLocaleString('en-IN')}</del>
          <span style="font-size:0.88rem;color:#16A34A;margin-left:8px;">(${discount}% OFF)</span>
        </div>

        <div class="model-spec-banner">🏃 ${product.modelSpec || 'Athletic Tapered Performance Cut | True to Size'}</div>
        <p style="color:#475569;margin-bottom:0.85rem;">${product.description}</p>

        <div class="pdp-selector-label">
          <span>COLORWAY: <strong>${activeVariant.colorName}</strong></span>
        </div>
        <div class="card-swatches">
          ${product.variants.map((v, idx) => `
            <button type="button" class="swatch-dot ${idx === currentPdpState.variantIndex ? 'active' : ''}"
              style="background:${v.colorHex};width:28px;height:28px;"
              onclick="selectPdpVariant(${idx})">
            </button>
          `).join('')}
        </div>

        <div class="pdp-selector-label">
          <span>SELECT SIZE: <strong>${currentPdpState.selectedSize}</strong></span>
          <a href="javascript:void(0)" onclick="toggleSizeModal(true)" style="color:#0E1726;">📏 Size Chart</a>
        </div>
        <div class="pdp-size-grid">
          ${product.sizes.map(sz => {
            const q = getSizeStock(product, sz);
            return `
              <button type="button" class="size-btn ${sz === currentPdpState.selectedSize ? 'active' : ''} ${q <= 0 ? 'oos' : ''}"
                onclick="selectPdpSize('${sz}')">
                ${sz}
              </button>
            `;
          }).join('')}
        </div>

        <p style="font-family:var(--font-mono);font-size:0.8rem;margin:0.85rem 0;color:${sizeQty > 0 ? '#16A34A' : '#DC2626'};">
          ${sizeQty > 0
            ? `✓ Size ${currentPdpState.selectedSize} In Stock (${sizeQty} units ready for dispatch)`
            : `✕ Size ${currentPdpState.selectedSize} Sold Out`}
        </p>

        ${sizeQty > 0 ? `
          <div style="display:flex;gap:0.75rem;">
            <button class="btn btn-primary btn-block" onclick="addPdpToCart()">
              ADD TO BAG — ₹${product.price.toLocaleString('en-IN')}
            </button>
            <button class="btn btn-outline-dark" onclick="toggleWishlistItem('${product.id}')">♥</button>
          </div>
        ` : `
          <div class="pin-row">
            <input type="email" id="restockEmailInput" placeholder="Enter email/WhatsApp for Size ${currentPdpState.selectedSize} alert" />
            <button class="btn btn-dark" onclick="registerRestockAlert('${product.sku}', '${currentPdpState.selectedSize}')">NOTIFY ME</button>
          </div>
        `}

        <!-- PIN CODE SERVICEABILITY CHECKER -->
        <div class="pin-checker-box">
          <strong style="font-family:var(--font-mono);font-size:0.76rem;">📍 CHECK DELIVERY & COD AVAILABILITY</strong>
          <div class="pin-row">
            <input type="text" id="pinCheckInput" maxlength="6" placeholder="Enter 6-digit PIN (e.g. 700091)" />
            <button type="button" class="btn btn-dark btn-sm" onclick="checkPinServiceability()">CHECK</button>
          </div>
          <div id="pinCheckOutput" style="font-size:0.78rem;margin-top:0.4rem;font-family:var(--font-mono);"></div>
        </div>

        <!-- COMPLETE THE KIT 15% BUNDLE BUILDER -->
        <div class="bundle-card">
          <div>
            <span class="eyebrow-tag" style="margin-bottom:0.25rem;">COMPLETE THE KIT (SAVE 15%)</span>
            <div><strong>+ ${complement.name}</strong></div>
            <small>Bundle Both for <strong>₹${bundlePrice.toLocaleString('en-IN')}</strong> <del>₹${(product.price + complement.price).toLocaleString('en-IN')}</del></small>
          </div>
          <button class="btn btn-dark btn-sm" onclick="addKitBundleToCart('${product.id}', '${complement.id}')">+ ADD KIT</button>
        </div>
      </div>
    </div>

    <!-- VERIFIED ATHLETE REVIEWS & FIT SLIDER -->
    <div class="pdp-reviews-section">
      <div style="display:grid;grid-template-columns:1fr 1.3fr;gap:2rem;align-items:start;">
        <div>
          <h3>ATHLETE FIT CONSENSUS</h3>
          <p class="muted-text">Based on ${reviews.length} verified Logic Sports buyers</p>
          <div class="fit-meter-bar">
            <div class="fit-meter-dot" style="left:${avgFit}%;"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:0.72rem;">
            <span>Runs Small</span>
            <strong>True to Size</strong>
            <span>Runs Large</span>
          </div>

          <form onsubmit="submitProductReview(event, '${product.id}')" style="margin-top:1.5rem;border-top:1px solid var(--border);padding-top:1rem;">
            <h4>WRITE A GEAR REVIEW</h4>
            <div class="input-group">
              <label>Your Name</label>
              <input type="text" id="revAuthor" required placeholder="Athlete Name" />
            </div>
            <div class="input-group">
              <label>How Did It Fit?</label>
              <select id="revFit">
                <option value="50">True to Size (Spot On)</option>
                <option value="25">Runs Slightly Snug</option>
                <option value="75">Runs Slightly Relaxed</option>
              </select>
            </div>
            <div class="input-group">
              <label>Performance Review</label>
              <textarea id="revComment" rows="2" required placeholder="Share how the fabric/cushioning performed..."></textarea>
            </div>
            <button type="submit" class="btn btn-dark btn-sm">POST VERIFIED REVIEW</button>
          </form>
        </div>

        <div>
          <h3>VERIFIED BUYER REVIEWS (${reviews.length})</h3>
          <div style="margin-top:1rem;display:flex;flex-direction:column;gap:0.85rem;">
            ${reviews.map(r => `
              <div style="border:1px solid var(--border);padding:0.9rem;background:#F8FAFC;">
                <div style="display:flex;justify-content:space-between;">
                  <strong>${r.author}</strong>
                  <span style="color:var(--gold);background:var(--navy);padding:0 6px;font-family:var(--font-mono);font-size:0.75rem;">★ ${r.rating}/5</span>
                </div>
                <p style="font-size:0.88rem;margin:0.4rem 0;">"${r.comment}"</p>
                <small class="muted-text">Reviewed on ${r.date}</small>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function selectPdpVariant(idx) {
  currentPdpState.variantIndex = idx;
  currentPdpState.imageIndex = 0;
  renderPdpView();
}

function selectPdpThumbnail(imgIdx) {
  currentPdpState.imageIndex = imgIdx;
  renderPdpView();
}

function selectPdpSize(sz) {
  currentPdpState.selectedSize = sz;
  renderPdpView();
}

function checkPinServiceability() {
  const pin = document.getElementById('pinCheckInput')?.value.trim();
  const out = document.getElementById('pinCheckOutput');
  if (!/^[0-9]{6}$/.test(pin)) {
    out.style.color = 'var(--danger)';
    out.textContent = 'Please enter a valid 6-digit Indian PIN code.';
    return;
  }
  const isMetro = pin.startsWith('700') || pin.startsWith('110') || pin.startsWith('400') || pin.startsWith('560');
  out.style.color = 'var(--success)';
  out.textContent = isMetro
    ? `✓ Express 48-Hour Delivery to ${pin} | Cash on Delivery & 7-Day Size Exchange Available`
    : `✓ Standard 3–4 Day Air Delivery to ${pin} | Prepaid & COD Supported`;
}

function registerRestockAlert(sku, size) {
  const contact = document.getElementById('restockEmailInput')?.value.trim();
  if (!contact) return showToast('Enter your email or WhatsApp number.');
  const alerts = JSON.parse(localStorage.getItem(STORAGE_KEYS.RESTOCK_ALERTS) || '[]');
  alerts.unshift({ sku, size, contact, date: new Date().toLocaleDateString('en-IN') });
  localStorage.setItem(STORAGE_KEYS.RESTOCK_ALERTS, JSON.stringify(alerts));
  showToast(`Restock alert registered for ${sku} (${size})!`);
}

function submitProductReview(e, productId) {
  e.preventDefault();
  const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.REVIEWS) || '{}');
  const list = getProductReviews(productId);
  list.unshift({
    author: document.getElementById('revAuthor').value.trim() + ' (Verified Athlete)',
    rating: 5,
    fitScore: Number(document.getElementById('revFit').value),
    comment: document.getElementById('revComment').value.trim(),
    date: new Date().toLocaleDateString('en-IN')
  });
  all[productId] = list;
  localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(all));
  renderPdpView();
  showToast('Thank you! Your review has been published.');
}

function addPdpToCart() {
  const product = getProducts().find(p => p.id === currentPdpState.productId);
  const avail = getSizeStock(product, currentPdpState.selectedSize);
  if (!product || avail <= 0) return showToast('Selected size is out of stock!');

  const variant = product.variants[currentPdpState.variantIndex] || product.variants[0];
  const cartKey = `${product.id}__${variant.colorName}__${currentPdpState.selectedSize}`;
  const cart = getCart();
  const existing = cart.find(item => item.cartKey === cartKey);

  if (existing) {
    existing.qty = Math.min(avail, existing.qty + 1);
  } else {
    cart.push({
      cartKey,
      productId: product.id,
      sku: product.sku,
      name: product.name,
      price: product.price,
      colorName: variant.colorName,
      size: currentPdpState.selectedSize,
      image: variant.image,
      qty: 1
    });
  }

  saveCart(cart);
  showToast(`Added ${product.name} (${currentPdpState.selectedSize}) to bag!`);
  toggleCartDrawer(true);
}

function addKitBundleToCart(id1, id2) {
  const p1 = getProducts().find(p => p.id === id1);
  const p2 = getProducts().find(p => p.id === id2);
  if (!p1 || !p2) return;

  const cart = getCart();
  [p1, p2].forEach(prod => {
    const v = prod.variants[0];
    const sz = prod.sizes.find(s => getSizeStock(prod, s) > 0) || prod.sizes[0];
    const cartKey = `${prod.id}__${v.colorName}__${sz}`;
    const existing = cart.find(i => i.cartKey === cartKey);
    if (existing) existing.qty += 1;
    else cart.push({
      cartKey,
      productId: prod.id,
      sku: prod.sku,
      name: prod.name,
      price: Math.round(prod.price * 0.85),
      colorName: v.colorName,
      size: sz,
      image: v.image,
      qty: 1
    });
  });

  saveCart(cart);
  showToast('15% Complete-the-Kit Bundle added to bag!');
  toggleCartDrawer(true);
}

/* ==================== CUSTOM TEAM / BULK INQUIRIES ==================== */
function submitBulkTeamInquiry(e) {
  e.preventDefault();
  const leads = JSON.parse(localStorage.getItem(STORAGE_KEYS.BULK_LEADS) || '[]');
  leads.unshift({
    id: 'TEAM-' + Math.floor(1000 + Math.random() * 9000),
    org: document.getElementById('bulkOrg').value.trim(),
    contact: document.getElementById('bulkContact').value.trim(),
    email: document.getElementById('bulkEmail').value.trim(),
    phone: document.getElementById('bulkPhone').value.trim(),
    category: document.getElementById('bulkCategory').value,
    qty: Number(document.getElementById('bulkQty').value),
    notes: document.getElementById('bulkNotes').value.trim(),
    date: new Date().toLocaleDateString('en-IN')
  });
  localStorage.setItem(STORAGE_KEYS.BULK_LEADS, JSON.stringify(leads));
  e.target.reset();
  showToast('Team Kit Inquiry received! Our B2B specialist will contact you on WhatsApp.');
}

/* ==================== CUSTOMER AUTH, LIVE TRACKER, SIZE EXCHANGE & GST INVOICE ==================== */
function switchAuthTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('tabLoginBtn').classList.toggle('active', isLogin);
  document.getElementById('tabSignupBtn').classList.toggle('active', !isLogin);
  document.getElementById('loginForm').classList.toggle('hidden', !isLogin);
  document.getElementById('signupForm').classList.toggle('hidden', isLogin);
}

function handleCustomerSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const phone = document.getElementById('signupPhone').value.trim();
  const password = document.getElementById('signupPassword').value;
  const errEl = document.getElementById('signupError');

  const users = getCustomers();
  if (users.some(u => u.email === email)) {
    errEl.textContent = 'An account with this email already exists.';
    errEl.classList.remove('hidden');
    return;
  }

  const newUser = { id: 'USR-' + Date.now(), name, email, phone, password };
  users.push(newUser);
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(newUser));

  errEl.classList.add('hidden');
  updateCustomerHeaderState();
  renderCustomerAuthView();
  showToast(`Welcome to Logic Sports, ${name}!`);
}

function handleCustomerLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');

  const user = getCustomers().find(u => u.email === email && u.password === password);
  if (!user) {
    errEl.textContent = 'Invalid email or password.';
    errEl.classList.remove('hidden');
    return;
  }

  localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(user));
  errEl.classList.add('hidden');
  updateCustomerHeaderState();
  renderCustomerAuthView();
  showToast(`Welcome back, ${user.name}!`);
}

function handleCustomerLogout() {
  localStorage.removeItem(STORAGE_KEYS.SESSION);
  updateCustomerHeaderState();
  renderCustomerAuthView();
  showToast('Signed out.');
}

function updateCustomerHeaderState() {
  const user = getActiveCustomer();
  const label = document.getElementById('accountBtnLabel');
  if (label) label.textContent = user ? `HI, ${user.name.split(' ')[0].toUpperCase()}` : 'LOGIN / SIGN UP';
}

function renderCustomerAuthView() {
  const user = getActiveCustomer();
  const guestBox = document.getElementById('guestAuthContainer');
  const profileBox = document.getElementById('customerProfileContainer');
  if (!guestBox || !profileBox) return;

  if (!user) {
    guestBox.classList.remove('hidden');
    profileBox.classList.add('hidden');
    return;
  }

  guestBox.classList.add('hidden');
  profileBox.classList.remove('hidden');
  document.getElementById('profileUserName').textContent = user.name;
  document.getElementById('profileUserEmail').textContent = `${user.email} • ${user.phone || ''}`;

  const steps = ['Processing', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'];
  const myOrders = getOrders().filter(o => o.email.toLowerCase() === user.email.toLowerCase());
  const listEl = document.getElementById('customerOrdersList');

  if (myOrders.length === 0) {
    listEl.innerHTML = `<p class="muted-text" style="margin-top:0.75rem;">You haven't placed any orders yet.</p>`;
    return;
  }

  listEl.innerHTML = myOrders.map(o => {
    const currentStepIdx = Math.max(0, steps.indexOf(o.status));
    return `
      <div style="border:2px solid var(--navy);padding:1.1rem;margin-top:1rem;background:#F8FAFC;">
        <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;">
          <div>
            <strong>${o.id}</strong> • <small>${o.date}</small>
            <span class="eyebrow-tag" style="margin-left:0.5rem;">AWB: LGC${o.id.slice(-5)}IN</span>
          </div>
          <div>
            <button class="btn btn-outline-dark btn-sm" onclick="printGstInvoice('${o.id}')">🖨️ GST INVOICE</button>
            <button class="btn btn-dark btn-sm" onclick="openExchangeModal('${o.id}')">⇄ SIZE EXCHANGE</button>
          </div>
        </div>

        <div class="tracking-stepper">
          ${steps.map((st, idx) => `
            <div class="step-node ${idx <= currentStepIdx ? 'done' : ''}">${idx + 1}. ${st}</div>
          `).join('')}
        </div>

        <div style="font-size:0.86rem;margin-top:0.5rem;">
          ${o.items.map(i => `${i.name} (${i.colorName}, Size: <strong>${i.size}</strong>) × ${i.qty}`).join(' | ')}
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:0.5rem;font-size:0.85rem;">
          <span>Total Paid: <strong>₹${o.total.toLocaleString('en-IN')}</strong> (${o.payment})</span>
          ${o.exchangeRequest ? `<span style="color:var(--danger);font-weight:700;">⇄ Exchange Requested: ${o.exchangeRequest}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function openExchangeModal(orderId) {
  document.getElementById('exOrderId').value = orderId;
  document.getElementById('exchangeModal').classList.remove('hidden');
}

function closeExchangeModal() {
  document.getElementById('exchangeModal').classList.add('hidden');
}

function submitSizeExchange(e) {
  e.preventDefault();
  const orderId = document.getElementById('exOrderId').value;
  const newSize = document.getElementById('exNewSize').value.trim();
  const reason = document.getElementById('exReason').value;

  const orders = getOrders();
  const ord = orders.find(o => o.id === orderId);
  if (ord) {
    ord.exchangeRequest = `Swap to ${newSize} (${reason})`;
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  }
  closeExchangeModal();
  renderCustomerAuthView();
  showToast(`Exchange pickup booked for Order ${orderId}!`);
}

function printGstInvoice(orderId) {
  const o = getOrders().find(x => x.id === orderId);
  if (!o) return;
  const taxable = Math.round(o.total / 1.12);
  const gst = o.total - taxable;

  const win = window.open('', '_blank', 'width=760,height=650');
  win.document.write(`
    <html><head><title>Tax Invoice - ${o.id}</title>
    <style>body{font-family:monospace;padding:28px;color:#0E1726} table{width:100%;border-collapse:collapse;margin:16px 0} th,td{border:1px solid #0E1726;padding:8px;text-align:left}</style>
    </head><body onload="window.print()">
      <h2>LOGIC SPORTS PERFORMANCE PVT. LTD. — GST TAX INVOICE</h2>
      <p><strong>GSTIN:</strong> 19AALCL2026K1Z5 | <strong>Dispatch Hub:</strong> Salt Lake Sector V, Kolkata - 700091</p>
      <hr/>
      <p><strong>Invoice / Order ID:</strong> ${o.id} | <strong>Date:</strong> ${o.date}</p>
      <p><strong>Billed To:</strong> ${o.customerName} (${o.phone})<br/><strong>Ship To:</strong> ${o.address}</p>
      ${o.gstin ? `<p><strong>Customer GSTIN:</strong> ${o.gstin}</p>` : ''}
      <table>
        <thead><tr><th>SKU / Item</th><th>Variant / Size</th><th>Qty</th><th>Total (₹)</th></tr></thead>
        <tbody>
          ${o.items.map(i => `<tr><td>${i.name}</td><td>${i.colorName} / ${i.size}</td><td>${i.qty}</td><td>₹${(i.price * i.qty).toLocaleString('en-IN')}</td></tr>`).join('')}
        </tbody>
      </table>
      <p>Taxable Value: ₹${taxable.toLocaleString('en-IN')} | CGST+SGST (12% Apparel/Footwear): ₹${gst.toLocaleString('en-IN')}</p>
      <h3>GRAND TOTAL: ₹${o.total.toLocaleString('en-IN')} (${o.payment})</h3>
    </body></html>
  `);
  win.document.close();
}

/* ==================== CART & DYNAMIC COUPONS ==================== */
function toggleCartDrawer(open) {
  document.getElementById('cartDrawer')?.classList.toggle('open', open);
  document.getElementById('cartOverlay')?.classList.toggle('hidden', !open);
}

function updateCartUI() {
  const cart = getCart();
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = cart.reduce((sum, i) => sum + i.qty, 0);

  const container = document.getElementById('cartItemsContainer');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<p class="muted-text" style="padding:1rem;">Your Logic Sports gear bag is empty.</p>`;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div style="flex:1;">
          <strong style="font-size:0.88rem;">${item.name}</strong>
          <div style="font-size:0.75rem;color:#64748B;">${item.colorName} | Size: <strong>${item.size}</strong></div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.35rem;">
            <span>₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
            <div>
              <button class="btn btn-outline-dark btn-sm" onclick="changeCartQty('${item.cartKey}', -1)">-</button>
              <span style="padding:0 6px;font-weight:700;">${item.qty}</span>
              <button class="btn btn-outline-dark btn-sm" onclick="changeCartQty('${item.cartKey}', 1)">+</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let discount = 0;
  if (appliedCoupon && subtotal >= appliedCoupon.minOrder) {
    discount = Math.round(subtotal * (appliedCoupon.pct / 100));
  }
  const total = Math.max(0, subtotal - discount);

  document.getElementById('cartSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  document.getElementById('cartDiscount').textContent = `-₹${discount.toLocaleString('en-IN')}`;
  document.getElementById('cartTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
  const tagEl = document.getElementById('activeCouponTag');
  if (tagEl) tagEl.textContent = appliedCoupon ? `(${appliedCoupon.code})` : '';
}

function changeCartQty(cartKey, delta) {
  let cart = getCart();
  const item = cart.find(i => i.cartKey === cartKey);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.cartKey !== cartKey);
  saveCart(cart);
}

function applyPromoCode() {
  const code = document.getElementById('promoInput')?.value.trim().toUpperCase();
  const subtotal = getCart().reduce((s, i) => s + i.price * i.qty, 0);
  const match = getCoupons().find(c => c.code === code);

  if (!match) return showToast('Invalid promo code.');
  if (subtotal < match.minOrder) {
    return showToast(`Code ${match.code} requires a minimum order of ₹${match.minOrder}.`);
  }
  appliedCoupon = match;
  updateCartUI();
  showToast(`${match.code} applied: ${match.pct}% OFF!`);
}

function openCheckoutModal() {
  if (getCart().length === 0) return showToast('Add items to your bag first!');
  toggleCartDrawer(false);
  const user = getActiveCustomer();
  if (user) {
    document.getElementById('chkName').value = user.name || '';
    document.getElementById('chkEmail').value = user.email || '';
    document.getElementById('chkPhone').value = user.phone || '';
  }
  document.getElementById('checkoutModal').classList.remove('hidden');
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal').classList.add('hidden');
}

function submitCustomerOrder(e) {
  e.preventDefault();
  const cart = getCart();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = (appliedCoupon && subtotal >= appliedCoupon.minOrder)
    ? Math.round(subtotal * (appliedCoupon.pct / 100))
    : 0;
  const total = Math.max(0, subtotal - discount);

  const newOrder = {
    id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
    customerName: document.getElementById('chkName').value.trim(),
    email: document.getElementById('chkEmail').value.trim(),
    phone: document.getElementById('chkPhone').value.trim(),
    address: `${document.getElementById('chkAddress').value.trim()}, ${document.getElementById('chkCity').value.trim()} - ${document.getElementById('chkPin').value.trim()}`,
    payment: document.getElementById('chkPayment').value,
    gstin: document.getElementById('chkGstin')?.value.trim() || '',
    items: cart,
    total,
    status: 'Processing',
    date: new Date().toLocaleDateString('en-IN')
  };

  const products = getProducts();
  cart.forEach(cItem => {
    const prod = products.find(p => p.id === cItem.productId);
    if (prod && prod.sizeStock && prod.sizeStock[cItem.size] !== undefined) {
      prod.sizeStock[cItem.size] = Math.max(0, Number(prod.sizeStock[cItem.size]) - cItem.qty);
    }
  });
  saveProducts(products);

  const orders = getOrders();
  orders.unshift(newOrder);
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));

  appliedCoupon = null;
  saveCart([]);
  closeCheckoutModal();
  renderStoreCatalog();
  showToast(`Order ${newOrder.id} confirmed!`);
}

function calculateTracksuitFit() {
  const h = parseFloat(document.getElementById('fitHeight').value);
  const w = parseFloat(document.getElementById('fitWeight').value);
  const pref = document.getElementById('fitPref').value;
  const out = document.getElementById('fitResultBox');
  if (!h || !w) return showToast('Enter both height and weight.');

  let size = 'M';
  if (w < 62 && h < 172) size = 'S';
  else if (w <= 74 && h <= 178) size = 'M';
  else if (w <= 85 && h <= 184) size = 'L';
  else if (w <= 96) size = 'XL';
  else size = 'XXL';

  if (pref === 'relaxed' && size === 'M') size = 'L';
  if (pref === 'compression' && size === 'L') size = 'M';

  out.classList.remove('hidden');
  out.innerHTML = `RECOMMENDED LOGIC TRACKSUIT SIZE: <strong style="color:var(--gold);font-size:1.25rem;">${size}</strong> (${pref.toUpperCase()} CUT)`;
}

function toggleSizeModal(show) {
  document.getElementById('sizeGuideModal')?.classList.toggle('hidden', !show);
}

function togglePolicyModal(show) {
  document.getElementById('policyModal')?.classList.toggle('hidden', !show);
}

/* ============================================================================
   PART 2: ADMIN CONSOLE (admin.html)
   ============================================================================ */
function initAdminConsole() {
  const unlocked = sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  document.getElementById('adminLoginGate').classList.toggle('hidden', unlocked);
  document.getElementById('adminWorkspace').classList.toggle('hidden', !unlocked);

  if (unlocked) {
    loadCategoryDefaultSizes();
    resetAdminProductForm();
    renderAdminDashboard();
  }
}

function handleAdminLogin(e) {
  e.preventDefault();
  const email = document.getElementById('adminEmail').value.trim();
  const pass = document.getElementById('adminPass').value;
  const err = document.getElementById('adminLoginError');

  if (email === 'admin@logicsports.in' && pass === 'logic2026') {
    sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
    err.classList.add('hidden');
    initAdminConsole();
    showToast('Admin ERP Unlocked');
  } else {
    err.textContent = 'Invalid staff credentials.';
    err.classList.remove('hidden');
  }
}

function handleAdminLogout() {
  sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
  initAdminConsole();
}

function loadCategoryDefaultSizes() {
  const cat = document.getElementById('prodCategory')?.value || 'Tracksuits';
  if (cat === 'Running Shoes') {
    adminSelectedSizes = new Set(['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']);
    adminSizeCounts = { 'UK 6': 6, 'UK 7': 10, 'UK 8': 12, 'UK 9': 10, 'UK 10': 6, 'UK 11': 4 };
  } else {
    adminSelectedSizes = new Set(['S', 'M', 'L', 'XL', 'XXL']);
    adminSizeCounts = { 'S': 8, 'M': 14, 'L': 14, 'XL': 8, 'XXL': 4 };
  }
  renderAdminSizePills();
}

function renderAdminSizePills() {
  const container = document.getElementById('sizePillsContainer');
  if (!container) return;
  const cat = document.getElementById('prodCategory')?.value || 'Tracksuits';
  const preset = cat === 'Running Shoes'
    ? ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
    : ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];

  const allSizes = Array.from(new Set([...preset, ...adminSelectedSizes]));
  container.innerHTML = allSizes.map(sz => `
    <button type="button" class="size-pill ${adminSelectedSizes.has(sz) ? 'selected' : ''}"
      onclick="toggleAdminSize('${sz}')">${sz}</button>
  `).join('');

  renderAdminSizeStockMatrix();
}

function renderAdminSizeStockMatrix() {
  const matrixEl = document.getElementById('sizeStockMatrixGrid');
  if (!matrixEl) return;
  const sizes = Array.from(adminSelectedSizes);
  matrixEl.innerHTML = sizes.map(sz => `
    <div class="matrix-cell">
      <label>${sz} QTY</label>
      <input type="number" min="0" value="${adminSizeCounts[sz] ?? 10}"
        onchange="adminSizeCounts['${sz}'] = Number(this.value)" />
    </div>
  `).join('');
}

function toggleAdminSize(sz) {
  if (adminSelectedSizes.has(sz)) adminSelectedSizes.delete(sz);
  else {
    adminSelectedSizes.add(sz);
    if (adminSizeCounts[sz] === undefined) adminSizeCounts[sz] = 10;
  }
  renderAdminSizePills();
}

function addCustomSizePill() {
  const inp = document.getElementById('customSizeInput');
  const val = inp.value.trim().toUpperCase();
  if (!val) return;
  adminSelectedSizes.add(val);
  adminSizeCounts[val] = 10;
  inp.value = '';
  renderAdminSizePills();
}

function addColorVariantRow(colorName = '', colorHex = '#F3C13A', galleryStr = '') {
  const list = document.getElementById('colorVariantsList');
  if (!list) return;
  const row = document.createElement('div');
  row.className = 'variant-row';
  row.innerHTML = `
    <input type="text" class="var-name" placeholder="Color Name (e.g. Solar Gold)" value="${colorName}" required />
    <input type="color" class="var-hex" value="${colorHex}" />
    <input type="text" class="var-img" placeholder="Image URL(s) comma-separated" value="${galleryStr}" required />
    <button type="button" class="btn btn-danger btn-sm" onclick="this.parentElement.remove()">✕</button>
  `;
  list.appendChild(row);
}

function resetAdminProductForm() {
  const form = document.getElementById('adminProductForm');
  if (!form) return;
  form.reset();
  document.getElementById('editProductId').value = '';
  document.getElementById('formModeTitle').textContent = 'ADD / EDIT PRODUCT & SIZE MATRIX';
  loadCategoryDefaultSizes();
  const list = document.getElementById('colorVariantsList');
  if (list) {
    list.innerHTML = '';
    addColorVariantRow('Logic Gold / Navy', '#F3C13A', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80');
  }
}

function saveAdminProduct(e) {
  e.preventDefault();
  const sizes = Array.from(adminSelectedSizes);
  if (sizes.length === 0) return showToast('Select at least one size!');

  const sizeStock = {};
  sizes.forEach(sz => {
    sizeStock[sz] = Number(adminSizeCounts[sz] ?? 0);
  });

  const variantRows = document.querySelectorAll('#colorVariantsList .variant-row');
  const variants = Array.from(variantRows).map(r => {
    const urls = r.querySelector('.var-img').value.split(',').map(s => s.trim()).filter(Boolean);
    return {
      colorName: r.querySelector('.var-name').value.trim(),
      colorHex: r.querySelector('.var-hex').value,
      image: urls[0] || '',
      gallery: urls
    };
  }).filter(v => v.colorName && v.image);

  if (variants.length === 0) return showToast('Add at least one color variant with an image URL!');

  const editId = document.getElementById('editProductId').value;
  const products = getProducts();

  const payload = {
    id: editId || ('p-' + Date.now()),
    name: document.getElementById('prodName').value.trim(),
    sku: document.getElementById('prodSku').value.trim().toUpperCase(),
    category: document.getElementById('prodCategory').value,
    price: Number(document.getElementById('prodPrice').value),
    mrp: Number(document.getElementById('prodMrp').value),
    badge: document.getElementById('prodBadge').value.trim().toUpperCase() || 'NEW DROP',
    modelSpec: document.getElementById('prodModelSpec').value.trim(),
    description: document.getElementById('prodDesc').value.trim(),
    sizes,
    sizeStock,
    variants,
    rating: 4.9
  };

  if (editId) {
    const idx = products.findIndex(p => p.id === editId);
    if (idx > -1) products[idx] = payload;
  } else {
    products.unshift(payload);
  }

  saveProducts(products);
  resetAdminProductForm();
  renderAdminDashboard();
  showToast('Product & Size Matrix saved to live storefront!');
}

function editAdminProduct(id) {
  const p = getProducts().find(item => item.id === id);
  if (!p) return;

  document.getElementById('editProductId').value = p.id;
  document.getElementById('formModeTitle').textContent = `EDITING SKU: ${p.sku}`;
  document.getElementById('prodName').value = p.name;
  document.getElementById('prodSku').value = p.sku;
  document.getElementById('prodCategory').value = p.category;
  document.getElementById('prodPrice').value = p.price;
  document.getElementById('prodMrp').value = p.mrp;
  document.getElementById('prodBadge').value = p.badge || '';
  document.getElementById('prodModelSpec').value = p.modelSpec || '';
  document.getElementById('prodDesc').value = p.description;

  adminSelectedSizes = new Set(p.sizes);
  adminSizeCounts = { ...(p.sizeStock || {}) };
  renderAdminSizePills();

  const list = document.getElementById('colorVariantsList');
  list.innerHTML = '';
  p.variants.forEach(v => addColorVariantRow(v.colorName, v.colorHex, (v.gallery || [v.image]).join(', ')));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteAdminProduct(id) {
  saveProducts(getProducts().filter(p => p.id !== id));
  renderAdminDashboard();
  showToast('Product deleted.');
}

function saveAdminCoupon(e) {
  e.preventDefault();
  const code = document.getElementById('cpnCode').value.trim().toUpperCase();
  const pct = Number(document.getElementById('cpnPct').value);
  const minOrder = Number(document.getElementById('cpnMin').value);
  const list = getCoupons().filter(c => c.code !== code);
  list.push({ code, pct, minOrder });
  localStorage.setItem(STORAGE_KEYS.COUPONS, JSON.stringify(list));
  e.target.reset();
  renderAdminDashboard();
  showToast(`Coupon ${code} (${pct}% OFF) active!`);
}

function deleteAdminCoupon(code) {
  const list = getCoupons().filter(c => c.code !== code);
  localStorage.setItem(STORAGE_KEYS.COUPONS, JSON.stringify(list));
  renderAdminDashboard();
}

function updateOrderStatus(orderId, status) {
  const orders = getOrders();
  const ord = orders.find(o => o.id === orderId);
  if (ord) {
    ord.status = status;
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    showToast(`Order ${orderId} updated to ${status}`);
  }
}

function printPackingSlip(orderId) {
  const o = getOrders().find(x => x.id === orderId);
  if (!o) return;
  const win = window.open('', '_blank', 'width=460,height=620');
  win.document.write(`
    <html><head><title>Dispatch Slip ${o.id}</title>
    <style>body{font-family:monospace;padding:18px;border:3px solid #000} .qr{border:2px solid #000;padding:10px;text-align:center;font-weight:bold;margin:12px 0}</style>
    </head><body onload="window.print()">
      <h2>LOGIC SPORTS — EXPRESS DISPATCH LABEL</h2>
      <div class="qr">||| |||| || |||| ||| ||||<br/>AWB: LGC${o.id.slice(-5)}IN • ${o.id}</div>
      <p><strong>DELIVER TO:</strong><br/>${o.customerName}<br/>${o.address}<br/>Tel: ${o.phone}</p>
      <hr/>
      <p><strong>PAYMENT MODE:</strong> ${o.payment}<br/><strong>COLLECT/VALUE:</strong> ₹${o.total.toLocaleString('en-IN')}</p>
      <hr/>
      <p><strong>PICK LIST ITEMS:</strong><br/>
      ${o.items.map(i => `[ ] ${i.sku || ''} ${i.name} — ${i.colorName} — SIZE: ${i.size} (Qty: ${i.qty})`).join('<br/>')}</p>
    </body></html>
  `);
  win.document.close();
}

function exportInventoryCSV() {
  const rows = [['SKU', 'Product Name', 'Category', 'Price', 'MRP', 'Total Stock', 'Per-Size Breakdown']];
  getProducts().forEach(p => {
    const breakdown = p.sizes.map(s => `${s}:${getSizeStock(p, s)}`).join(' | ');
    rows.push([p.sku, `"${p.name}"`, p.category, p.price, p.mrp, getProductTotalStock(p), `"${breakdown}"`]);
  });
  triggerCsvDownload('logic_sports_inventory.csv', rows);
}

function exportOrdersCSV() {
  const rows = [['Order ID', 'Date', 'Customer', 'Phone', 'Total INR', 'Payment', 'Status']];
  getOrders().forEach(o => {
    rows.push([o.id, o.date, `"${o.customerName}"`, o.phone, o.total, `"${o.payment}"`, o.status]);
  });
  triggerCsvDownload('logic_sports_orders.csv', rows);
}

function triggerCsvDownload(filename, rows) {
  const csv = rows.map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

function resetDemoDatabase() {
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(DEFAULT_PRODUCTS));
  renderAdminDashboard();
  showToast('Catalog reset to factory defaults.');
}

function renderAdminDashboard() {
  const products = getProducts();
  const orders = getOrders();
  const leads = JSON.parse(localStorage.getItem(STORAGE_KEYS.BULK_LEADS) || '[]');
  const alerts = JSON.parse(localStorage.getItem(STORAGE_KEYS.RESTOCK_ALERTS) || '[]');

  let lowStockCount = 0;
  products.forEach(p => {
    p.sizes.forEach(sz => {
      if (getSizeStock(p, sz) < 5) lowStockCount++;
    });
  });

  document.getElementById('kpiTotalSkus').textContent = products.length;
  document.getElementById('kpiTotalUnits').textContent = products.reduce((s, p) => s + getProductTotalStock(p), 0);
  document.getElementById('kpiLowStock').textContent = lowStockCount;
  document.getElementById('kpiBulkQuotes').textContent = leads.length;
  document.getElementById('kpiTotalRevenue').textContent = '₹' + orders.reduce((s, o) => s + Number(o.total), 0).toLocaleString('en-IN');

  document.getElementById('adminCouponsList').innerHTML = getCoupons().map(c => `
    <span class="eyebrow-tag" style="margin-right:0.4rem;">
      ${c.code}: ${c.pct}% OFF (Min ₹${c.minOrder})
      <b style="cursor:pointer;margin-left:6px;color:var(--danger);" onclick="deleteAdminCoupon('${c.code}')">✕</b>
    </span>
  `).join('');

  document.getElementById('adminInventoryTable').innerHTML = products.map(p => `
    <tr>
      <td><strong>${p.sku}</strong><br>${p.name}<br><small style="color:#64748B;">${p.variants.length} Colorways</small></td>
      <td>₹${p.price.toLocaleString('en-IN')}</td>
      <td>
        ${p.sizes.map(sz => {
          const q = getSizeStock(p, sz);
          return `<span style="display:inline-block;font-family:var(--font-mono);font-size:0.72rem;padding:2px 6px;margin:2px;border:1px solid #0E1726;background:${q < 5 ? '#FEE2E2' : '#F1F5F9'};">${sz}: <b>${q}</b></span>`;
        }).join('')}
      </td>
      <td><strong>${getProductTotalStock(p)}</strong></td>
      <td>
        <button class="btn btn-outline-dark btn-sm" onclick="editAdminProduct('${p.id}')">EDIT</button>
        <button class="btn btn-danger btn-sm" onclick="deleteAdminProduct('${p.id}')">DEL</button>
      </td>
    </tr>
  `).join('');

  const ordBody = document.getElementById('adminOrdersTable');
  if (orders.length === 0) {
    ordBody.innerHTML = `<tr><td colspan="5">No customer orders placed yet.</td></tr>`;
  } else {
    ordBody.innerHTML = orders.map(o => `
      <tr>
        <td><strong>${o.id}</strong><br><small>${o.date}</small></td>
        <td>${o.customerName}<br><small>${o.phone}</small></td>
        <td>
          ${o.items.map(i => `${i.name} (${i.colorName}, <b>${i.size}</b>) ×${i.qty}`).join('<br>')}
          ${o.exchangeRequest ? `<br><span style="color:var(--danger);font-weight:700;">⇄ ${o.exchangeRequest}</span>` : ''}
        </td>
        <td><strong>₹${o.total.toLocaleString('en-IN')}</strong></td>
        <td>
          <select onchange="updateOrderStatus('${o.id}', this.value)" style="margin-bottom:0.35rem;padding:0.25rem;">
            ${['Processing', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'].map(st => `
              <option value="${st}" ${o.status === st ? 'selected' : ''}>${st}</option>
            `).join('')}
          </select><br>
          <button class="btn btn-dark btn-sm" onclick="printPackingSlip('${o.id}')">🖨️ SLIP</button>
        </td>
      </tr>
    `).join('');
  }

  const b2bBox = document.getElementById('adminB2BAndAlertsBox');
  b2bBox.innerHTML = `
    <h4 style="margin-bottom:0.4rem;">Team / Bulk Inquiries (${leads.length})</h4>
    ${leads.length === 0 ? '<p class="muted-text">No bulk requests yet.</p>' : leads.map(l => `
      <div style="border-bottom:1px solid var(--border);padding:0.45rem 0;font-size:0.82rem;">
        <strong>${l.org}</strong> (${l.contact} • ${l.phone}) — <b>${l.qty} Units</b> of ${l.category}<br>
        <small class="muted-text">${l.notes || ''}</small>
      </div>
    `).join('')}
    <h4 style="margin:1rem 0 0.4rem;">Sold-Out Size Restock Alerts (${alerts.length})</h4>
    ${alerts.length === 0 ? '<p class="muted-text">No restock requests logged.</p>' : alerts.map(a => `
      <div style="font-size:0.8rem;font-family:var(--font-mono);padding:0.25rem 0;">
        • SKU <b>${a.sku}</b> (Size ${a.size}) → Notify: ${a.contact} (${a.date})
      </div>
    `).join('')}
  `;
}
/* ============================================================================
   LOGIC SPORTS - VELOCITY TELEMETRY LOADER ENGINE
   ============================================================================ */
function runVelocityLoader(durationMs = 1150, customStatus = null, onComplete = null) {
  const loader = document.getElementById('logicLoader');
  if (!loader) {
    if (onComplete) onComplete();
    return;
  }

  const pctEl = document.getElementById('loaderPct');
  const fillEl = document.getElementById('loaderBarFill');
  const speedEl = document.getElementById('loaderSpeed');
  const cadenceEl = document.getElementById('loaderCadence');
  const statusEl = document.getElementById('loaderStatusText');

  const statusPhases = customStatus
    ? [customStatus]
    : [
        'CALIBRATING 4-WAY RIPSTOP WEAVE...',
        'PRESSURIZING NITRO CARBON PLATE...',
        'SYNCING LIVE SIZE MATRIX...',
        'READY FOR SPRINT.'
      ];

  loader.classList.remove('loader-hidden', 'loader-exit');
  let start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(1, elapsed / durationMs);
    const pct = Math.floor(progress * 100);

    if (pctEl) pctEl.textContent = `${pct}%`;
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (speedEl) speedEl.textContent = `${(progress * 34.8).toFixed(1)} KM/H`;
    if (cadenceEl) cadenceEl.textContent = `${Math.floor(170 + progress * 42)} SPM`;

    if (statusEl && statusPhases.length > 1) {
      const phaseIdx = Math.min(statusPhases.length - 1, Math.floor(progress * statusPhases.length));
      statusEl.textContent = statusPhases[phaseIdx];
    } else if (statusEl && customStatus) {
      statusEl.textContent = customStatus;
    }

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      if (onComplete) onComplete();
      loader.classList.add('loader-exit');
      setTimeout(() => {
        loader.classList.add('loader-hidden');
      }, 650);
    }
  }

  requestAnimationFrame(tick);
}

// Automatically fire the loader when the storefront opens
window.addEventListener('load', () => {
  runVelocityLoader(1250);
});