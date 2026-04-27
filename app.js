/* Steady Voice — dashboard app logic */
(function () {
  'use strict';

  const state = {
    scenarios: window.SCENARIOS || [],
    activeId: null,
    activeChannel: 'tv',
    activeCommunitySub: 'family',
    filter: 'all',
    query: '',
    district: {
      district: '',
      super: '',
      comms: '',
      phone: '',
      email: '',
      web: ''
    }
  };

  // ---------------- Helpers ----------------
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        if (k === 'class') node.className = attrs[k];
        else if (k === 'html') node.innerHTML = attrs[k];
        else if (k.startsWith('on') && typeof attrs[k] === 'function') {
          node.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
        } else node.setAttribute(k, attrs[k]);
      }
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach(c => {
        if (c == null) return;
        node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
      });
    }
    return node;
  }

  function showToast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.hidden = false;
    requestAnimationFrame(() => t.classList.add('is-visible'));
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
      t.classList.remove('is-visible');
      setTimeout(() => { t.hidden = true; }, 220);
    }, 1800);
  }

  function applyDistrictFill(text) {
    if (!text) return text;
    const d = state.district;
    let out = text;
    if (d.district) out = out.replaceAll('[DISTRICT NAME]', d.district);
    if (d.super) out = out.replaceAll('[SUPERINTENDENT NAME]', d.super);
    if (d.super) out = out.replaceAll('Superintendent [NAME]', 'Superintendent ' + d.super);
    if (d.comms) out = out.replaceAll('[COMMUNICATIONS LEAD]', d.comms);
    if (d.phone) out = out.replaceAll('[PHONE]', d.phone);
    if (d.email) out = out.replaceAll('[EMAIL]', d.email);
    if (d.web) out = out.replaceAll('[DISTRICT WEBSITE]', d.web);
    return out;
  }

  function findPlaceholders(text) {
    if (!text) return [];
    const matches = text.match(/\[[A-Z][A-Z0-9 _\/\-,#&]+\]/g) || [];
    const seen = new Set();
    matches.forEach(m => seen.add(m));
    return Array.from(seen);
  }

  // ---------------- Sidebar ----------------
  function buildFilters() {
    const cats = Array.from(new Set(state.scenarios.map(s => s.category)));
    const root = $('#filters');
    cats.forEach(cat => {
      root.appendChild(el('button', {
        class: 'chip',
        'data-filter': cat,
        onclick: () => { state.filter = cat; updateFilterChips(); renderList(); }
      }, cat));
    });
    $$('.chip[data-filter="all"]').forEach(b => {
      b.addEventListener('click', () => { state.filter = 'all'; updateFilterChips(); renderList(); });
    });
  }
  function updateFilterChips() {
    $$('.chip', $('#filters')).forEach(c => {
      c.classList.toggle('is-active', c.getAttribute('data-filter') === state.filter);
    });
  }

  function filteredScenarios() {
    const q = state.query.trim().toLowerCase();
    return state.scenarios.filter(s => {
      if (state.filter !== 'all' && s.category !== state.filter) return false;
      if (!q) return true;
      const hay = (s.title + ' ' + s.summary + ' ' + s.category).toLowerCase();
      return hay.includes(q);
    });
  }

  function renderList() {
    const root = $('#scenarioList');
    root.innerHTML = '';
    const items = filteredScenarios();
    if (!items.length) {
      root.appendChild(el('p', { class: 'muted small', style: 'padding: 12px 6px;' }, 'No scenarios match your search.'));
      return;
    }
    items.forEach(s => {
      const btn = el('button', {
        class: 'scenario-item' + (state.activeId === s.id ? ' is-active' : ''),
        role: 'listitem',
        onclick: () => selectScenario(s.id)
      }, [
        el('span', { class: 'dot ' + s.severity }),
        el('span', { class: 'meta' }, [
          el('span', { class: 'title' }, s.title),
          el('span', { class: 'cat' }, s.category)
        ])
      ]);
      root.appendChild(btn);
    });
  }

  // ---------------- Detail pane ----------------
  function selectScenario(id) {
    state.activeId = id;
    state.activeChannel = 'tv';
    state.activeCommunitySub = 'family';
    renderList();
    renderDetail();
  }

  function severityLabel(sev) {
    return sev === 'high' ? 'High severity' : sev === 'medium' ? 'Medium severity' : 'Lower severity';
  }

  function renderDetail() {
    const root = $('#detail');
    root.innerHTML = '';

    if (!state.activeId) {
      const empty = el('div', { class: 'detail-empty' }, [
        el('div', { class: 'inner' }, [
          el('div', { class: 'empty-mark' }, [
            (function () {
              const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              svg.setAttribute('width', '24'); svg.setAttribute('height', '24');
              svg.setAttribute('viewBox', '0 0 24 24');
              svg.setAttribute('fill', 'none');
              svg.setAttribute('stroke', 'currentColor');
              svg.setAttribute('stroke-width', '1.6');
              svg.setAttribute('stroke-linecap', 'round');
              svg.setAttribute('stroke-linejoin', 'round');
              svg.innerHTML = '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>';
              return svg;
            })()
          ]),
          el('h2', null, 'Pick a scenario to begin'),
          el('p', { class: 'muted' }, 'Browse the library on the left, or open a holding statement for the first 30 minutes when facts are still incomplete.'),
          el('div', { style: 'margin-top: 16px; display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;' }, [
            el('button', { class: 'btn btn-primary btn-sm', onclick: openHolding }, 'Use a holding statement'),
            el('button', { class: 'btn btn-sm', onclick: () => $('#search').focus() }, 'Search scenarios')
          ])
        ])
      ]);
      root.appendChild(empty);
      return;
    }

    const s = state.scenarios.find(x => x.id === state.activeId);
    if (!s) return;

    // Header
    const head = el('section', { class: 'detail-head' }, [
      el('div', { class: 'crumbs' }, [
        document.createTextNode(s.category + ' '),
        el('span', { class: 'sev ' + s.severity }, severityLabel(s.severity))
      ]),
      el('h1', null, s.title),
      el('p', { class: 'summary' }, s.summary)
    ]);
    root.appendChild(head);

    // Prep grid: first actions + tough Qs
    const prep = el('section', { class: 'prep-grid' }, [
      el('div', { class: 'card' }, [
        el('h3', null, 'First 30 minutes'),
        el('ul', null, s.firstActions.map(a => el('li', null, a)))
      ]),
      el('div', { class: 'card' }, [
        el('h3', null, 'Anticipate these questions'),
        el('ul', null, s.toughQuestions.map(a => el('li', null, a)))
      ])
    ]);
    root.appendChild(prep);

    // Templates section
    const block = el('section', { class: 'templates-block' }, [
      el('h2', { class: 'section-title' }, 'Drafts by channel')
    ]);

    const tabs = el('div', { class: 'tabs' });
    const channels = [
      { key: 'tv', label: 'TV statement' },
      { key: 'radio', label: 'Radio statement' },
      { key: 'print', label: 'Press release' },
      { key: 'community', label: 'School community' }
    ];
    channels.forEach(c => {
      tabs.appendChild(el('button', {
        class: 'tab' + (state.activeChannel === c.key ? ' is-active' : ''),
        'data-channel': c.key,
        onclick: () => { state.activeChannel = c.key; renderDetail(); }
      }, c.label));
    });
    block.appendChild(tabs);

    // Sub-tabs for community channel
    if (state.activeChannel === 'community') {
      const subs = [
        { key: 'family', label: 'Family letter' },
        { key: 'staff', label: 'Staff memo' },
        { key: 'social', label: 'Social media' },
        { key: 'robocall', label: 'Robocall script' },
        { key: 'board', label: 'Board briefing' }
      ];
      const subRow = el('div', { class: 'subtabs' });
      subs.forEach(c => {
        subRow.appendChild(el('button', {
          class: 'subtab' + (state.activeCommunitySub === c.key ? ' is-active' : ''),
          onclick: () => { state.activeCommunitySub = c.key; renderDetail(); }
        }, c.label));
      });
      block.appendChild(subRow);
    }

    // Get current text
    let text;
    if (state.activeChannel === 'community') {
      text = s.templates.community[state.activeCommunitySub] || '';
    } else {
      text = s.templates[state.activeChannel] || '';
    }
    text = applyDistrictFill(text);

    // Template panel
    const panel = el('div', { class: 'template-panel' }, [
      el('div', { class: 'template-toolbar' }, [
        el('div', { class: 'meta-line' }, [
          el('span', null, channelLabel()),
          el('span', null, '·'),
          el('span', null, wordCount(text) + ' words')
        ]),
        el('div', { class: 'actions' }, [
          el('button', { class: 'btn btn-sm', onclick: handleCopy, title: 'Copy current draft' }, [
            iconCopy(), document.createTextNode(' Copy')
          ]),
          el('button', { class: 'btn btn-sm', onclick: handleDownload, title: 'Download as text file' }, [
            iconDownload(), document.createTextNode(' Download')
          ]),
          el('button', { class: 'btn btn-sm', onclick: handleReset, title: 'Reset to original draft' }, 'Reset')
        ])
      ])
    ]);

    const placeholders = findPlaceholders(text);
    if (placeholders.length) {
      const row = el('div', { class: 'placeholders-row' });
      placeholders.forEach(p => row.appendChild(el('span', { class: 'placeholder-pill' }, p)));
      panel.appendChild(row);
    }

    const ta = el('textarea', {
      class: 'template-text',
      spellcheck: 'true',
      'aria-label': 'Editable draft',
      oninput: function () {
        const wcEl = panel.querySelector('.meta-line span:last-child');
        if (wcEl) wcEl.textContent = wordCount(this.value) + ' words';
        // Refresh placeholder pills
        const newPlaceholders = findPlaceholders(this.value);
        const existingRow = panel.querySelector('.placeholders-row');
        if (existingRow) existingRow.remove();
        if (newPlaceholders.length) {
          const row = el('div', { class: 'placeholders-row' });
          newPlaceholders.forEach(p => row.appendChild(el('span', { class: 'placeholder-pill' }, p)));
          // Insert after toolbar, before textarea
          panel.insertBefore(row, panel.querySelector('textarea'));
        }
      }
    });
    ta.value = text;
    panel.appendChild(ta);
    block.appendChild(panel);

    root.appendChild(block);

    // Principles
    const principles = el('section', { class: 'principles' }, [
      el('h3', null, 'Principles to remember'),
      el('div', { class: 'principles-grid' },
        (window.PR_PRINCIPLES || []).map(p =>
          el('div', { class: 'principle' }, [
            el('p', { class: 'title' }, p.title),
            el('p', { class: 'body' }, p.body)
          ])
        )
      )
    ]);
    root.appendChild(principles);

    function channelLabel() {
      const map = { tv: 'TV statement', radio: 'Radio statement', print: 'Press release' };
      if (state.activeChannel === 'community') {
        const subMap = { family: 'Family letter', staff: 'Staff memo', social: 'Social media', robocall: 'Robocall script', board: 'Board briefing' };
        return subMap[state.activeCommunitySub];
      }
      return map[state.activeChannel];
    }

    function handleCopy() {
      const val = ta.value;
      navigator.clipboard.writeText(val).then(() => showToast('Copied to clipboard'))
        .catch(() => {
          ta.select();
          document.execCommand('copy');
          showToast('Copied to clipboard');
        });
    }

    function handleDownload() {
      const fname = (s.id + '-' + state.activeChannel +
        (state.activeChannel === 'community' ? '-' + state.activeCommunitySub : '') + '.txt');
      const blob = new Blob([ta.value], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = el('a', { href: url, download: fname });
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showToast('Downloaded ' + fname);
    }

    function handleReset() {
      ta.value = text;
      ta.dispatchEvent(new Event('input'));
      showToast('Reset to original draft');
    }
  }

  function wordCount(text) {
    if (!text) return 0;
    return text.trim().split(/\s+/).filter(Boolean).length;
  }

  function iconCopy() {
    const svg = svgEl('<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>');
    return svg;
  }
  function iconDownload() {
    const svg = svgEl('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>');
    return svg;
  }
  function svgEl(inner) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '12'); svg.setAttribute('height', '12');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2.2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.innerHTML = inner;
    return svg;
  }

  // ---------------- Holding statement ----------------
  function openHolding() {
    $('#holdingModal').hidden = false;
    renderHolding('short');
    $$('.tab', $('#holdingModal')).forEach(t => {
      t.classList.toggle('is-active', t.getAttribute('data-htab') === 'short');
    });
  }
  function renderHolding(which) {
    const panel = $('#holdingPanel');
    const text = applyDistrictFill(window.HOLDING_STATEMENT[which]);
    panel.innerHTML = '';
    const ta = el('textarea', { class: 'template-text', spellcheck: 'true' });
    ta.value = text;

    const toolbar = el('div', { class: 'template-toolbar' }, [
      el('div', { class: 'meta-line' }, [
        el('span', null, which === 'short' ? 'Short — under 60 seconds' : 'Full — for letters and press'),
        el('span', null, '·'),
        el('span', null, wordCount(text) + ' words')
      ]),
      el('div', { class: 'actions' }, [
        el('button', { class: 'btn btn-sm', onclick: () => {
          navigator.clipboard.writeText(ta.value).then(() => showToast('Copied to clipboard'));
        }}, 'Copy'),
        el('button', { class: 'btn btn-sm', onclick: () => {
          ta.value = text;
          ta.dispatchEvent(new Event('input'));
          showToast('Reset');
        }}, 'Reset')
      ])
    ]);
    panel.appendChild(toolbar);

    const placeholders = findPlaceholders(text);
    if (placeholders.length) {
      const row = el('div', { class: 'placeholders-row' });
      placeholders.forEach(p => row.appendChild(el('span', { class: 'placeholder-pill' }, p)));
      panel.appendChild(row);
    }

    ta.addEventListener('input', () => {
      const wcEl = toolbar.querySelector('.meta-line span:last-child');
      if (wcEl) wcEl.textContent = wordCount(ta.value) + ' words';
    });
    panel.appendChild(ta);
  }

  // ---------------- Checklist ----------------
  function openChecklist() {
    const body = $('#checklistBody');
    body.innerHTML = '';
    const list = el('div', { class: 'checklist' });
    (window.CHECKLIST || []).forEach((item, i) => {
      const id = 'chk-' + i;
      list.appendChild(el('label', { for: id }, [
        el('input', { type: 'checkbox', id }),
        document.createTextNode(item)
      ]));
    });
    body.appendChild(list);
    body.appendChild(el('p', { class: 'muted small', style: 'margin-top:14px' },
      'This checklist is your in-the-moment companion. The order matters: confirm first, draft second, and align internal voice before external voice.'));
    $('#checklistModal').hidden = false;
  }

  // ---------------- Settings ----------------
  function openSettings() {
    $('#set-district').value = state.district.district;
    $('#set-super').value = state.district.super;
    $('#set-comms').value = state.district.comms;
    $('#set-phone').value = state.district.phone;
    $('#set-email').value = state.district.email;
    $('#set-web').value = state.district.web;
    $('#settingsModal').hidden = false;
  }
  function bindSettings() {
    ['district','super','comms','phone','email','web'].forEach(k => {
      const input = $('#set-' + k);
      input.addEventListener('input', () => {
        state.district[k] = input.value;
        renderDetail();
      });
    });
  }

  // ---------------- Theme ----------------
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    const icon = $('#themeIcon');
    if (t === 'dark') {
      icon.innerHTML = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="m17.66 6.34 1.41-1.41"/>';
    } else {
      icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    }
  }

  // ---------------- Init ----------------
  function init() {
    // Filters and list
    buildFilters();
    renderList();
    renderDetail();

    // Search
    $('#search').addEventListener('input', e => {
      state.query = e.target.value;
      renderList();
    });

    // Modal binds
    $('#holdingBtn').addEventListener('click', openHolding);
    $('#checklistBtn').addEventListener('click', openChecklist);
    $('#settingsBtn').addEventListener('click', openSettings);
    $$('.icon-btn[data-close]').forEach(b => {
      b.addEventListener('click', () => { $('#' + b.getAttribute('data-close')).hidden = true; });
    });
    $$('.modal').forEach(m => {
      m.addEventListener('click', e => { if (e.target === m) m.hidden = true; });
    });
    $$('.tab[data-htab]').forEach(t => {
      t.addEventListener('click', () => {
        const which = t.getAttribute('data-htab');
        $$('.tab[data-htab]').forEach(x => x.classList.toggle('is-active', x === t));
        renderHolding(which);
      });
    });
    bindSettings();

    // Theme
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
    $('#themeBtn').addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        $$('.modal').forEach(m => { if (!m.hidden) m.hidden = true; });
      }
      // Cmd/Ctrl + K to focus search
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        $('#search').focus();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
