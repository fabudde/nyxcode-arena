// NyxCode Arena — Rendering Logic

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function renderMetrics(scenario) {
  const d = SCENARIOS[scenario].metrics;
  const grid = document.getElementById('metrics-grid');

  const metricsData = [
    {
      label: 'Token Count',
      nyx: d.nyxcode.tokens,
      nextjs: d.nextjs.tokens,
      fastapi: d.fastapi.tokens,
      savings: Math.round((1 - d.nyxcode.tokens / d.nextjs.tokens) * 100)
    },
    {
      label: 'Lines of Code',
      nyx: d.nyxcode.lines,
      nextjs: d.nextjs.lines,
      fastapi: d.fastapi.lines,
      savings: Math.round((1 - d.nyxcode.lines / d.nextjs.lines) * 100)
    },
    {
      label: 'Files',
      nyx: d.nyxcode.files,
      nextjs: d.nextjs.files,
      fastapi: d.fastapi.files,
      savings: Math.round((1 - d.nyxcode.files / d.nextjs.files) * 100)
    },
    {
      label: 'Dependencies',
      nyx: d.nyxcode.deps,
      nextjs: d.nextjs.deps,
      fastapi: d.fastapi.deps,
      savings: 100
    }
  ];

  grid.innerHTML = metricsData.map(function(m) {
    return '<div class="metric-card">' +
      '<div class="metric-label">' + m.label + '</div>' +
      '<div class="metric-values">' +
        '<div class="metric-value nyx">' +
          '<span class="number">' + m.nyx.toLocaleString() + '</span>' +
          '<span class="lang">NyxCode</span>' +
        '</div>' +
        '<div class="metric-value other">' +
          '<span class="number">' + m.nextjs.toLocaleString() + '</span>' +
          '<span class="lang">Next.js</span>' +
        '</div>' +
        '<div class="metric-value other">' +
          '<span class="number">' + m.fastapi.toLocaleString() + '</span>' +
          '<span class="lang">FastAPI</span>' +
        '</div>' +
      '</div>' +
      '<div class="metric-savings">' +
        '<span class="savings-badge positive">\u2193 ' + m.savings + '% vs Next.js</span>' +
      '</div>' +
    '</div>';
  }).join('');
}

function renderCode(scenario) {
  var d = SCENARIOS[scenario];
  var container = document.getElementById('code-comparison');

  container.innerHTML =
    '<div class="code-panel nyx-panel">' +
      '<div class="code-panel-header">' +
        '<span class="lang-name"><span class="lang-dot nyx"></span>NyxCode</span>' +
        '<span class="file-count">' + d.metrics.nyxcode.files + ' file \u00b7 ' + d.metrics.nyxcode.tokens.toLocaleString() + ' tokens</span>' +
      '</div>' +
      '<div class="code-panel-body">' +
        '<pre><code class="language-python">' + escapeHtml(d.code.nyxcode) + '</code></pre>' +
      '</div>' +
    '</div>' +
    '<div class="code-panel">' +
      '<div class="code-panel-header">' +
        '<span class="lang-name"><span class="lang-dot nextjs"></span>Next.js 15 + Prisma</span>' +
        '<span class="file-count">' + d.metrics.nextjs.files + '+ files \u00b7 ' + d.metrics.nextjs.tokens.toLocaleString() + ' tokens</span>' +
      '</div>' +
      '<div class="code-panel-body">' +
        '<pre><code class="language-typescript">' + escapeHtml(d.code.nextjs) + '</code></pre>' +
      '</div>' +
    '</div>';

  container.querySelectorAll('pre code').forEach(function(el) {
    hljs.highlightElement(el);
  });
}

function renderFileTrees(scenario) {
  var d = SCENARIOS[scenario];
  var container = document.getElementById('file-trees');

  container.innerHTML =
    '<div class="file-tree">' +
      '<h4>\uD83E\uDD9E NyxCode Project Structure</h4>' +
      '<ul>' +
        d.fileTree.nyxcode.map(function(f) { return '<li>' + escapeHtml(f) + '</li>'; }).join('') +
      '</ul>' +
    '</div>' +
    '<div class="file-tree">' +
      '<h4>\u25B2 Next.js Project Structure</h4>' +
      '<ul>' +
        d.fileTree.nextjs.map(function(f) { return '<li>' + escapeHtml(f) + '</li>'; }).join('') +
      '</ul>' +
    '</div>';
}

function renderSavingsBars(scenario) {
  var d = SCENARIOS[scenario].metrics;
  var container = document.getElementById('savings-bars');
  var maxTokens = Math.max(d.nyxcode.tokens, d.nextjs.tokens, d.fastapi.tokens);

  container.innerHTML =
    '<h3 style="text-align:center;font-size:1.3rem;font-weight:700;margin-bottom:2rem;">Token Usage Comparison</h3>' +
    '<div class="savings-bar-container">' +
      '<div class="savings-bar-item">' +
        '<div class="savings-bar-label">' +
          '<span>\uD83E\uDD9E NyxCode</span>' +
          '<span class="savings-pct">' + d.nyxcode.tokens.toLocaleString() + ' tokens</span>' +
        '</div>' +
        '<div class="savings-bar">' +
          '<div class="savings-bar-fill nyx" style="width:0%" data-width="' + (d.nyxcode.tokens / maxTokens * 100).toFixed(1) + '%">' +
            '<span class="bar-label-inside">' + d.nyxcode.tokens.toLocaleString() + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="savings-bar-item">' +
        '<div class="savings-bar-label">' +
          '<span>\u25B2 Next.js 15 + Prisma</span>' +
          '<span style="color:var(--text-muted);font-family:\'JetBrains Mono\',monospace;">' + d.nextjs.tokens.toLocaleString() + ' tokens</span>' +
        '</div>' +
        '<div class="savings-bar">' +
          '<div class="savings-bar-fill other" style="width:0%" data-width="' + (d.nextjs.tokens / maxTokens * 100).toFixed(1) + '%">' +
            '<span class="bar-label-inside">' + d.nextjs.tokens.toLocaleString() + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="savings-bar-item">' +
        '<div class="savings-bar-label">' +
          '<span>\u26A1 FastAPI + SQLAlchemy</span>' +
          '<span style="color:var(--text-muted);font-family:\'JetBrains Mono\',monospace;">' + d.fastapi.tokens.toLocaleString() + ' tokens</span>' +
        '</div>' +
        '<div class="savings-bar">' +
          '<div class="savings-bar-fill other" style="width:0%" data-width="' + (d.fastapi.tokens / maxTokens * 100).toFixed(1) + '%">' +
            '<span class="bar-label-inside">' + d.fastapi.tokens.toLocaleString() + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  // Animate bars after render
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      container.querySelectorAll('.savings-bar-fill').forEach(function(bar) {
        bar.style.width = bar.getAttribute('data-width');
      });
    });
  });
}

// ===== INIT =====
var currentScenario = 'blog';

function switchScenario(scenario) {
  currentScenario = scenario;
  document.querySelectorAll('.scenario-tab').forEach(function(t) {
    if (t.dataset.scenario === scenario) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });
  renderMetrics(scenario);
  renderCode(scenario);
  renderFileTrees(scenario);
  renderSavingsBars(scenario);
}

// Tab clicks
document.querySelectorAll('.scenario-tab').forEach(function(tab) {
  tab.addEventListener('click', function() {
    switchScenario(tab.dataset.scenario);
  });
});

// Hero counter animation
function animateCounters() {
  document.querySelectorAll('.hero-stat-number.animated').forEach(function(el) {
    var target = parseInt(el.dataset.target);
    var suffix = el.dataset.suffix || '';
    var duration = 1500;
    var start = performance.now();

    function step(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(target * eased);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

// Intersection observer for fade-in animations
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.how-card.fade-in').forEach(function(el) {
  observer.observe(el);
});

// Initialize
switchScenario('blog');
animateCounters();
