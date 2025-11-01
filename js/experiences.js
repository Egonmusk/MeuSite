(async function loadExperiences() {
  try {
    const res = await fetch('./data/experiences.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const list = await res.json();
    const grid = document.getElementById('experience-grid');
    grid.innerHTML = '';
    for (const e of list) {
      const card = document.createElement('article');
      card.className = 'experience-card card';
      card.innerHTML = `
            <div class="experience-header">
              <div class="company-logo"><img src="${e.logo}" alt="${e.company} logo" /></div>
              <div class="experience-meta">
                <h3 class="company-name">${e.company}</h3>
                <p class="job-title">${e.title}</p>
                <span class="job-period">${e.period || ''}</span>
              </div>
            </div>
            <p class="job-description">${e.description || ''}</p>
            <div class="skill-badges">${(e.skills || []).map(s => `<span class="badge">${s}</span>`).join('')}</div>
          `;
      grid.appendChild(card);
    }
  } catch (err) {
    console.error('Erro ao carregar experiências:', err);
    const grid = document.getElementById('experience-grid');
    if (grid) grid.innerHTML = '<p class="error">Não foi possível carregar experiências.</p>';
  }
})();