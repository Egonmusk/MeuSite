document.addEventListener("DOMContentLoaded", () => {
  const certifications = [
    {
      title: "Google Cybersecurity Professional Certificate",
      image: "https://images.credly.com/size/340x340/images/0bf0f2da-a699-4c82-82e2-56dcf1f2e1c7/image.png",
      link: "https://www.credly.com/badges/ab5b6f26-ffb8-492b-b3cf-c117dd0d75d5/linked_in_profile",
      available: true
    },
    {
      title: "Google Cloud Computing Foundations Certificate",
      image: "https://images.credly.com/size/340x340/images/4dda8ae4-99ee-476c-bca3-6f0adbab42fe/image.png",
      link: "https://www.credly.com/org/google-cloud/badge/google-cloud-computing-foundations-certificate",
      available: false
    },
    {
      title: "CompTIA Security+ Certification",
      image: "https://images.credly.com/size/340x340/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob",
      link: "https://www.credly.com/org/comptia/badge/comptia-security-ce-certification",
      available: false
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
      ${cert.available
        ? `<a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="project-link">Ver credencial</a>`
        : `<button class="project-link coming-soon" disabled>Em breve</button>`
      }
    `;

    container.appendChild(card);
  });
});