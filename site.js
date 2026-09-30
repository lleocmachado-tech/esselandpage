/* Página estática: nenhum dado de cronograma é enviado ou armazenado nesta demonstração. */
(() => {
  'use strict';
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const config = window.ESSE_SITE || {plans: []};
  const dialog = $('#access-dialog');
  const menu = $('.menu-toggle');
  const navigation = $('#navigation');
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(expanded));
    menu.setAttribute('aria-label', expanded ? 'Fechar menu' : 'Abrir menu');
    navigation.classList.toggle('is-open', expanded);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) {
      navigation.classList.remove('is-open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Abrir menu');
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      menu.click(); menu.focus();
    }
  });
  $('#year').textContent = new Date().getFullYear();
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }
  for (const plan of config.plans) {
    const card = element('article', `plan${plan.featured ? ' featured' : ''}`);
    if (plan.featured) card.append(element('span', 'plan-badge', 'EVOLUÇÃO EM FOCO'));
    card.append(element('h3', '', plan.name), element('p', 'plan-description', plan.description),
      element('p', 'plan-price', plan.price || 'Em breve'),
      element('p', 'plan-price-note', plan.price ? 'Condições conforme oferta comercial.' : 'Valores ainda não divulgados.'),
      element('p', 'plan-focus', plan.focus));
    const list = element('ul');
    plan.features.forEach(feature => list.append(element('li', '', feature)));
    card.append(list);
    const link = element('button', 'button', `Escolher ${plan.name}`);
    link.type = 'button';
    link.dataset.planId = plan.id;
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-label', `Escolher plano ${plan.name}`);
    const arrow = element('span', '', '↗'); arrow.setAttribute('aria-hidden', 'true');
    link.append(arrow); card.append(link); $('#plan-cards').append(card);
  }
  const serviceUrl = value => {
    if (!value) return null;
    try {
      const url = new URL(value);
      return url.protocol === 'https:' ? url : null;
    } catch { return null; }
  };
  function showPurchase(plan) {
    $('#access-eyebrow').textContent = 'PLANO SELECIONADO';
    $('#access-title').textContent = plan.name;
    $('#access-message').textContent = `${plan.description} Seu acesso será liberado após a confirmação da compra.`;
    $('.purchase-steps').hidden = false;
    const destination = serviceUrl(config.checkoutUrl);
    $('#checkout-link').hidden = !destination;
    $('#checkout-pending').hidden = Boolean(destination);
    $('#checkout-pending').textContent = 'Contratação em breve';
    $('#purchase-note').textContent = destination
      ? 'Você continuará para a contratação. O acesso depende da confirmação do pagamento.'
      : 'A contratação ainda não está disponível. Nenhuma cobrança será realizada nesta prévia.';
    if (destination) {
      // O backend resolve o preço aprovado a partir deste ID. Não enviamos valores ou autorização.
      destination.searchParams.set('plan', plan.id);
      $('#checkout-link').href = destination.href;
      $('#checkout-link').textContent = 'Continuar para a compra ↗';
    } else { $('#checkout-link').removeAttribute('href'); }
    dialog.showModal();
  }
  $$('[data-plan-id]').forEach(button => button.addEventListener('click', () => {
    const plan = config.plans.find(item => item.id === button.dataset.planId);
    if (plan) showPurchase(plan);
  }));
  $$('[data-customer-access]').forEach(link => {
    const destination = serviceUrl(config.customerAreaUrl);
    if (destination) { link.href = destination.href; return; }
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      event.preventDefault();
      $('#access-eyebrow').textContent = 'ÁREA DO CLIENTE';
      $('#access-title').textContent = 'Seu acesso, após a compra.';
      $('#access-message').textContent = 'O acesso será vinculado à sua conta e liberado após a confirmação do pagamento.';
      $('.purchase-steps').hidden = false;
      $('#checkout-link').hidden = true;
      $('#checkout-link').removeAttribute('href');
      $('#checkout-pending').hidden = false;
      $('#checkout-pending').textContent = 'Área do cliente em preparação';
      $('#purchase-note').textContent = 'A contratação e a área do cliente ainda não estão disponíveis nesta prévia.';
      dialog.showModal();
    });
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

  const taskProgress = $('#task-b-progress');
  function updateCalculation() {
    const progress = Number(taskProgress.value);
    const contribution = 30 * progress / 100;
    const format = value => value.toLocaleString('pt-BR', {minimumFractionDigits: 1, maximumFractionDigits: 1});
    $('#task-b-percent').textContent = `${progress}%`;
    $('#equation-progress').textContent = `${progress}%`;
    $('#weighted-total').textContent = `${format(50 + contribution)}%`;
    $('#b-contribution').textContent = `${format(contribution)} p.p.`;
    $('#simple-average').textContent = `${format((100 + progress) / 3)}%`;
    $('#contribution-b').style.width = `${contribution}%`;
    $('#contribution-bar').setAttribute('aria-label', `A entrega 50 pontos percentuais, B entrega ${format(contribution)} e C entrega zero.`);
    taskProgress.setAttribute('aria-valuetext', `${progress}% concluída; avanço total ${format(50 + contribution)}%`);
  }
  taskProgress.addEventListener('input', updateCalculation);
  updateCalculation();

  const NS = 'http://www.w3.org/2000/svg';
  const svgEl = (tag, attrs, text) => {
    const node = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    if (text) node.textContent = text;
    return node;
  };
  // Séries ilustrativas. Os cálculos de cronogramas reais permanecem no aplicativo.
  const revisions = [
    {t: .56, actual: 43, date: '05/09/2026', label: '05 set 2026', gain: 'Primeira revisão'},
    {t: .58, actual: 45, date: '12/09/2026', label: '12 set 2026', gain: '+2,0 p.p.'},
    {t: .60, actual: 47, date: '19/09/2026', label: '19 set 2026', gain: '+2,0 p.p.'}
  ];
  const planned = [0, 2, 8, 19, 32, 47, 60, 80, 94, 99, 100];
  const interpolate = t => {
    if (t >= 1) return 100;
    const scaled = Math.max(0, t) * 10, i = Math.floor(scaled), f = scaled - i;
    const slope = j => {
      if (j === 0 || j === planned.length - 1) return 0;
      const a = planned[j] - planned[j - 1], b = planned[j + 1] - planned[j];
      return a && b ? 2 * a * b / (a + b) : 0;
    };
    // Hermite monótono: suaviza a ilustração sem ultrapassar os valores de cada trecho.
    return (2 * f ** 3 - 3 * f ** 2 + 1) * planned[i]
      + (f ** 3 - 2 * f ** 2 + f) * slope(i)
      + (-2 * f ** 3 + 3 * f ** 2) * planned[i + 1]
      + (f ** 3 - f ** 2) * slope(i + 1);
  };
  const x = t => 50 + t * 835;
  const y = p => 290 - p * 2.5;
  const path = pts => pts.map(([t, p], i) => `${i ? 'L' : 'M'}${x(t).toFixed(2)},${y(p).toFixed(2)}`).join(' ');
  const samples = (start, end, count, fn) => Array.from({length: count + 1}, (_, i) => {
    const t = start + (end - start) * i / count; return [t, fn(t)];
  });
  for (const value of [0, 25, 50, 75, 100]) {
    $('#demo-grid').append(svgEl('line', {x1: 50, x2: 1000, y1: y(value), y2: y(value), stroke: '#e9edf3'}),
      svgEl('text', {x: 35, y: y(value) + 4, 'text-anchor': 'end', class: 'chart-labels'}, String(value)));
  }
  for (const [t, label] of [[0, 'Início'], [.3, 'Execução'], [.6, 'Set / 2026'], [1, 'Jun / 2027']]) {
    $('#demo-grid').append(svgEl('text', {x: x(t), y: 320, 'text-anchor': t ? 'middle' : 'start', class: 'chart-labels'}, label));
  }
  $('#demo-planned').setAttribute('d', path(samples(0, 1, 100, interpolate)));
  const formatted = value => value.toLocaleString('pt-BR', {minimumFractionDigits: 1, maximumFractionDigits: 1});
  let animation = null, current = {...revisions[2]};
  function draw(state) {
    const value = interpolate(state.t);
    const actual = t => interpolate(t) * (state.actual / value);
    const past = samples(0, state.t, 70, actual);
    const future = samples(state.t, 1.12, 55, t => {
      const f = (t - state.t) / (1.12 - state.t);
      return state.actual + (100 - state.actual) * (f * 2 - f * f);
    });
    $('#demo-real').setAttribute('d', path(past));
    $('#demo-forecast').setAttribute('d', path(future));
    const area = [...samples(0, state.t, 70, interpolate), ...past.slice().reverse()];
    $('#demo-area').setAttribute('d', path(area) + ' Z');
    $('#demo-status').setAttribute('x1', x(state.t)); $('#demo-status').setAttribute('x2', x(state.t));
    $('#demo-status-label').setAttribute('x', x(state.t));
    $('#demo-dot').setAttribute('cx', x(state.t)); $('#demo-dot').setAttribute('cy', y(state.actual));
    current = state;
  }
  function selectRevision(index, animate = true) {
    const target = revisions[index], from = {...current};
    cancelAnimationFrame(animation);
    $$('[data-status]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.status) === index)));
    $('#demo-plan').textContent = `${formatted(interpolate(target.t))}%`;
    $('#demo-actual').textContent = `${formatted(target.actual)}%`;
    $('#demo-gain').textContent = target.gain;
    $('#demo-status-label').textContent = target.date;
    $('#demo-chart-title').textContent = `Exemplo em ${target.date}: planejado ${formatted(interpolate(target.t))}%, realizado ${formatted(target.actual)}%. A linha tracejada é uma previsão ilustrativa.`;
    if (!animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { draw(target); return; }
    const start = performance.now();
    function frame(now) {
      const progress = Math.min(1, (now - start) / 380), ease = 1 - (1 - progress) ** 3;
      draw({t: from.t + (target.t - from.t) * ease, actual: from.actual + (target.actual - from.actual) * ease});
      if (progress < 1) animation = requestAnimationFrame(frame);
    }
    animation = requestAnimationFrame(frame);
  }
  $$('[data-status]').forEach(button => button.addEventListener('click', () => selectRevision(Number(button.dataset.status))));
  selectRevision(2, false);
  const palettes = {blue: ['#2954e1', '#ea580c'], graphite: ['#334155', '#d65b15'], green: ['#146251', '#c67116']};
  $$('[data-palette]').forEach(button => button.addEventListener('click', () => {
    const colors = palettes[button.dataset.palette];
    $('#report-preview').style.setProperty('--plan', colors[0]);
    $('#report-preview').style.setProperty('--real', colors[1]);
    $$('[data-palette]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  }));
})();
