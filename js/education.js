(async function loadEducation() {
  try {
    const res = await fetch('./data/education.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const list = await res.json();
    const grid = document.getElementById('education-grid');
    grid.innerHTML = '';
    for (const e of list) {
      const card = document.createElement('article');
      card.className = 'education-card card';
      card.innerHTML = `
            <div class="education-header">
              <div class="institution-logo"><img src="${e.logo}" alt="${e.institution} logo" /></div>
              <div class="education-meta">
                <h3 class="institution-name">${e.institution}</h3>
                <p class="course-title">${e.title}</p>
                <span class="course-period">${e.period || ''}</span>
              </div>
            </div>
            <p class="course-description">${e.description || ''}</p>
            <div class="skill-badges">${(e.skills || []).map(s => `<span class="badge">${s}</span>`).join('')}</div>
          `;
      grid.appendChild(card);
    }
  } catch (err) {
    console.error('Erro ao carregar educação:', err);
    const grid = document.getElementById('education-grid');
    if (grid) grid.innerHTML = '<p class="error">Não foi possível carregar educação.</p>';
  }
})();