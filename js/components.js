// Shared Header + Footer injector
// Included on every page

const NAP = {
  name: "NexCore Laptop Service Lucknow",
  phone: "+919236336066",
  phoneDisplay: "+91 92363 36066",
  whatsapp: "919236336066",
  email: "HPservicecentre61@gmail.com",
  address: "G-101, Ishawari Dayal Complex, Latouche Road, Opp. Old RTO Office, Lucknow - 226018",
  lat: "26.839916",
  lng: "80.924990",
  hours: "Mon–Sat: 10:00 AM – 8:00 PM | Sun: 11:00 AM – 5:00 PM"
};

const ROOT = (function() {
  const p = window.location.pathname;
  const depth = (p.match(/\//g)||[]).length;
  if (depth <= 1) return './';
  if (depth === 2) return '../';
  return '../../';
})();

function injectHeader() {
  const html = `
  <div id="loader">
    <div class="loader-logo">⚡ NexCore Service</div>
    <div class="loader-bar"><div class="loader-bar-fill"></div></div>
    <p style="font-size:0.75rem;color:var(--text-muted)">Loading...</p>
  </div>

  <header id="header">
    <div class="container">
      <nav class="nav-inner">
        <a href="${ROOT}index.html" class="nav-logo">
          <div class="logo-icon">💻</div>
          <div>NexCore<span> Service</span></div>
        </a>
        <ul class="nav-links">
          <li><a href="${ROOT}index.html#services">Services</a></li>
          <li><a href="${ROOT}index.html#about">About</a></li>
          <li><a href="${ROOT}pages/areas/index.html">Areas</a></li>
          <li><a href="${ROOT}pages/brands/index.html">Brands</a></li>
          <li><a href="${ROOT}pages/blog/index.html">Blog</a></li>
          <li><a href="${ROOT}index.html#contact">Contact</a></li>
        </ul>
        <div class="nav-cta">
          <a href="tel:${NAP.phone}" class="btn btn-sm btn-call">📞 Call Now</a>
          <a href="https://wa.me/${NAP.whatsapp}?text=Hi%2C%20I%20need%20laptop%20repair%20service" class="btn btn-sm btn-whatsapp" target="_blank" rel="noopener">💬 WhatsApp</a>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Open Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </header>

  <div id="mobile-menu" role="dialog" aria-label="Mobile Navigation">
    <button class="menu-close" id="menu-close" aria-label="Close Menu">✕</button>
    <ul>
      <li><a href="${ROOT}index.html#services">Services</a></li>
      <li><a href="${ROOT}index.html#about">About</a></li>
      <li><a href="${ROOT}pages/areas/index.html">Areas We Serve</a></li>
      <li><a href="${ROOT}pages/brands/index.html">Brands</a></li>
      <li><a href="${ROOT}pages/blog/index.html">Blog</a></li>
      <li><a href="${ROOT}index.html#contact">Contact</a></li>
    </ul>
    <div style="display:flex;gap:12px;margin-top:10px;">
      <a href="tel:${NAP.phone}" class="btn btn-call">📞 ${NAP.phoneDisplay}</a>
      <a href="https://wa.me/${NAP.whatsapp}" class="btn btn-whatsapp" target="_blank">💬 WhatsApp</a>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', html);
}

function injectFooter() {
  const mapSrc = `https://maps.google.com/maps?q=${NAP.lat},${NAP.lng}&z=16&output=embed`;
  const html = `
  <footer itemscope itemtype="https://schema.org/LocalBusiness">
    <meta itemprop="name" content="${NAP.name}">
    <meta itemprop="telephone" content="${NAP.phone}">
    <meta itemprop="email" content="${NAP.email}">
    <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
      <meta itemprop="streetAddress" content="G-101, Ishawari Dayal Complex, Latouche Road">
      <meta itemprop="addressLocality" content="Lucknow">
      <meta itemprop="addressRegion" content="Uttar Pradesh">
      <meta itemprop="postalCode" content="226018">
      <meta itemprop="addressCountry" content="IN">
    </div>
    <div class="container">
      <div class="footer-inner">
        <div>
          <div class="footer-logo">💻 NexCore <span style="color:var(--accent)">Service</span></div>
          <p class="footer-desc">Authorised laptop & computer repair service in Lucknow. Trusted by 5000+ customers across Hazratganj, Gomti Nagar, Indira Nagar, Aminabad & all major areas.</p>
          <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:16px;">📍 Near Old RTO Office, Latouche Road, Lucknow<br>Also near Charbagh Railway Station (3 km), Hazratganj (2 km)</p>
          <div class="footer-social">
            <a href="https://wa.me/${NAP.whatsapp}" class="social-btn" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>
            <a href="tel:${NAP.phone}" class="social-btn" aria-label="Call">📞</a>
            <a href="mailto:${NAP.email}" class="social-btn" aria-label="Email">📧</a>
            <a href="https://maps.google.com/?q=${NAP.lat},${NAP.lng}" class="social-btn" target="_blank" rel="noopener" aria-label="Google Maps">📍</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="${ROOT}pages/services/laptop-repair.html">Laptop Repair</a></li>
            <li><a href="${ROOT}pages/services/motherboard-repair.html">Motherboard Repair</a></li>
            <li><a href="${ROOT}pages/services/screen-replacement.html">Screen Replacement</a></li>
            <li><a href="${ROOT}pages/services/data-recovery.html">Data Recovery</a></li>
            <li><a href="${ROOT}pages/services/ssd-upgrade.html">SSD Upgrade</a></li>
            <li><a href="${ROOT}pages/services/macbook-repair.html">MacBook Repair</a></li>
            <li><a href="${ROOT}pages/services/chip-level-repair.html">Chip Level Repair</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Areas We Serve</h4>
          <ul class="footer-links">
            <li><a href="${ROOT}pages/areas/hazratganj.html">Hazratganj</a></li>
            <li><a href="${ROOT}pages/areas/gomti-nagar.html">Gomti Nagar</a></li>
            <li><a href="${ROOT}pages/areas/indira-nagar.html">Indira Nagar</a></li>
            <li><a href="${ROOT}pages/areas/aminabad.html">Aminabad</a></li>
            <li><a href="${ROOT}pages/areas/alambagh.html">Alambagh</a></li>
            <li><a href="${ROOT}pages/areas/aliganj.html">Aliganj</a></li>
            <li><a href="${ROOT}pages/areas/chowk.html">Chowk</a></li>
            <li><a href="${ROOT}pages/areas/naka-hindola.html">Naka Hindola</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Location</h4>
          <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:8px;">${NAP.address}</p>
          <div class="footer-map">
            <iframe src="${mapSrc}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="NexCore Laptop Service Location"></iframe>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 NexCore Laptop Service Lucknow. All rights reserved. | <a href="${ROOT}sitemap.xml" style="color:var(--text-muted)">Sitemap</a></p>
        <p style="font-size:0.75rem;color:var(--text-muted)">Laptop Repair Lucknow · Computer Service Center · Chip Level Repair · MacBook Repair Lucknow</p>
      </div>
    </div>
  </footer>

  <div class="float-btns">
    <a href="https://wa.me/${NAP.whatsapp}?text=Hi%2C%20I%20need%20laptop%20repair%20in%20Lucknow" class="float-btn wa" target="_blank" rel="noopener" aria-label="WhatsApp Support">
      💬 <span>WhatsApp</span>
    </a>
    <a href="tel:${NAP.phone}" class="float-btn call" aria-label="Call Now">
      📞 <span>Call Now</span>
    </a>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

// Auto inject on load
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  // Re-init main.js stuff that depends on injected elements
  const s = document.createElement('script');
  s.src = ROOT + 'js/main.js';
  document.head.appendChild(s);
});
