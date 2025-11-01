document.addEventListener("DOMContentLoaded", () => {
  const certifications = [
    {
      title: "Google Cybersecurity Professional Certificate",
      image: "https://images.credly.com/size/340x340/images/0bf0f2da-a699-4c82-82e2-56dcf1f2e1c7/image.png",
      link: "https://www.credly.com/badges/ab5b6f26-ffb8-492b-b3cf-c117dd0d75d5/linked_in_profile"
    }
  ];

  const container = document.getElementById("certifications-grid");

  if (!container) {
    console.error("Elemento #certifications-grid não encontrado!");
    return;
  }

  certifications.forEach(cert => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <img src="${cert.image}" alt="${cert.title}" class="project-image" loading="lazy">
      <h3 class="project-title">${cert.title}</h3>
      <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="project-link">
        Ver credencial
      </a>
    `;

    container.appendChild(card);
  });
});