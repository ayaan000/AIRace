/**
 * AIRace - Main Application
 */

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initParticles();
    initNavigation();
    renderHeroStats();
    renderCompanyCards();
    renderStockTicker();
    renderModelsGallery();
    renderNews();
    renderTimeline();
    initAnimations();
    initComparison();
});

// Theme Management
function initTheme() {
    const theme = storage.get('theme', 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    storage.set('theme', next);
    updateThemeIcon(next);
}

function updateThemeIcon(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Particle Background
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 15) + 's';
        container.appendChild(particle);
    }
}

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', throttle(() => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, 100));
}

// Hero Stats
function renderHeroStats() {
    const stats = [
        { value: COMPANIES.length, label: 'Companies Tracked' },
        { value: getAllModels().length, label: 'AI Models' },
        { value: calculateTotalValuation(), label: 'Total Valuation', format: 'currency' },
        { value: calculateAvgAGI(), label: 'Avg AGI Progress', suffix: '%' }
    ];

    const container = document.getElementById('hero-stats');
    if (!container) return;

    stats.forEach((stat, index) => {
        const div = document.createElement('div');
        div.className = 'hero-stat fade-in';
        div.style.animationDelay = (index * 0.1) + 's';

        let displayValue = stat.value;
        if (stat.format === 'currency') {
            displayValue = formatNumber(stat.value);
        } else if (stat.suffix) {
            displayValue = stat.value + stat.suffix;
        }

        div.innerHTML = `
      <div class="hero-stat-value">${displayValue}</div>
      <div class="hero-stat-label">${stat.label}</div>
    `;
        container.appendChild(div);
    });
}

function calculateTotalValuation() {
    return COMPANIES.reduce((sum, c) => sum + (c.valuation || 0), 0);
}

function calculateAvgAGI() {
    const total = COMPANIES.reduce((sum, c) => sum + c.agiProgress, 0);
    return Math.round(total / COMPANIES.length);
}

// Company Cards
function renderCompanyCards() {
    const container = document.getElementById('company-grid');
    if (!container) return;

    // Sort by AGI progress
    const sorted = [...COMPANIES].sort((a, b) => b.agiProgress - a.agiProgress);

    sorted.forEach((company, index) => {
        const card = createCompanyCard(company, index);
        container.appendChild(card);
    });
}

function createCompanyCard(company, index) {
    const card = document.createElement('div');
    card.className = 'company-card glass-card fade-in';
    card.style.animationDelay = (index * 0.05) + 's';
    card.dataset.companyId = company.id;

    const valuationDisplay = company.valuation
        ? formatNumber(company.valuation)
        : (company.stockSymbol ? 'Public' : 'N/A');

    card.innerHTML = `
    <div class="company-header">
      <div class="company-logo" style="background: ${company.logoColor}20; color: ${company.logoColor}">
        ${getInitials(company.name)}
      </div>
      <div class="company-info">
        <h3 class="company-name">${company.name}</h3>
        <p class="company-tagline">${company.tagline}</p>
      </div>
    </div>
    
    <div class="company-meta">
      ${company.focus.slice(0, 3).map(f => `<span class="tag tag-primary">${f}</span>`).join('')}
    </div>
    
    <div class="agi-progress">
      <div class="agi-progress-header">
        <span class="agi-progress-label">AGI Progress</span>
        <span class="agi-progress-value">${company.agiProgress}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill progress-animate" style="width: ${company.agiProgress}%"></div>
      </div>
    </div>
    
    <div class="company-stats">
      <div class="company-stat">
        <div class="company-stat-value">${valuationDisplay}</div>
        <div class="company-stat-label">Valuation</div>
      </div>
      <div class="company-stat">
        <div class="company-stat-value">${formatCompact(company.employees)}</div>
        <div class="company-stat-label">Employees</div>
      </div>
    </div>
  `;

    // Click handler for modal
    card.addEventListener('click', () => showCompanyModal(company));

    return card;
}

// Company Modal
function showCompanyModal(company) {
    const existing = document.getElementById('company-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'company-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
    <div class="modal-content glass-card scale-in">
      <button class="modal-close" onclick="closeModal()">&times;</button>
      
      <div class="modal-header">
        <div class="company-logo" style="background: ${company.logoColor}20; color: ${company.logoColor}; width: 72px; height: 72px; font-size: 1.75rem;">
          ${getInitials(company.name)}
        </div>
        <div>
          <h2>${company.name}</h2>
          <p style="color: var(--text-muted)">${company.tagline}</p>
        </div>
      </div>
      
      <div class="modal-body">
        <div class="modal-section">
          <h4>Company Details</h4>
          <div class="detail-grid">
            <div class="detail-item">
              <span class="detail-label">CEO</span>
              <span class="detail-value">${company.ceo}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Founded</span>
              <span class="detail-value">${company.founded}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">HQ</span>
              <span class="detail-value">${company.headquarters}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Employees</span>
              <span class="detail-value">${company.employees.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <div class="modal-section">
          <h4>Key Products</h4>
          <div class="products-list">
            ${company.products.map(p => `<span class="tag">${p}</span>`).join('')}
          </div>
        </div>
        
        <div class="modal-section">
          <h4>AI Capabilities</h4>
          <canvas id="capability-radar" width="300" height="300"></canvas>
        </div>
        
        ${company.investors.length ? `
        <div class="modal-section">
          <h4>Key Investors</h4>
          <div class="investors-list">
            ${company.investors.map(i => `<span class="tag tag-success">${i}</span>`).join('')}
          </div>
        </div>
        ` : ''}
      </div>
    </div>
  `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Draw radar chart
    setTimeout(() => {
        const canvas = document.getElementById('capability-radar');
        if (canvas) {
            const labels = ['NLP', 'Vision', 'Reasoning', 'Coding', 'Creativity', 'Multimodal'];
            const values = [
                company.capabilities.nlp,
                company.capabilities.vision,
                company.capabilities.reasoning,
                company.capabilities.coding,
                company.capabilities.creativity,
                company.capabilities.multimodal
            ];
            drawRadarChart(canvas, { labels, values });
        }
    }, 100);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function closeModal() {
    const modal = document.getElementById('company-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Stock Ticker
function renderStockTicker() {
    const container = document.getElementById('stock-ticker');
    if (!container) return;

    // Duplicate for seamless loop
    const items = [...STOCK_DATA, ...STOCK_DATA];

    items.forEach(stock => {
        const item = document.createElement('div');
        item.className = 'ticker-item';

        const changeClass = stock.change >= 0 ? 'positive' : 'negative';
        const changeSign = stock.change >= 0 ? '+' : '';

        item.innerHTML = `
      <span class="ticker-symbol">${stock.symbol}</span>
      <span class="ticker-price">$${stock.price.toFixed(2)}</span>
      <span class="ticker-change ${changeClass}">${changeSign}${stock.changePercent.toFixed(2)}%</span>
    `;

        container.appendChild(item);
    });
}

// Models Gallery
function renderModelsGallery(category = 'all') {
    const container = document.getElementById('models-grid');
    if (!container) return;

    container.innerHTML = '';
    const models = getModelsByCategory(category);

    models.forEach((model, index) => {
        const card = createModelCard(model, index);
        container.appendChild(card);
    });
}

function createModelCard(model, index) {
    const card = document.createElement('div');
    card.className = 'model-card glass-card fade-in';
    card.style.animationDelay = (index * 0.05) + 's';

    card.innerHTML = `
    <span class="model-category tag tag-primary">${model.category}</span>
    <div class="model-icon">${model.icon}</div>
    <h3 class="model-name">${model.name}</h3>
    <p class="model-company">${model.company}</p>
    <p class="model-description">${model.description}</p>
    
    <div class="model-metrics">
      ${Object.entries(model.metrics).slice(0, 3).map(([key, value]) => `
        <div class="model-metric">
          <div class="model-metric-value">${value}</div>
          <div class="model-metric-label">${key}</div>
        </div>
      `).join('')}
    </div>
  `;

    return card;
}

// Model category filters
function initModelFilters() {
    const container = document.getElementById('model-filters');
    if (!container) return;

    MODEL_CATEGORIES.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-secondary';
        btn.dataset.category = cat.id;
        btn.innerHTML = `${cat.icon} ${cat.name}`;
        btn.onclick = () => {
            document.querySelectorAll('#model-filters .btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderModelsGallery(cat.id);
        };

        if (cat.id === 'all') btn.classList.add('active');
        container.appendChild(btn);
    });
}

// News Feed
function renderNews() {
    const container = document.getElementById('news-grid');
    if (!container) return;

    NEWS_ITEMS.forEach((news, index) => {
        const card = document.createElement('div');
        card.className = 'news-card glass-card fade-in';
        card.style.animationDelay = (index * 0.05) + 's';

        card.innerHTML = `
      <div class="news-source">
        <span class="news-source-icon">${news.source[0]}</span>
        <span>${news.source}</span>
        <span class="tag tag-${getCategoryColor(news.category)}">${news.category}</span>
      </div>
      <h3 class="news-title">${news.title}</h3>
      <p class="news-excerpt">${news.excerpt}</p>
      <div class="news-meta">
        <span>${timeAgo(news.date)}</span>
      </div>
    `;

        container.appendChild(card);
    });
}

function getCategoryColor(category) {
    const colors = {
        'Release': 'primary',
        'Research': 'success',
        'Funding': 'warning',
        'Benchmark': 'tertiary',
        'Hardware': 'danger'
    };
    return colors[category] || 'primary';
}

// Timeline
function renderTimeline() {
    const container = document.getElementById('timeline');
    if (!container) return;

    TIMELINE_EVENTS.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item fade-in-left';
        item.style.animationDelay = (index * 0.1) + 's';

        item.innerHTML = `
      <div class="timeline-date">${event.date}</div>
      <div class="timeline-content">
        <h4 class="timeline-title">${event.title}</h4>
        <p class="timeline-description">${event.company}</p>
      </div>
    `;

        container.appendChild(item);
    });
}

// Comparison Tool
function initComparison() {
    const select1 = document.getElementById('compare-company-1');
    const select2 = document.getElementById('compare-company-2');

    if (!select1 || !select2) return;

    // Populate selects
    COMPANIES.forEach(company => {
        const opt1 = new Option(company.name, company.id);
        const opt2 = new Option(company.name, company.id);
        select1.add(opt1);
        select2.add(opt2);
    });

    // Set defaults
    select1.value = COMPANIES[0].id;
    select2.value = COMPANIES[1].id;

    // Update comparison
    const updateComparison = () => {
        const c1 = COMPANIES.find(c => c.id === select1.value);
        const c2 = COMPANIES.find(c => c.id === select2.value);
        if (c1 && c2) drawComparisonChart(c1, c2);
    };

    select1.addEventListener('change', updateComparison);
    select2.addEventListener('change', updateComparison);

    updateComparison();
}

function drawComparisonChart(company1, company2) {
    const canvas = document.getElementById('comparison-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const labels = ['NLP', 'Vision', 'Reasoning', 'Coding', 'Creativity', 'Multimodal'];
    const barWidth = 30;
    const groupWidth = 80;
    const startX = 60;
    const maxHeight = height - 80;

    labels.forEach((label, i) => {
        const x = startX + i * groupWidth;
        const v1 = company1.capabilities[label.toLowerCase()] || 0;
        const v2 = company2.capabilities[label.toLowerCase()] || 0;

        // Bar 1
        const h1 = (v1 / 100) * maxHeight;
        ctx.fillStyle = company1.logoColor;
        ctx.fillRect(x, height - 40 - h1, barWidth, h1);

        // Bar 2
        const h2 = (v2 / 100) * maxHeight;
        ctx.fillStyle = company2.logoColor;
        ctx.fillRect(x + barWidth + 5, height - 40 - h2, barWidth, h2);

        // Label
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.font = '10px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(label, x + barWidth + 2, height - 20);
    });

    // Legend
    ctx.fillStyle = company1.logoColor;
    ctx.fillRect(width - 150, 10, 15, 15);
    ctx.fillStyle = '#fff';
    ctx.font = '12px Inter';
    ctx.textAlign = 'left';
    ctx.fillText(company1.name, width - 130, 22);

    ctx.fillStyle = company2.logoColor;
    ctx.fillRect(width - 150, 30, 15, 15);
    ctx.fillStyle = '#fff';
    ctx.fillText(company2.name, width - 130, 42);
}

// Scroll Animations
function initAnimations() {
    observeElements('.fade-in, .fade-in-left, .fade-in-right, .stagger-children', (el) => {
        el.classList.add('visible');
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
