document.addEventListener("DOMContentLoaded", () => {
  const url = "https://domforat.com/domaines_disponibles.json";
  const fullUrl = `${url}?t=${Date.now()}`;
  const MAX_DOMAINS = 10; // Nombre de domaines à afficher

  // ----- 1) Récupération de la liste des domaines ----- //
  fetch(fullUrl)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("domain-list");
      container.innerHTML = "";

      const allDomains = data.domaines || [];
      const truncated = allDomains.slice(0, MAX_DOMAINS);

      truncated.forEach(domain => {
        const div = document.createElement("div");
        div.textContent = domain;

        // Bouton/icone pour copier l’URL
        const copyIcon = document.createElement("span");
        copyIcon.textContent = " 📋";
        copyIcon.style.cursor = "pointer";
        copyIcon.title = "Copier le domaine";
        copyIcon.addEventListener("click", (e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(domain)
            .then(() => console.log(`Copié: ${domain}`))
            .catch(err => console.error("Erreur copie:", err));
        });
        div.appendChild(copyIcon);

        container.appendChild(div);
      });

      // Si on a tronqué la liste, ajouter un bouton "Voir plus"
      if (allDomains.length > MAX_DOMAINS) {
        const seeMoreBtn = document.createElement("button");
        seeMoreBtn.textContent = "Voir plus...";
        seeMoreBtn.classList.add("see-more-button");
        seeMoreBtn.addEventListener("click", () => {
          window.open("https://domforat.com/", "_blank");
        });
        container.appendChild(seeMoreBtn);
      }
    })
    .catch(error => {
      document.getElementById("domain-list").textContent = "Erreur de chargement.";
      console.error("Erreur:", error);
    });

  // ----- 2) Gestion des onglets PRINCIPAUX ----- //
  document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
      // Retire la classe active sur tous les boutons
      document.querySelectorAll(".tab-button").forEach(btn => {
        btn.classList.remove("active");
      });
      // Active le bouton cliqué
      button.classList.add("active");

      // Masque tout le contenu
      document.querySelectorAll(".tab-content").forEach(content => {
        content.classList.remove("active");
      });

      // Affiche le contenu ciblé
      const targetId = button.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
    });
  });

  // ----- 3) Gestion des sous-onglets (dans l’onglet Outils) ----- //
  document.querySelectorAll(".sub-tab-button").forEach(subBtn => {
    subBtn.addEventListener("click", () => {
      // Retirer la classe active de tous les sous-boutons
      document.querySelectorAll(".sub-tab-button").forEach(sb => sb.classList.remove("active"));
      subBtn.classList.add("active");

      // Masquer tous les contenus de sous-onglets
      document.querySelectorAll(".sub-tab-content").forEach(sc => sc.classList.remove("active"));

      // Affiche celui qui correspond
      const subTarget = subBtn.getAttribute("data-subtarget");
      document.getElementById(subTarget).classList.add("active");
    });
  });
});
