/* ═══════════════════════════════════════════
   SERVICES DATA
═══════════════════════════════════════════ */
const services = [
  {
    iconClass: 'fa-solid fa-anchor', tag: 'Premium', title: 'Yacht Marina Services',
    short: 'Full marina management, berthing, fueling, provisioning, and concierge services for private and commercial yachts.',
    subtitle: 'Comprehensive marina and vessel management services for private and commercial maritime clients.',
    time: '2–4 hours',
    desc: 'Aquaterra Hub\'s Yacht Marina Services division provides a world-class berthing and vessel management experience. Our marina facilities are equipped with the latest navigation aids, security systems, and hospitality infrastructure to serve both leisure and commercial yacht operators.',
    features: [
      'Priority berthing allocation with advance reservation system',
      'Full-service fueling station (diesel, petrol, and eco-fuels)',
      'Fresh water, waste disposal, and shore power connections',
      '24/7 marina security and CCTV surveillance',
      'Concierge services: provisioning, crew logistics, customs clearance',
      'On-site vessel inspection and condition reporting',
      'Dedicated marine engineer standby for emergency repairs',
      'Clubhouse, lounge, and hospitality facilities for crew',
    ],
    steps: [
      { num: '01', title: 'Submit Reservation', desc: 'Complete the online berthing request with vessel specs and arrival dates.' },
      { num: '02', title: 'Confirmation & Assignment', desc: 'Our marina team confirms berth availability and allocates your slip within 2 hours.' },
      { num: '03', title: 'Pre-Arrival Coordination', desc: 'Receive a detailed arrival briefing including navigation guides and customs documentation.' },
      { num: '04', title: 'Welcome & Onboarding', desc: 'Our team meets you at the dock and handles all post-arrival formalities.' },
    ]
  },
  {
    iconClass: 'fa-solid fa-boxes-stacked', tag: 'Core', title: 'Logistics & Cargo Handling',
    short: 'Comprehensive cargo operations including loading, unloading, lashing, and port logistics coordination.',
    subtitle: 'End-to-end cargo operations management at port — from vessel to gate with zero disruption.',
    time: '4–8 hours',
    desc: 'Our Logistics & Cargo Handling division manages the complete operational cycle of cargo at port. From vessel discharge to container yard management, our IICL-certified team ensures that every unit is handled with precision and delivered on schedule.',
    features: [
      'Full stevedoring services — vessel loading and unloading operations',
      'Container stuffing, unstuffing, and transshipment handling',
      'ISO-compliant cargo lashing and securing for all cargo types',
      'Dangerous goods (IMO Class) handling with certified personnel',
      'Real-time cargo tracking via electronic manifest system',
      'Breakbulk, project cargo, and heavy-lift capabilities',
      'Container yard management with gate-to-gate visibility',
      'VGM (Verified Gross Mass) weighing and certification',
    ],
    steps: [
      { num: '01', title: 'Cargo Pre-Notification', desc: 'Submit cargo manifest, vessel ETA, and handling requirements 48 hours in advance.' },
      { num: '02', title: 'Operations Planning', desc: 'Our shift supervisor prepares a bespoke cargo operations plan and crew allocation.' },
      { num: '03', title: 'Execution & Monitoring', desc: 'Real-time updates as cargo is handled, scanned, and logged into our digital system.' },
      { num: '04', title: 'Documentation & Handover', desc: 'Receipt of EIR (Equipment Interchange Receipt) and full documentation package.' },
    ]
  },
  {
    iconClass: 'fa-solid fa-earth-americas', tag: 'Trade', title: 'Import & Export Services',
    short: 'Customs clearance, documentation, regulatory compliance, and full trade facilitation services.',
    subtitle: 'Navigate global trade with confidence — from origin documentation to final customs clearance.',
    time: '1–3 business days',
    desc: 'Aquaterra Hub provides a comprehensive import and export facilitation service designed to eliminate the friction of cross-border maritime trade. Our team of licensed customs brokers, freight forwarders, and trade compliance experts manage every regulatory touchpoint on your behalf.',
    features: [
      'Import customs clearance with all Egyptian Customs Authority portals',
      'Export documentation: EGM, Packing List, Certificate of Origin',
      'Letter of Credit (L/C) documentation advisory and handling',
      'Pre-arrival cargo scanning coordination and compliance review',
      'Quarantine, phytosanitary, and health certificate facilitation',
      'Dual-use goods assessment and restricted commodity licensing',
      'ATA Carnet processing for temporary imports/exports',
      'Post-clearance audit support and duty drawback claims',
    ],
    steps: [
      { num: '01', title: 'Document Submission', desc: 'Upload your commercial invoice, B/L, packing list, and commodity details.' },
      { num: '02', title: 'Compliance Check', desc: 'Our trade team reviews documents against regulatory requirements and flags issues.' },
      { num: '03', title: 'Customs Filing', desc: 'We file the customs entry electronically and liaise with authorities on your behalf.' },
      { num: '04', title: 'Release & Delivery', desc: 'Receive the customs release order and coordinate final inland delivery.' },
    ]
  },
  {
    iconClass: 'fa-solid fa-warehouse', tag: 'Storage', title: 'Warehousing & Storage',
    short: 'Secure, climate-controlled warehousing with inventory management and bonded storage options.',
    subtitle: 'Intelligent warehousing solutions adjacent to the port — secure, scalable, and fully managed.',
    time: '24 hours',
    desc: 'Our warehouse complex offers 85,000 sqm of modern storage facilities located within the port free zone, providing immediate connectivity to vessel operations and inland transport. From bonded storage to temperature-controlled units, we accommodate every cargo profile.',
    features: [
      '85,000 sqm of covered warehouse space in free-zone location',
      'Bonded warehouse license for duty-deferred storage',
      'Climate-controlled cells for pharmaceuticals, food, and sensitive cargo',
      'Hazmat storage bays with explosion-proof infrastructure',
      'WMS (Warehouse Management System) with client portal access',
      'RFID inventory tracking and barcode scanning at every touchpoint',
      'Flexible contract options: spot, monthly, and long-term agreements',
      '24/7 CCTV, security guard patrols, and access control systems',
    ],
    steps: [
      { num: '01', title: 'Storage Assessment', desc: 'Share your cargo profile, volume, and storage requirements with our team.' },
      { num: '02', title: 'Space Allocation', desc: 'We assign a dedicated storage zone and configure the WMS for your inventory.' },
      { num: '03', title: 'Cargo Receipt', desc: 'Cargo arrives at our facility, is inspected, scanned, and logged in real-time.' },
      { num: '04', title: 'Ongoing Management', desc: 'Access your inventory dashboard 24/7 and request releases or transfers anytime.' },
    ]
  },
  {
    iconClass: 'fa-solid fa-gas-pump', tag: 'Marine', title: 'Supply & Ship Services',
    short: 'Vessel provisioning, bunker fuel, fresh water, spare parts, and crew welfare supply management.',
    subtitle: 'Everything a vessel needs to sail — delivered directly to the gangway.',
    time: '12–24 hours',
    desc: 'Aquaterra Hub\'s Ship Supply division is one of the most comprehensive in the Eastern Mediterranean, providing vessels of all types with every consumable, spare part, and provision they require — directly to the gangway or into the vessel\'s stores.',
    features: [
      'Bunker fuel supply (IFO 380, MDO, MGO, LNG-compatible) with BDN certification',
      'Fresh water supply via certified potable water tankers',
      'Ship provisions: dry goods, frozen food, dairy, and beverages',
      'Deck and engine room stores: ropes, fenders, chemicals, lubricants',
      'Spare parts procurement with global sourcing network',
      'Crew personal effects, medicines, and welfare supplies',
      'Ship chandler services for all flag-state compliant items',
      'Bonded stores: tobacco, alcohol, and duty-free items',
    ],
    steps: [
      { num: '01', title: 'Pre-Arrival Order', desc: 'Submit your ship\'s store requisition 24 hours prior to vessel arrival at port.' },
      { num: '02', title: 'Order Confirmation', desc: 'We confirm availability, pricing, and estimated delivery schedule to your agent.' },
      { num: '03', title: 'Gangway Delivery', desc: 'Our supply team delivers directly to the vessel with full documentation.' },
      { num: '04', title: 'Receipt & Invoice', desc: 'Chief Officer signs the delivery note and receives the final supply invoice.' },
    ]
  },
  {
    iconClass: 'fa-solid fa-truck', tag: 'Delivery', title: 'Last Mile Delivery',
    short: 'Precise inland delivery from port to door, with real-time tracking and proof of delivery systems.',
    subtitle: 'Bridging the final gap — from the port gate to the final destination with zero-touch precision.',
    time: '4–48 hours',
    desc: 'Our Last Mile Delivery service connects port cargo release to final consignee delivery using a tech-driven fleet management platform. Whether it\'s a single container to a commercial warehouse or a fleet of trucks delivering to multiple retail sites, Aquaterra Hub manages every kilometer.',
    features: [
      'GPS-tracked fleet of flatbeds, dry vans, and specialized trailers',
      'Container drayage from port gate to any inland destination',
      'Temperature-controlled transport for perishable cargo',
      'Proof of Delivery (POD) capture via mobile app with e-signature',
      'Dynamic routing optimization to reduce transit time and costs',
      'Dangerous goods transport with licensed and certified drivers',
      'Multi-drop distribution and cross-docking capabilities',
      'Same-day delivery available for priority cargo within 100km of port',
    ],
    steps: [
      { num: '01', title: 'Delivery Order', desc: 'Submit the delivery order after cargo customs clearance is complete.' },
      { num: '02', title: 'Vehicle Dispatch', desc: 'A tracked vehicle is dispatched and you receive live ETA notifications.' },
      { num: '03', title: 'In-Transit Updates', desc: 'Track your delivery in real-time via the Aquaterra Hub client portal.' },
      { num: '04', title: 'Delivery Confirmation', desc: 'Receive a digital POD with timestamp, signature, and photo documentation.' },
    ]
  },
  {
    iconClass: 'fa-solid fa-wrench', tag: 'Technical', title: 'Maintenance & Technical Services',
    short: 'Vessel inspections, dry-dock coordination, engine overhauls, and full technical support services.',
    subtitle: 'Keeping vessels seaworthy and compliant — from routine maintenance to full dry-dock overhauls.',
    time: 'By Assessment',
    desc: 'Aquaterra Hub\'s Technical Services department is staffed by certified marine engineers, naval architects, and classification society surveyors. We provide a complete range of vessel maintenance services designed to keep fleets operational, compliant, and performing at peak efficiency.',
    features: [
      'Planned Maintenance System (PMS) audit and implementation support',
      'Underwater hull and propeller inspections (ROV and diver teams)',
      'Main engine overhaul, turbocharger maintenance, and fuel system servicing',
      'Electrical systems inspection and automation troubleshooting',
      'ISM Code and SOLAS compliance inspections and certification support',
      'Dry-dock coordination: scheduling, supervision, and cost control',
      'Classification society survey facilitation (Bureau Veritas, Lloyd\'s Register, DNV)',
      'Emergency response: on-call engineers for 24/7 breakdown support at port',
    ],
    steps: [
      { num: '01', title: 'Technical Assessment', desc: 'Submit vessel details and deficiency list for an initial remote assessment.' },
      { num: '02', title: 'Engineer Deployment', desc: 'A qualified marine engineer boards the vessel at your designated port.' },
      { num: '03', title: 'Works Execution', desc: 'All maintenance works are executed under our quality management system.' },
      { num: '04', title: 'Certification & Handover', desc: 'Receive all completion certificates, class endorsements, and maintenance records.' },
    ]
  },
];

/* ═══════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════ */
let prevPage = 'home';
let currentPage = 'home';

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const el = document.getElementById('page-' + name);
  if (el) { el.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');
  prevPage = currentPage;
  currentPage = name;
  if (name === 'services') buildServicesGrid();
  const mainNav = document.getElementById('main-nav');
  const navToggle = document.getElementById('nav-toggle');
  if (mainNav) mainNav.classList.remove('nav-open');
  if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
}

function goBack() { showPage(prevPage || 'home'); }

/* ─── Nav scroll effect ─── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

/* ═══════════════════════════════════════════
   HERO CANVAS PARTICLES
═══════════════════════════════════════════ */
(function () {
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.size = Math.random() * 1.5 + 0.5;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = '#2dd4bf';
      ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    }
  }
  for (let i = 0; i < 120; i++) particles.push(new Particle());
  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.globalAlpha = (1 - d / 100) * 0.08;
          ctx.strokeStyle = '#2dd4bf';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connect();
    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ═══════════════════════════════════════════
   BUILD SERVICES GRID
═══════════════════════════════════════════ */
function buildServicesGrid() {
  const grid = document.getElementById('services-full-grid');
  if (!grid || grid.children.length > 0) return;
  grid.innerHTML = services.map((s, i) => `
    <div class="service-card" onclick="showDetail(${i})">
      <div class="svc-tag">${s.tag}</div>
      <div class="svc-icon"><i class="${s.iconClass}" aria-hidden="true"></i></div>
      <h3>${s.title}</h3>
      <p>${s.short}</p>
      <span class="svc-link">Apply for Service →</span>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════
   SERVICE DETAIL
═══════════════════════════════════════════ */
function showDetail(index) {
  const s = services[index];
  document.getElementById('detail-icon').innerHTML = `<i class="${s.iconClass}" aria-hidden="true"></i>`;
  document.getElementById('detail-title').textContent = s.title;
  document.getElementById('detail-subtitle').textContent = s.subtitle;
  document.getElementById('svc-time').textContent = s.time;
  document.getElementById('detail-main-content').innerHTML = `
    <h2>Service Overview</h2>
    <p>${s.desc}</p>
    <h2>What's Included</h2>
    <ul class="feature-list">${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
    <h2>How to Apply</h2>
    <div class="steps-list">
      ${s.steps.map(step => `
        <div class="step-item">
          <div class="step-num">${step.num}</div>
          <div class="step-content">
            <h4>${step.title}</h4>
            <p>${step.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  showPage('detail');
}

/* ═══════════════════════════════════════════
   FORM SUBMIT
═══════════════════════════════════════════ */
function submitForm() {
  document.getElementById('success-overlay').classList.add('show');
}
function closeSuccess() {
  document.getElementById('success-overlay').classList.remove('show');
}

/* ─── Filter buttons ─── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    this.closest('.table-filters').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

/* ─── Initial nav state ─── */
document.getElementById('nav-home').classList.add('active');

/* ─── Mobile navigation ─── */
(function initMobileNav() {
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  if (!nav || !toggle) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
})();

/* ─── Logo keyboard (role="button") ─── */
document.querySelectorAll('.nav-logo[role="button"]').forEach((logo) => {
  logo.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showPage('home');
    }
  });
});

